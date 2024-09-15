import AboutUs from "./components/AboutUs/AboutUs";
import Carrousel from "./components/Carrousel/Carrousel"
import DoSomethingGood from "./components/DoSomethingGood/DoSomethingGood";
import LastEvents from "./components/LastEvents/LastEvents";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
export default function Home() {
  return (
    <main >
     <div className="overflow-hidden">
      <Carrousel></Carrousel>
      
      </div>
      <AboutUs></AboutUs>
      <div className="overflow-hidden">
    <DoSomethingGood></DoSomethingGood>
    <LastEvents></LastEvents>
    <WhatWeDo></WhatWeDo>
    </div>
 
    </main>
  );
}
