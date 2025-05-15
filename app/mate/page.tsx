'use client';
import Image from 'next/image';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { useEffect, useState } from 'react';
import BottomSheet from './components/BottomSheet';
import MatchingCard from './components/MatchingCard';

import PlusIcon from '../../app/public/icons/Plus.svg';
import { redirect, useRouter } from 'next/navigation';
import {
  fetchFilteredPosts,
  fetchLatestPosts,
  IMatePost,
} from '@/lib/api/fetchMatchApi';
import Filter from './components/Filter';
import SkeletonMatchingCard from './components/SkeletonMatchingCard';

export default function MateMainPage() {
  const [posts, setPosts] = useState<IMatePost[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

  const DEFAULT_OPTIONS = {
    gender: '',
    age: '',
    date: '',
    team: '',
    member: 1,
    stadium: '',
  };

  const [selectedOptions, setSelectedOptions] = useState({
    gender: '',
    age: '',
    date: '',
    team: '',
    member: 1,
    stadium: '',
  });

  const openBottomSheet = () => setBottomSheetOpen(true);
  const closeBottomSheet = () => setBottomSheetOpen(false);

  useEffect(() => {
    loadLatestPosts();
  }, []);

  // useEffect(() => {
  //   if (selectedOptions) {
  //     console.log('updated selected options on UseEffect : ', selectedOptions);
  //     loadFilteredPosts(); // selectedOptions가 변경될 때마다 호출
  //   }
  // }, [selectedOptions]); // selectedOptions가 변경될 때마다 실행
  useEffect(() => {
    if (cursor === null && selectedOptions !== DEFAULT_OPTIONS) {
      loadFilteredPosts();
    }
  }, [cursor, selectedOptions]);

  const handleApplyOptions = (filters: any) => {
    console.log('filters on page.tsx : ', filters);
    setSelectedOptions(filters);
    setPosts([]); // 이전 게시물 초기화
    setHasMore(true); // 새로운 요청 시 더보기 버튼 활성화
    setCursor(null); // 커서 초기화
    // loadFilteredPosts(); // 필터된 게시물 로드
  };

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

  // 필터가 적용된 후 게시물 로드
  const loadFilteredPosts = async () => {
    if (loading || !hasMore) return;

    // 기본값과 비교해 필터링 조건이 있는지 확인
    const isDefaultFilters =
      JSON.stringify(selectedOptions) === JSON.stringify(DEFAULT_OPTIONS);

    if (isDefaultFilters) {
      console.log('기본값 필터 요청을 막았습니다.');
      return; // 기본값이면 요청 중단
    }

    setLoading(true);
    console.log('selected options : ', selectedOptions);
    console.log('cursor : ', cursor);
    try {
      const newPosts = await fetchFilteredPosts(selectedOptions, cursor); // 필터된 게시물 요청

      if (newPosts.length > 0) {
        setPosts((prev) => [...prev, ...newPosts]);
        setCursor(newPosts[newPosts.length - 1].nextCursor ?? null); // 마지막 post의 nextCursor 저장
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Failed to load filtered posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <span className="flex px-24 py-10 text-14 font-normal text-DarkGray">
        혼자보단 같이! 직관 친구들을 찾아 떠나볼까요? (🖐🏻'-' ){' '}
      </span>
      <div className="flex flex-col gap-12 px-24 mb-24">
        <span className="flex text-14 font-normal text-DarkGray ">
          맞춤 조건을 설정해보세요!
        </span>
        {/* <Filter
          options={selectedOptions} // onSelect={handleOptionSelect}
          onOpenBottomSheet={openBottomSheet}
          // onBlur={handleFinalSubmit}
        /> */}

        <Filter
          options={selectedOptions}
          onOpenBottomSheet={openBottomSheet}
          // onApply={handleApplyOptions} // 옵션 적용 시 필터 상태 업데이트
        />
        {loading
          ? Array.from({ length: 2 }).map((_, index) => (
              <SkeletonMatchingCard key={index} />
            ))
          : posts.map((post) => (
              <MatchingCard
                key={post.mateId}
                title={post.title}
                content={post.content}
                options={post.options}
                confirmedMembers={post.confirmedMembers}
                maxMembers={post.options.member}
                daysUntilGame={post.daysUntilGame}
                daysSinceWritten={post.daysSinceWritten}
                mateId={post.mateId}
              />
            ))}

        {/* {posts.map((post) => (
          <MatchingCard
            key={post.mateId}
            title={post.title}
            content={post.content}
            options={post.options}
            confirmedMembers={post.confirmedMembers}
            maxMembers={post.options.member}
            daysUntilGame={post.daysUntilGame}
            daysSinceWritten={post.daysSinceWritten}
            mateId={post.mateId}
          />
        ))} */}
      </div>

      <Navigation />
      <button
        className="fixed bottom-68 right-18 w-48 h-48 bg-Gray drop-shadow-md rounded-full flex items-center justify-center z-10 animate-bounce"
        onClick={() => router.push('/mate/post')}
      >
        <Image src={PlusIcon} alt="추가 버튼" width={20} height={20} />
      </button>
      {isBottomSheetOpen && (
        <BottomSheet onClose={closeBottomSheet} onApply={handleApplyOptions} />
      )}

      {/* {hasMore && (
        <button
          onClick={loadLatestPosts}
          disabled={loading}
          className="block mx-auto px-80 py-20 bg-BlockColor text-Gray rounded-lg disabled:opacity-50"
        >
          {loading ? '로딩 중...' : '더 보기'}
        </button>
      )} */}
      <div className="flex items-center justify-center mb-60">
        {hasMore && (
          <button
            onClick={() => {
              if (
                !selectedOptions.gender &&
                !selectedOptions.age &&
                !selectedOptions.date &&
                !selectedOptions.team &&
                selectedOptions.member === 1 &&
                !selectedOptions.stadium
              ) {
                loadLatestPosts(); // 필터 옵션이 기본값일 때
              } else {
                loadFilteredPosts(); // 필터 옵션이 적용되었을 때
              }
            }}
            disabled={loading}
            className="flex justify-center text-center mt-40 px-116 py-10 border-1 border-Gray bg-White text-Gray text-16 font-normal rounded-xl disabled:opacity-50"
          >
            {loading ? '로딩 중...' : '더 많은 매칭 보기'}
          </button>
        )}
      </div>
      {/* {hasMore && (
        <button
          onClick={() => {
            if (
              !selectedOptions.gender &&
              !selectedOptions.age &&
              !selectedOptions.date &&
              !selectedOptions.team &&
              selectedOptions.member === 1 &&
              !selectedOptions.stadium
            ) {
              loadLatestPosts(); // 필터 옵션이 기본값일 때
            } else {
              loadFilteredPosts(); // 필터 옵션이 적용되었을 때
            }
          }}
          disabled={loading}
          className="flex mx-24 justify-center text-center mt-40 px-100 py-10 border-1 border-Gray bg-White text-Gray text-16 font-normal rounded-xl disabled:opacity-50"
        >
          {loading ? '로딩 중...' : '더 많은 매칭 보기'}
        </button>
      )} */}
    </>
  );
}
