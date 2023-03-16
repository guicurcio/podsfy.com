import Link from "next/link"
import Button from "ui/components/Button"

export default function Page() {
  return (
    <Link href="/login">
      <Button variant="subtle" size="lg">
        Sign in
      </Button>
    </Link>
  )
}
