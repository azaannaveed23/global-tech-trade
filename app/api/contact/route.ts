import { NextResponse } from 'next/server'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function stringValue(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: Request) {
  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ message: 'Please submit a valid form.' }, { status: 400 })
  }

  if (!isRecord(payload)) {
    return NextResponse.json({ message: 'Please submit a valid form.' }, { status: 400 })
  }

  const type = stringValue(payload.type)
  const name = stringValue(payload.name)
  const email = stringValue(payload.email)
  const company = stringValue(payload.company)
  const phone = stringValue(payload.phone)
  const message = stringValue(payload.message)
  const errors: Record<string, string> = {}

  if (type !== 'quote' && type !== 'contact') {
    errors.type = 'Choose a quote request or general contact.'
  }
  if (name.length < 2 || name.length > 100) {
    errors.name = 'Enter a name between 2 and 100 characters.'
  }
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (company.length > 120) {
    errors.company = 'Company name must be 120 characters or fewer.'
  }
  if (phone.length > 40) {
    errors.phone = 'Phone number must be 40 characters or fewer.'
  }
  if (message.length < 10 || message.length > 2000) {
    errors.message = 'Message must be between 10 and 2000 characters.'
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { message: 'Please review the form fields and try again.', errors },
      { status: 400 },
    )
  }

  return NextResponse.json(
    {
      message:
        'Your form passed validation. This demo endpoint does not save or email submissions yet.',
    },
    { status: 202 },
  )
}
