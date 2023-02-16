import User from 'components/User/User';
import Header from 'components/dashboard/Header/Header';
import Link from 'next/link';

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#0D0E12] overflow-x-hidden relative">
      <div className="backdrop-brightness-[10%]">
        <Header></Header>
        {children}
        {/* <Footer2></Footer2> */}
      </div>
    </div>
  );
}
