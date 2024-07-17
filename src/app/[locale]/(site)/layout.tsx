import Footer from "@/components/footer";
import Header from "@/components/header";

interface LayoutProps {
    children: React.ReactNode;
    
}

export default function SiteLayout({ children }: LayoutProps) {
  return (
    <div >
        <Header/>

        {children}
        <Footer/>
    </div>
  );
}