import AboutUs from "./components/AboutUs/AboutUs";
import Carrousel from "./components/Carrousel/Carrousel"
export default function Home() {
  return (
    <main >
     <div className="overflow-hidden">
      <Carrousel></Carrousel>
      
      </div>
      <AboutUs></AboutUs>

    </main>
  );
}
