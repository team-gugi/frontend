import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import PageTitle from '@/components/PageTitle';
import MateForm from '../components/MateForm';

export default function MatePostPage() {
  return (
    <>
      <Header />
      <PageTitle title="매칭 글 작성하기" />
      <MateForm />
      <Navigation />
    </>
  );
}
