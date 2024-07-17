'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { useState } from 'react';
import { AvatarDemo } from './avatar';
import { MenuHeader } from './menuHeader';

export default function Header() {
  const t = useTranslations('Header.links');

  const { scrollY} = useScroll()

  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest> 150) {
      setHidden(true)
    } else{
      setHidden(false)
    }
  })
    
  return (
    <motion.div 
    className=' sticky top-0 z-50 flex justify-between items-center px-[172px] py-5 border-b-2 border-zinc-300'
    variants={{
      visible: { y: 0},
      hidden: { y: '-100%'}
    }}
    animate={hidden ? 'hidden' : 'visible'}
    transition={{ duration: 0.35, ease: 'easeInOut'}}
    >
      <Link href='/'>
        <div className='flex justify-center items-center gap-3'>
          <Image src='/icon_header.png' width={12} height={12} alt='Logo'/>
          <p className='text-lg font-bold hover:text-zinc-700 '>Mateus Ataide</p>

        </div>
      </Link>

        <div className='flex justify-center items-center gap-5'>
            <Link href='/' className=' leading-5 hover:underline-after no-underline text-[14px] font-medium p-3 rounded-md'>{t('home')}</Link>
            <Link href='/' className=' leading-5 hover:underline-after no-underline text-[14px] font-medium p-3 rounded-md'>{t('about')}</Link>
            <Link href='/' className=' leading-5 hover:underline-after no-underline text-[14px] font-medium p-3 rounded-md'>{t('contact')}</Link>
            <Link href='/' className=' leading-5 hover:underline-after no-underline text-[14px] font-medium p-3 rounded-md'>{t('curriculo')}</Link>
            <MenuHeader/>
            <AvatarDemo/>
        </div>
    </motion.div>
  );
}