'use client';
import { useRouter } from 'next/navigation';
import { FormEvent, createRef } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';

export const LoginForm = () => {
  const usernameRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const username = usernameRef.current?.value;
      const password = passwordRef.current?.value;
      const response = await axios.post(
        '/api/auth/login',
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      console.log(response.headers);
      console.log(response.data);

      if (response.status === 401) {
        toast.error('Invalid credentials');
      } else {
        toast.success('Login successful');
        // setTimeout(() => {
        //   router.replace('/');
        // }, 1500);
      }
    } catch (err: any) {
      toast.error('username or password cannot be emtpy');
    }
  };

  return (
    <>
      <p className='text-3xl'>
        For us to stay <br />
        in touch
      </p>
      <form
        // action='/api/auth/login'
        // method='POST'
        onSubmit={handleSubmit}
        className='flex flex-col space-y-3 self-stretch w-3/5 mx-auto'
      >
        <div className='flex flex-col items-start space-y-1'>
          <label className='text-sm' htmlFor='username'>
            Username
          </label>
          <input
            // name='username'
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
            name='password'
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
