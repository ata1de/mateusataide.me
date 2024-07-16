'use client'

import { useTranslations } from 'next-intl';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { MenuHeader } from './menuHeader';

export default function Header() {
  const t = useTranslations('Header.links');
  return (
    <div className='flex justify-between items-center px-[172px] py-5 border-b-2 border-zinc-300'>
      <div className='flex justify-center items-center gap-3'>
        <Image src='/icon_header.png' width={12} height={12} alt='Logo'/>
        <p className='text-lg font-bold '>Mateus Ataide</p>

      </div>

        <div className='flex justify-center items-center gap-5'>
            <Link href='/' className=' leading-5 hover:underline-after no-underline text-[14px] font-medium p-3 rounded-md'>{t('home')}</Link>
            <Link href='/' className=' leading-5 hover:underline-after no-underline text-[14px] font-medium p-3 rounded-md'>{t('about')}</Link>
            <Link href='/' className=' leading-5 hover:underline-after no-underline text-[14px] font-medium p-3 rounded-md'>{t('contact')}</Link>
            <Link href='/' className=' leading-5 hover:underline-after no-underline text-[14px] font-medium p-3 rounded-md'>{t('curriculo')}</Link>
            <MenuHeader/>
        </div>
    </div>
  );
}