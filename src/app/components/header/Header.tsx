'use client';

import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: '900'
});

const Header = () => {
  return (
    <header className="sticky top-0 w-full h-[200px] bg-[#0D0D0D] shadow-md">
      <div className="container flex flex-row items-center justify-center">
          <div className="flex flex-row items-center gap-2 h-[48px] mt-[72px] mb-[80px] ml-[10%]">
            <div className="flex flex-col items-center">
                <Image 
                src="/rocket.svg" 
                alt="Todo Logo" 
                width={22} 
                height={36} 
                priority
                className="mt-[20px]"
                />
            </div>
            <div className={`h-[48px] text-[40px] font-black whitespace-nowrap space-x-1 ${inter.className}`}>
                <span className="text-todo-blue font-black text-3xl">Todo</span>
                <span className="text-todo-purple font-black text-3xl">App</span>
            </div>
          </div>
      </div>
    </header>
  );
};

export default Header;