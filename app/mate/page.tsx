'use client';
import Image from 'next/image';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { useEffect, useState } from 'react';
import OptionSelector from './components/OptionSelector';
import BottomSheet from './components/BottomSheet';
import MatchingCard from './components/MatchingCard';

import PlusIcon from '../../app/public/icons/Plus.svg';
import { redirect, useRouter } from 'next/navigation';
import { fetchLatestPosts, IMatePost } from '@/lib/api/fetchLatestMatchApi';

export default function MateMainPage() {
  const [posts, setPosts] = useState<IMatePost[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

  const openBottomSheet = () => setBottomSheetOpen(true);
  const closeBottomSheet = () => setBottomSheetOpen(false);

  useEffect(() => {
    loadLatestPosts();
  }, []);

  const loadLatestPosts = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newPosts = await fetchLatestPosts(cursor);

      if (newPosts.length > 0) {
        setPosts((prev) => [...prev, ...newPosts]);
        setCursor(newPosts[newPosts.length - 1].updatedAt); // 마지막 post의 updatedAt 저장
      } else {
        setHasMore(false); // 더 이상 데이터가 없음을 표시
      }
    } catch (error) {
      console.error('Failed to load posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const [selectedOptions, setSelectedOptions] = useState({
    gender: '',
    age: '',
    date: '',
    team: '',
    member: 1,
    stadium: '',
  });

  const handleApplyOptions = (filters: any) => {
    setSelectedOptions(filters);
  };

  return (
    <>
      <Header />
      <span className="flex px-24 text-12 font-extralight text-SemiBlack">
        혼자보단 같이! 직관 친구들을 찾아 떠나볼까요? (🖐🏻'-' ){' '}
      </span>
      <div className="flex flex-col gap-10 px-24 py-20 mb-16">
        <span className="flex text-12 font-normal text-Gray ">
          맞춤 조건을 설정해보세요!
        </span>
        <OptionSelector
          options={selectedOptions} // onSelect={handleOptionSelect}
          onOpenBottomSheet={openBottomSheet}
          // onBlur={handleFinalSubmit}
        />

        {posts.map((post) => (
          <MatchingCard
            key={post.mateId}
            title={post.title}
            content={post.content}
            options={post.options}
            confirmedMembers={post.confirmedMembers}
            maxMembers={post.options.member}
            daysUntilGame={post.daysUntilGame}
            daysSinceWritten={post.daysSinceWritten}
          />
        ))}
      </div>

      <Navigation />
      <button
        className="fixed bottom-68 right-18 w-48 h-48 bg-Gray drop-shadow-md rounded-full flex items-center justify-center z-10 "
        onClick={() => router.push('/mate/post')}
      >
        <Image src={PlusIcon} alt="추가 버튼" width={20} height={20} />
      </button>
      {isBottomSheetOpen && (
        <BottomSheet onClose={closeBottomSheet} onApply={handleApplyOptions} />
      )}

      {hasMore && (
        <button
          onClick={loadLatestPosts}
          disabled={loading}
          className="block mx-auto mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? '로딩 중...' : '더 보기'}
        </button>
      )}
    </>
  );
}
