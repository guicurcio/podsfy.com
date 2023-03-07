import Footer from 'components/common/Footer';
import Header from 'components/pod/Header';

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-x-hidden bg-[#0D0E12]">
      <div className="backdrop-brightness-[10%]">
        <Header></Header>
        {children}
        <Footer></Footer>
      </div>
    </div>
  );
}
