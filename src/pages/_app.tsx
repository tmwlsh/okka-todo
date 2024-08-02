import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Link from 'next/link';
import '../styles/globals.css';
import Container from '@/components/container';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <div className='block py-4 md:py-16'>
      <Container width="small">
        <nav className='block w-full'>
          <ul className='flex items-center justify-between'>
            <li className='flex-[0_0_calc(25%_-_5px)] text-center group'>
              <Link className={`${currentPath === '/todos/0' ? 'bg-blue-100 border-blue-500' : 'bg-white border-white'} group-hover:border-blue-500 border-[1px] transition text-md p-4 block rounded-md`} href="/todos/0">Todos Group 0</Link>
            </li>
            <li className='flex-[0_0_calc(25%_-_5px)] text-center group'>
              <Link className={`${currentPath === '/todos/1' ? 'bg-blue-100 border-blue-500' : 'bg-white border-white'} group-hover:border-blue-500 border-[1px] transition text-md p-4 block rounded-md`} href="/todos/1">Todos Group 1</Link>
            </li>
            <li className='flex-[0_0_calc(25%_-_5px)] text-center group'>
              <Link className={`${currentPath === '/todos/2' ? 'bg-blue-100 border-blue-500' : 'bg-white border-white'} group-hover:border-blue-500 border-[1px] transition text-md p-4 block rounded-md`} href="/todos/2">Todos Group 2</Link>
            </li>
            <li className='flex-[0_0_calc(25%_-_5px)] text-center group'>
              <Link className={`${currentPath === '/todos/3' ? 'bg-blue-100 border-blue-500' : 'bg-white border-white'} group-hover:border-blue-500 border-[1px] transition text-md p-4 block rounded-md`} href="/todos/3">Todos Group 3</Link>
            </li>
          </ul>
        </nav>
      </Container>

      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;