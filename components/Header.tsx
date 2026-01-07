'use client';

import React from 'react';
import style from '../style/stylesheet.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const Header: React.FC = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: '/theMarket', label: 'tMkt', image: '/icon/theMarket.png', alt: 'The Market Platform' },
    { href: '/Gamer', label: 'Game', image: '/icon/gamerAccount.png', alt: 'Gamer Platform' },
    { href: '/LAMP', label: 'Lamp', image: '/icon/lamp.png', alt: 'Lamp Platform' },
  ];

  return (
    <header className={style.wrapheader}>
      <div className={style.logo}>
        <Link href='/'>
          <Image
            className={style.bua}
            src='/icon/logobua.png'
            alt="BakqaBua's logo"
            width={120}
            height={25}
            
          />
        </Link>
      </div>

      <nav className={style.platforms}>
        {navLinks.map(({ href, label, image, alt }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={clsx(style.pagelink, {
                [style.active]: isActive,
              })}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className={style.mobile}>{label}</span>
              <Image
                src={image}
                alt={alt}
                width={170}
                height={60}
                className={style.lgscreen}
              />
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
