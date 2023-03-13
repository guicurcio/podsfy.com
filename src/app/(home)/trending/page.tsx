import Card from 'components/common/Card';

export default function DashboardPage() {
  return (
    <div className="relative z-50 mx-auto mt-[120px] min-h-[800px] max-w-[1250px]">
      <div className="grid grid-flow-col gap-2">
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}
