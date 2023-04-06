import axios from 'axios';
import {} from 'next/server';

export async function POST(req: Request) {
  console.log('API/AUTH/LOGIN/POST');
  const { username, password } = await req.json();
  console.log({ username, password });
  const response = await axios.post(
    'https://frontendtestapi.staging.fastjobs.io/auth/login',
    {
      username,
      password,
    }
  );

  const setcookieheader = response.headers['set-cookie'];

  console.log(setcookieheader);

  // const setcookieheader = response.headers.get('Set-Cookie');
  // if (setcookieheader) {
  //   console.log(setcookieheader);
  // }
  return new Response(JSON.stringify(response.data), {
    status: response.status,
  });
  // return NextResponse.json({ x: 'y' });
}
