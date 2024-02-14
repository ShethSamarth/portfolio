import { NextResponse } from "next/server"

import { mailer } from "@/lib/mailer"

export async function POST(req: Request) {
  const body = await req.json()

  const { name, email, subject, message } = body

  if (!name || !email || !subject || !message) {
    return new NextResponse("Invalid values", { status: 400 })
  }

  try {
    await mailer({ name, email, subject, message })
    return new NextResponse("Success", { status: 200 })
  } catch (error) {
    return new NextResponse("Error", { status: 400 })
  }
}
