import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import PageTitle from '@/components/PageTitle';
import MateForm from '../../components/MateForm';

export default function MateEditPage() {
  return (
    <>
      <Header />
      <PageTitle title="매칭글 수정하기" />
      <MateForm />
      <Navigation />
    </>
  );
}
