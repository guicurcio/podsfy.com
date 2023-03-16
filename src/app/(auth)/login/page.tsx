"use client"

import { lazy, Suspense } from "react"
import useEnvironment from "ui/hooks/useEnvironment"

const SignUpModal = lazy(() => import("components/SignUpModal"))

export default function Page() {
  const { isBrowser, isServer } = useEnvironment()
  console.log("isBrowser", isBrowser)
  console.log("isServer", isServer)
  return (
    <>
      <Suspense>
        <SignUpModal
          openModalState={false}
          baseState="SIGNING IN"
        ></SignUpModal>
      </Suspense>
    </>
  )
}
