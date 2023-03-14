import Card from "components/common/Card"
import { getServerSession } from "next-auth/next"
import { authOptions } from "pages/api/auth/[...nextauth]"
import { redirect } from "next/navigation"

export default async function HomePage() {
  const session = await getServerSession(authOptions)
  if (!session.user) {
    redirect("/")
  }

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
