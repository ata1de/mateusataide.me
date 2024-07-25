import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations('Footer');
  const currentLocale = useLocale();

  function FlagChange() {
    if (currentLocale === 'en') {
      return (
        <div className='flex justify-start items-center gap-2'>
          <Image src='/flags/estados-unidos.png' width={10} height={10} alt='Hero'/>
          <p className="text-xs">English</p>
        </div>
      )
    } else if (currentLocale === 'pt') {
      return (
        <div className='flex justify-start items-center gap-2'>
          <Image src='/flags/brasil.png' width={10} height={10} alt='Hero'/>
          <p className="text-xs">Português</p>
        </div>
      )
    } else {
      return (
        <div className='flex justify-start items-center gap-2'>
          <Image src='/flags/espanha.png' width={10} height={10} alt='Hero'/>
          <p className="text-xs">Español</p>
        </div>
      )
    }
  }

    return (
      <div className="w-full bg-FooterBg justify-between flex items-center min-h-[300px] p-6 mt-5 text-[#F6F6F6]">
            <div className="flex flex-col gap-8">
              <p className="text-[#669b94] text-3xl mb-5">{t('title')}</p>

              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1 justify-start mr-5">
                  <p className=" text-xs">{t('self')} Mateus Ataide👊🏽</p>
                  <p className=" text-xs mb-2">{t('description')}</p>
                  {FlagChange()}
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center items-center md:items-end gap-4'>
                <div>
                    <p className='font-bold text-center md:text-right'>{t('communications.contact')}</p>
                    <p className=' text-center md:text-right text-sm'>98688-4201 | 98857-5153</p>
                    <p className=' text-center md:text-right text-sm'>mateusataide05@gmail.com</p>
                </div>
                <div>
                    <p className='font-bold text-center md:text-right '>{t('communications.social-media')}</p>
                    <Link href='https://www.instagram.com/arkanseguros/' target='_blank' className='no-underline'>
                        <p className=' text-center md:text-right text-sm'>Instagram</p>
                    </Link>
                    <Link href="https://wa.me/+5581986884201?text=Ol%C3%A1%2C+venha+nos+conhecer%2C+n%C3%A3o+hesite+em+mandar+mensagem%21%21" target='_blank' className='no-underline'>
                        <p className=' text-center md:text-right text-sm'>Whatsaap</p>
                    </Link>
                    <Link href='https://www.facebook.com/arkanseguro/' target='_blank' className='no-underline'>
                        <p className='text-[#F6F6F6] text-center md:text-right text-sm'>Facebook</p>
                    </Link>    
                </div>
            </div>

      </div>
    );
  }
  