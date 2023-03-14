import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export const config = {
  runtime: "edge",
}

export default (req: NextRequest) =>
  NextResponse.json({
    name: `Hello, from ${req.url} I'm now an Edge Function!`,
  })
