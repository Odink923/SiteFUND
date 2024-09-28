import Image from 'next/image';

export default function SupportKidsFuture() {
    return (
        <div className="lg:mt-[-7vw] mt-[-7vw] flex flex-col-reverse lg:flex-row justify-between lg:pl-[5.21vw]">
            <div className="relative z-10 pl-20 pr-20 pb-30 lg:pt-[17.69vw] lg:w-[39.53vw]" >
                <h1 className="lg:text-[3.33vw] pt-20 pb-10 lg:pt-0 lg:pb-0 text-xl sm:text-smXl md:text-mdXl font-amatic leading-none">Підтримайте майбутнє дітей з KidsFuture.Fund</h1>
                <p className="lg:text-[1.04vw] text-base sm:text-smBase lg:pt-[2.34vw] font-assistant leading-none  text-justify">
                    Приєднуйтесь до нас у місті Київ, щоб допомогти створити світле майбутнє для дітей.
                    KidsFuture.Fund надає освітню та розвиткову підтримку тим, хто цього потребує. Ваш внесок має значення.
                </p>
                <div className="flex justify-center lg:justify-start">
                <button className='bg-[#4B86C6] text-base  w-[5.625rem]   py-2 lg:mt-[2.34vw] mt-15  font-assistant font-semibold  text-white rounded-[50px] lg:w-[13.59vw] lg:h-[3.23vw] lg:text-[1.04vw]'>
                    Задонатити
                </button>
                </div>
            </div>
            <div>
        
            <Image 
                src="/images/SupportKidsFuture.png"
                alt="FutureKids"
                width={962}
                height={962}
                className="object-contain md:w-[1024px] lg:w-[50.10vw] lg:h-[50.10vw] relative z-0"
            />
            </div>
        </div>
    );
}
