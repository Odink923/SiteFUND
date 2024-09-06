import AboutUs from "./components/AboutUs/AboutUs";
import Carrousel from "./components/Carrousel/Carrousel"
import DoSomethingGood from "./components/DoSomethingGood/DoSomethingGood";
export default function Home() {
  return (
    <main >
     <div className="overflow-hidden">
      <Carrousel></Carrousel>
      
      </div>
      <AboutUs></AboutUs>
      <div className="overflow-hidden">
    <DoSomethingGood></DoSomethingGood>
    </div>
    </main>
  );
}
