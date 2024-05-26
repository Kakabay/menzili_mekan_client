import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';

interface IProps {
  position: 'fixed' | 'normal';
}

const Header = ({ position }: IProps) => {
  return (
    <header
      className={clsx('z-20', {
        'fixed top-0 left-0 right-0': position === 'fixed',
      })}>
      <Container>
        <nav className="flex text-white items-center justify-center gap-[56px] uppercase py-[48px] text-base font-[500] leading-[24px] tracking-[3%]">
          <Link to={'/'}>home</Link>
          <Link to={'/'}>cartoons</Link>
          <Link to={'/'}>
            {' '}
            <img src="/logo-text.svg" alt="logo" />
          </Link>
          <Link to={'/'}>services</Link>
          <Link to={'/'}>contact</Link>
        </nav>
      </Container>
      <div className="absolute right-[80px] top-[56px]">
        {' '}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex justify-center items-center uppercase text-[14px] leading-[19.6px] tracking-[-3%] border border-white text-white px-[3px] py-[2px]">
              en
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <div className="flex justify-center items-center uppercase text-[14px] leading-[19.6px] tracking-[-3%]  text-white px-[3px] py-[2px]">
                tm
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex justify-center items-center uppercase text-[14px] leading-[19.6px] tracking-[-3%]  text-white px-[3px] py-[2px]">
                ru
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex justify-center items-center uppercase text-[14px] leading-[19.6px] tracking-[-3%]  text-white px-[3px] py-[2px]">
                tr
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex justify-center items-center uppercase text-[14px] leading-[19.6px] tracking-[-3%]  text-white px-[3px] py-[2px]">
                ch
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
