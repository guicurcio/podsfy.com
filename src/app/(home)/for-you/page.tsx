import Card from "components/common/Card"

export default function ForYouPage() {
  return (
    <div className="grid w-full grid-flow-col grid-cols-1 gap-[100px]">
      <Card
        title="Trending Episodes"
        className="col-span-1 grid"
        descriptionClassname="w-[470px]"
      ></Card>
    </div>
  )
}
