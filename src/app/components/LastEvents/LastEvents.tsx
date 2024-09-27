import CarouselComponent from "./CarouselComponent/CarouselComponent";

export default function LastEvents() {
    return (
       <div className=" lg:pt-[5.99vw] ">
        <div className="pt-30 pb-15 pl-20 pr-20 flex justify-between items-center lg:pl-[5.21vw] lg:pr-[5.21vw] lg:pb-[3.39vw]">
            <h1 className="font-amatic text-xl sm:text-smXl md:text-mdXl lg:text-[3.33vw]">Останні події</h1>
            <button className="bg-[#4B86C6] text-base  w-[5.625rem] py-2   font-assistant font-semibold  text-white rounded-[50px] lg:w-[13.59vw] lg:h-[3.23vw] lg:text-[1.04vw] ">Усі заходи</button>
        </div>
        
        <CarouselComponent></CarouselComponent>
            
       </div>
    );
}