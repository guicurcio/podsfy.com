import Card from 'components/common/Card';

export default function HomePage() {
  return (
    <div className="relative z-50 mx-auto mt-[80px] min-h-[800px] max-w-[1200px]">
      <div className="grid w-full grid-flow-col grid-cols-5 gap-[100px]">
        <Card
          title="Trending Episodes"
          className="col-span-3 grid"
          descriptionClassname="w-[470px]"
        ></Card>
        <Card title="Picks for you" className="col-span-2 grid"></Card>
      </div>
    </div>
  );
}
