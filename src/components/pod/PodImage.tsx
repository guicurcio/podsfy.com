/**
 * This component
 */
export default function PodImage() {
  return (
    <div className="blur-[8px] brightness-[60%] backdrop-brightness-[10%]">
      <div className="absolute">
        <img
          src="/huberman-lab-podcast-intro-1920x1080-1-2.png"
          className="w-[1920px] h-[396px] scale-x-[100%] rounded-[20px] opacity-100 object-none z-0"
        />
      </div>
    </div>
  );
}
