import { Link } from 'next-view-transitions';

export default function Header() {
  return (
    <div>
        <p>Mateus Ataide</p>

        <div>
            <Link href='/'>Sobre</Link>
            <Link href='/'>Tech</Link>
            <Link href='/'>Contato</Link>
            <Link href='/'>Curriculo</Link>
            
        </div>
    </div>
  );
}