'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { MenuIcon } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { useState } from 'react';
import { AvatarDemo } from './avatar';
import { MenuHeader } from './header/menuHeader';
import { NavigationMenuDemo } from './header/navigationHeader';
import { Separator } from './ui/separator';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';


export default function Header() {
  const t = useTranslations('Header.links');
  const t2 = useTranslations('Header');
  const currentLocale = useLocale();

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
    className=' sticky top-0 z-50  w-full py-5 border-b-2 border-zinc-300'
    variants={{
      visible: { y: 0},
      hidden: { y: '-100%'}
    }}
    animate={hidden ? 'hidden' : 'visible'}
    transition={{ duration: 0.35, ease: 'easeInOut'}}
    >
      <div className='max-w-[1056px] flex justify-between items-center mx-auto px-10'>
        <Link href={`/${currentLocale}`}>
          <div className='flex justify-center items-center gap-3 '>
            <Image src='/icon_header.png' width={12} height={12} alt='Logo'/>
            <p className='text-lg font-bold hover:text-zinc-700 '>Mateus Ataide</p>
          </div>
        </Link>

        <div className=' hidden md:flex justify-center items-center gap-5'>
            <Link href={`/${currentLocale}`} className=' leading-5 hover:underline-after no-underline text-[14px] font-medium p-3 rounded-md'>{t('home')}</Link>
            <Link href={`/${currentLocale}/about`} className=' leading-5 hover:underline-after no-underline text-[14px] font-medium p-3 rounded-md'>{t('about')}</Link>
            <NavigationMenuDemo/>
            <Link href='/curriculo/curriculo.pdf' legacyBehavior passHref>
              <a download target='_blank' className='leading-5 hover:underline-after no-underline text-[14px] font-medium p-3 rounded-md'>
                {t('curriculo')}
              </a>
            </Link>
            <MenuHeader/>
            <AvatarDemo/>
        </div>

        <div className='md:hidden flex justify-center items-center gap-3'>
          <MenuHeader/>

          <Sheet>
            <SheetTrigger asChild>
              <MenuIcon className='block md:hidden cursor-pointer' size={28} />
            </SheetTrigger>
            <SheetContent className='bg-LightBrown'>
              <SheetHeader className='p-6'>
                <SheetTitle className='flex gap-2 items-center'>
                  <div className='flex justify-center items-center gap-3 '>
                    <Image src='/icon_header.png' width={12} height={12} alt='Logo'/>
                    <p className='text-lg font-bold hover:text-zinc-700 '>Mateus Ataide</p>
                  </div>
                  <AvatarDemo/>
                  {/* <p className='uppercase text-2xl text-Yellow font-bold font-sans'>ARKAN</p> */}
                </SheetTitle>
                <SheetDescription className='text-left text-Black'>
                  {t2('responsive')}
                </SheetDescription>
              </SheetHeader>
              <Separator  className='w-full bg-lime-600'/>
              <div className='justify-center flex flex-col my-5 gap-5 px-6'>
                <Link href={`/${currentLocale}`} className=' leading-5 text-Black hover:text-[#807056] no-underline text-[14px] font-medium  rounded-md'>{t('home')}</Link>
                <Link href={`/${currentLocale}/about`} className=' leading-5 text-Black hover:text-[#807056] no-underline text-[14px] font-medium  rounded-md'>{t('about')}</Link>
                <NavigationMenuDemo isPhone={true}/>
                <Link href='/' className=' leading-5 text-Black hover:text-[#807056] no-underline text-[14px] font-medium  rounded-md'>{t('curriculo')}</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        
      </div>
    </motion.div>
  );
}