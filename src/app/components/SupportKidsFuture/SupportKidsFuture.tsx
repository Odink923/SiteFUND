import Image from 'next/image';

export default function SupportKidsFuture() {
    return (
        <div className="lg:mt-[-7vw] flex justify-between lg:pl-[5.21vw]">
            <div className="relative z-10 lg:pt-[17.69vw] lg:w-[39.53vw]" >
                <h1 className="lg:text-[3.33vw] font-amatic leading-none">Підтримайте майбутнє дітей з KidsFuture.Fund</h1>
                <p className="lg:text-[1.04vw] lg:pt-[2.34vw] font-assistant leading-none  text-justify">
                    Приєднуйтесь до нас у місті Київ, щоб допомогти створити світле майбутнє для дітей.
                    KidsFuture.Fund надає освітню та розвиткову підтримку тим, хто цього потребує. Ваш внесок має значення.
                </p>
                <button className='lg:w-[13.59vw] lg:h-[3.23vw] lg:text-[1.04vw] lg:mt-[2.34vw] bg-[#4B86C6] font-assistant font-semibold text-white justify-center items-center  rounded-[2.60vw]'>
                    Задонатити
                </button>
            </div>

            <Image 
                src="/images/SupportKidsFuture.png"
                alt="FutureKids"
                width={962}
                height={962}
                className="object-contain lg:w-[50.10vw] lg:h-[50.10vw] relative z-0"
            />
        </div>
    );
}
