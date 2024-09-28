import Head from 'next/head';
import AboutUs from "./components/AboutUs/AboutUs";
import Carrousel from "./components/Carrousel/Carrousel"
import DoSomethingGood from "./components/DoSomethingGood/DoSomethingGood";
import Footer from "./components/Footer/Footer";
import LastEvents from "./components/LastEvents/LastEvents";
import OurPartners from "./components/OurPartners/OurPartners";
import Reviews from "./components/Reviews/Reviews";
import SupportFuture from "./components/SupportFuture/SupportFuture";
import SupportKidsFuture from "./components/SupportKidsFuture/SupportKidsFuture";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
export default function Home() {
  return (<div>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
    <main >
     <div className="overflow-hidden">
      <Carrousel></Carrousel>
      
      </div>
      <AboutUs></AboutUs>
      <div className="overflow-hidden">
      <DoSomethingGood></DoSomethingGood>
      </div>
      <LastEvents></LastEvents>
      <div className="overflow-hidden">
      <WhatWeDo></WhatWeDo>
      </div>
     
    {/*  
   
   
  
    </div>
    <SupportKidsFuture></SupportKidsFuture>
   
    <OurPartners></OurPartners>
    <Reviews></Reviews>
    <SupportFuture></SupportFuture>
    <Footer></Footer> */}
    </main>
    </div>
  );
}











