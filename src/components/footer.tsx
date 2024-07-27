import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Footer() {
  const t = useTranslations('Footer');
  const currentLocale = useLocale();

  function FlagChange() {
    if (currentLocale === 'en') {
      return (
        <div className='flex justify-start items-center gap-2 font-medium'>
          <Image src='/flags/estados-unidos.png' width={10} height={10} alt='Hero'/>
          <p className="text-xs">English</p>
        </div>
      )
    } else if (currentLocale === 'pt') {
      return (
        <div className='flex justify-start items-center gap-2 font-medium'>
          <Image src='/flags/brasil.png' width={10} height={10} alt='Hero'/>
          <p className="text-xs">Português</p>
        </div>
      )
    } else {
      return (
        <div className='flex justify-start items-center gap-2 font-medium'>
          <Image src='/flags/espanha.png' width={10} height={10} alt='Hero'/>
          <p className="text-xs">Español</p>
        </div>
      )
    }
  }

    return (
      <div className="w-full bg-FooterBg min-h-[180px] px-6 pb-6 pt-9 text-[#F6F6F6]">
          <div className="max-w-[1056px] px-3 sm:px-10 mx-auto justify-between flex md:flex-row flex-col items-center w-full">
              <div className="flex flex-col gap-4 md:gap-8">
                <p className="text-[#669b94] text-3xl font-bold md:mb-5">{t('title')}</p>

                <div className="flex justify-center md:justify-start items-center">
                  <div className="flex flex-col gap-1 items-center md:items-start md:justify-start md:mr-5">
                    <p className=" text-xs font-medium">{t('self')} Mateus Ataide👊🏽</p>
                    <p className=" text-xs md:mb-2 font-medium">{t('description')}</p>
                    {FlagChange()}
                  </div>
                </div>
              </div>

              <div className='flex flex-col justify-center items-center md:items-end gap-4 max-[758px]:mt-5'>
                  <div>
                      <p className='font-semibold text-center md:text-right'>{t('communications.contact')}</p>
                      <p className=' text-center md:text-right text-xs text-[#d1d1d1]'>98688-4201 | 98857-5153</p>
                      <p className=' text-center md:text-right text-xs text-[#d1d1d1]'>mateusataide05@gmail.com</p>
                  </div>
                  <div>
                      <p className='font-semibold text-center md:text-right '>{t('communications.social-media')}</p>
                      <Link href='https://www.instagram.com/arkanseguros/' target='_blank' className='no-underline'>
                          <p className=' text-center md:text-right text-xs text-[#d1d1d1]'>Instagram</p>
                      </Link>
                      <Link href="https://wa.me/+5581986884201?text=Ol%C3%A1%2C+venha+nos+conhecer%2C+n%C3%A3o+hesite+em+mandar+mensagem%21%21" target='_blank' className='no-underline'>
                          <p className=' text-center md:text-right text-xs text-[#d1d1d1]'>Whatsaap</p>
                      </Link>
                      <Link href='https://www.facebook.com/arkanseguro/' target='_blank' className='no-underline'>
                          <p className='text-center md:text-right text-xs text-[#d1d1d1]'>Facebook</p>
                      </Link>    
                  </div>
              </div>
          </div>

          <Separator className='my-4 w-full bg-zinc-600'/>

          <div className=" max-w-[1056px] px-3 sm:px-10 mx-auto mt-2 flex justify-between py-3">
            <p className='text-xs text-center max-[600px]:m-auto text-[#d1d1d1]'>{t('reserved')} | © Copyright 2024 </p>

            <div className="flex justify-center items-center gap-4 text-[#d1d1d1]">
              <p className="text-xs text-center font-semibold max-[600px]:hidden">{t('privacy')}</p>
              <p className="text-xs text-center font-semibold max-[600px]:hidden">{t('terms')}</p>
            </div>
          </div>
      </div>
    );
  }
  