import { NextResponse } from 'next/server';

export async function GET() {
  const envVars = {
    RESEND_API_KEY: {
      exists: !!process.env.RESEND_API_KEY,
      length: process.env.RESEND_API_KEY?.length || 0,
      startsWithRe: process.env.RESEND_API_KEY?.startsWith('re_') || false,
    },
    NODE_ENV: process.env.NODE_ENV,
  };

  return NextResponse.json(envVars);
}
