import Image from 'next/image';
import logo from '../../public/logo.svg';
import { LoginForm } from '../../components/loginform';

/* eslint-disable react/no-unescaped-entities */
export default function LoginPage() {
  return (
    <div className='h-screen flex '>
      <div className='absolute top-10 left-16'>
        <Image src={logo} width={50} height={50} alt='logo' />
      </div>
      <div className='flex-[6] bg-[#5D5FEF] flex flex-col pl-20 items-start  font-medium space-y-5 text-white justify-center'>
        <p className='text-base'>Congratulations!</p>
        <p className='text-2xl '>
          Company XYZ is inviting
          <br />
          you to take an interview
        </p>
        <div className='flex flex-col space-y-1'>
          <p>Skills being assessed : </p>
          <div className='flex space-x-3'>
            <p className='p-2 border rounded-[50px]'>UI/UX</p>
            <p className='p-2 border rounded-[50px]'>Product Design</p>
            <p className='p-2 border rounded-[50px]'>Motion Grpahics</p>
          </div>
        </div>
        <p>Don't be nervous</p>
      </div>
      <div className='flex-[4] bg-[#111] text-slate-300  flex items-center justify-center flex-col space-y-3'>
        <LoginForm />
      </div>
    </div>
  );
}
