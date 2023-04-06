import { ApiButton } from '~/components/apibutton';

export default function Home() {
  // const cookieStore = cookies();
  // const authToken = cookieStore.get('Set-Cookie');

  // if (authToken === undefined) redirect('/login');

  return (
    <div className='min-h-screen grid place-items-center'>
      <ApiButton />
    </div>
  );
}
