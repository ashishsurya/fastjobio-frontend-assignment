import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  const response = await fetch(
    'https://frontendtestapi.staging.fastjobs.io/auth/login',
    {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const setCookieHeader = response.headers.get('Set-Cookie');
  console.log(setCookieHeader);
  var res = new NextResponse(response.body);
  if (setCookieHeader) {
    res.cookies.set('authToken', setCookieHeader);
  }
  return res;
}
