import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import PageTitle from '@/components/PageTitle';
import MateEditForm from '../../components/MateEditForm';

export default function MateEditPage() {
  return (
    <>
      <Header />
      <PageTitle title="매칭글 수정하기" />
      <MateEditForm />
      <Navigation />
    </>
  );
}
