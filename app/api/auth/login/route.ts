import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log('API/AUTH/LOGIN/POST');
  const { username, password } = await req.json();
  console.log({ username, password });
  const response = await axios.post(
    'https://frontendtestapi.staging.fastjobs.io/auth/login',
    {
      username,
      password,
    },
    {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
  );

  

  const setcookieheader = response.headers;

  console.log(setcookieheader);

  // const setcookieheader = response.headers.get('Set-Cookie');
  // if (setcookieheader) {
  //   console.log(setcookieheader);
  // }
  // return new Response(JSON.stringify(response.data), {
  //   status: response.data.code || 200,
  // });

  // return new NextResponse(JSON.stringify({ message: ' success' }));
  // return NextResponse.json({ x: 'y' });
}
