import { Link } from 'next-view-transitions';
import { MenuHeader } from './menuHeader';

export default function Header() {
  return (
    <div className='flex justify-between items-center px-[160px] py-5'>
        <p className='text-lg font-bold '>Mateus Ataide</p>

        <div className='flex justify-center items-center gap-5'>
            <Link href='/' className='hover:bg-zinc-800 no-underline text-lg font-semibold p-3 rounded-md'>Sobre</Link>
            <Link href='/' className='hover:bg-zinc-800 no-underline text-lg font-semibold p-3 rounded-md'>Tech</Link>
            <Link href='/' className='hover:bg-zinc-800 no-underline text-lg font-semibold p-3 rounded-md'>Contato</Link>
            <Link href='/' className='hover:bg-zinc-800 no-underline text-lg font-semibold p-3 rounded-md'>Curriculo</Link>
            <MenuHeader/>
        </div>
    </div>
  );
}