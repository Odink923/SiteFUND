import Image from 'next/image';

export default function SupportFuture() {
    return (
        <div className='relative z-0 overflow-hidden'>
            {/* Контейнер зображення */}
            <div className="relative w-full h-auto">
                <Image
                    src="/images/SupportFuture.png"
                    alt="Child5"
                    layout="responsive"
                    width={1936}
                    height={1260}
                    className="object-cover"
                />
            </div>

            {/* Накладені елементи */}
            <div className="absolute inset-0 flex flex-col justify-center items-center pt-[3.39vw]">
                <h1 className="pb-10 lg:pb-[0px] font-amatic text-[1.25rem] sm:text-smXl md:text-mdXl lg:text-[3.33vw] text-center">Підтримайте майбутнє дітей вже сьогодні</h1>
                <p className=" font-assistant text-base sm:text-smBase lg:text-[1.04vw] lg:pt-[2.78vh] text-center">Допоможіть дітям здійснити їхні мрії.</p>
                <button className='bg-[#4B86C6] text-base  w-[5.625rem]   py-2 lg:mt-[2.34vw] mt-15  font-assistant font-semibold  text-white rounded-[50px] lg:w-[13.59vw] lg:h-[3.23vw] lg:text-[1.04vw]'>
                    Задонатити
                </button>
            </div>
        </div>
    );
}
