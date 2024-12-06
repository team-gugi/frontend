// 'use client';
import TeamButton from './components/Team';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';

export default function DetailPage() {
  const teams = [
    {
      id: 'samsung',
      name: '삼성 라이온즈',
      logo: '/icons/logo_samsung.svg',
    },
    { id: 'lg', name: 'LG 트윈스', logo: '/icons/logo_lg.svg' },
    { id: 'lotte', name: '롯데 자이언츠', logo: '/icons/logo_lotte.svg' },
    { id: 'SSG', name: 'SSG 랜더스', logo: '/icons/logo_SSG.svg' },
    { id: 'kt', name: 'KT 위즈', logo: '/icons/logo_kt.svg' },
    { id: 'kiwoom', name: '키움 히어로즈', logo: '/icons/logo_kiwoom' },
    { id: 'doosan', name: '두산 베어스', logo: '/icons/logo_doosan' },
    { id: 'kia', name: '기아 타이거즈', logo: '/icons/logo_kia' },
    { id: 'nc', name: 'NC 다이노스', logo: '/icons/logo_nc' },
    { id: 'hanhwa', name: '한화 이글스', logo: '/icons/logo_hanhwa' },
  ];

  return (
    <>
      <Header />
      <section className="px-24 py-40">
        <span className="text-24 font-normal text-SemiBlack">
          (임시)구단별 상세 페이지
        </span>

        <div className="py-40">
          <div className="grid grid-cols-2 gap-20">
            {teams.map((team) => (
              <TeamButton key={team.id} team={team} />
            ))}
          </div>
        </div>
      </section>
      <Navigation />
    </>
  );
}
