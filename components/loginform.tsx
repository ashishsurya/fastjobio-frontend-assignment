'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { FormEvent, createRef } from 'react';
import { toast } from 'react-hot-toast';
import { getAuthToken } from '~/utils/getAuthToken';

export const LoginForm = () => {
  const usernameRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const authToken = getAuthToken(Cookies.get('authToken')?.split(';')[0]);
    console.log(authToken);
    const data = await res.json();
    console.log(res);
    if (data.message === 'Unauthorized') {
      toast.error(data.message + 'please check your credentials');
    } else {
      router.replace('/');
    }
  };

  return (
    <>
      <p className='text-3xl'>
        For us to stay <br />
        in touch
      </p>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col space-y-3 self-stretch w-3/5 mx-auto'
      >
        <div className='flex flex-col items-start space-y-1'>
          <label className='text-sm' htmlFor='username'>
            Username
          </label>
          <input
            ref={usernameRef}
            type='text'
            id='username'
            className='focus:outline-none w-full bg-transparent border-slate-200 border-2 px-4 py-2 rounded-2xl'
          />
        </div>
        <div className='flex flex-col items-start space-y-1'>
          <label className='text-sm' htmlFor='password'>
            Password
          </label>
          <input
            ref={passwordRef}
            type='password'
            id='password'
            className='focus:outline-none w-full bg-transparent border-slate-200 border-2 px-4 py-2 rounded-2xl'
          />
        </div>
        <button
          type='submit'
          className='bg-[#B2BAFF] text-white py-3 px-5 rounded-2xl'
        >
          Continue
        </button>
      </form>
    </>
  );
};
