import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function Home() {
  const cookieStore = cookies();
  const authToken = cookieStore.get('authToken');

  if (authToken === undefined) redirect('/login');

  return <div className='min-h-screen'>Hello</div>;
}
