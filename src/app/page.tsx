import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@radix-ui/react-navigation-menu';
import logo from '../assets/logo.png'
import Image from 'next/image'
import About from '@/components/About';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Certifications from '@/components/Certifications';
import Gallery from '@/components/Gallery';
import Team from '@/components/Team';
import Contact from '@/components/Contact';


export default function Home() {
  return (
    <main className="flex  flex-col  ">
    <Navbar/>
  <div className=" mt-24  ">
    <section id='home'><Hero/> </section>
    <section><Certifications/> </section>
   <section id="about"><About/></section>
   <section id='team'><Team/></section>
   <section id='gallery'><Gallery/></section>
   <section id='contact'><Contact/></section>
  </div>

  </main>
  );
}