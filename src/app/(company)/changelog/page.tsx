import Card from 'components/common/Card';
import mergeClasses from 'utils/mergeClasses';

export default function HomePage() {
  return (
    <div className="relative z-50 m-[80px] mx-auto  max-w-[1100px]">
      <div className="grid w-full grid-flow-col ">
        <div
          className={mergeClasses(
            'h-[1200px]',
            ' overflow-hidden rounded-[5px]',
            'bg-[#0D0E12] py-[25px]',
            'border border-sharper border-opacity-10',
            'px-[20px] font-visuelt shadow-3xl backdrop-blur-[10px]',
          )}
        ></div>
      </div>
    </div>
  );
}
