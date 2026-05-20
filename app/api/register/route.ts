import { NextRequest, NextResponse } from "next/server";

interface RegistrationBody {
  name?: string;
  email?: string;
  phone?: string;
  branch?: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const body: RegistrationBody = await request.json();
  const { name, email, phone, branch } = body;

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  // TODO: persist to a database or file store
  console.log("New registration:", { name, email, phone, branch });

  return NextResponse.json(
    { message: "Registration received." },
    { status: 201 },
  );
}
