import mergeClasses from 'utils/mergeClasses';

export default function ForYouPage() {
  return (
    <div className="relative z-50 mx-auto mt-[80px] min-h-[800px] max-w-[900px]">
      <div
        className={mergeClasses(
          'h-[600px] w-full',
          ' overflow-hidden rounded-[5px]',
          'bg-[#0D0E12] py-[25px]',
          'border border-sharper border-opacity-10',
          'px-[20px] text-center font-visuelt shadow-3xl backdrop-blur-[10px]',
          'grid grid-flow-row items-start justify-items-start',
        )}
      >
        <div className="grid grid-flow-row gap-3">
          <h1 className=" font-lausanne text-[32px] font-semibold leading-[18px] tracking-[-1.5%] text-white/[0.50]">
            Top Charts
          </h1>
          <p className={mergeClasses('text-[18px] text-white/[0.31]')}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro veniam delectus
            reiciendis nihil cumque, dolore velit unde atque nostrum praesentium? Aliquam nulla
            tempora sunt maxime repudiandae, illum fuga. Possimus, corrupti?
          </p>
        </div>
      </div>
    </div>
  );
}
