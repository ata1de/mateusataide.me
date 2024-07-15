'use client'

import { useTranslations } from 'next-intl';
import { Link } from 'next-view-transitions';
import { MenuHeader } from './menuHeader';

export default function Header() {
  const t = useTranslations('Header.links');
  return (
    <div className='flex justify-between items-center px-[172px] py-5 border-b-2 border-zinc-800'>
        <p className='text-lg font-bold '>Mateus Ataide</p>

        <div className='flex justify-center items-center gap-5'>
            <Link href='/' className='hover:bg-zinc-800 text-zinc-200   no-underline text-xl font-semibold p-3 rounded-md'>{t('home')}</Link>
            <Link href='/' className='hover:bg-zinc-800 text-zinc-200  no-underline text-xl font-semibold p-3 rounded-md'>{t('about')}</Link>
            <Link href='/' className='hover:bg-zinc-800 text-zinc-200  no-underline text-xl font-semibold p-3 rounded-md'>{t('contact')}</Link>
            <Link href='/' className='hover:bg-zinc-800 text-zinc-200  no-underline text-xl font-semibold p-3 rounded-md'>{t('curriculo')}</Link>
            <MenuHeader/>
        </div>
    </div>
  );
}