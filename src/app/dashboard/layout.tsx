import Link from 'next/link';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#0D0E12] overflow-x-hidden relative">
      <div className="backdrop-brightness-[10%]">
        <div className="relative bg-[#0D0E12]  z-50 border-b border-[#fafafa] border-opacity-[10%]">
          <div className="backdrop-brightness-[50%]  mx-auto">
            <div className="max-w-[1200px] mx-auto py-3">
              <Link href="/">
                <p className="tracking-[-0.10em]  text-2xl font-bold text-[#949494] font-SpaceGrotesk">
                  podsfy
                </p>
              </Link>
            </div>
          </div>
        </div>

        {children}
        {/* <Footer2></Footer2> */}
      </div>
    </div>
  );
}
