import Footer from 'components/common/Footer';

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#0D0E12] overflow-x-hidden relative">
      <div className="backdrop-brightness-[10%]">
        {children}
        <Footer></Footer>
      </div>
    </div>
  );
}
