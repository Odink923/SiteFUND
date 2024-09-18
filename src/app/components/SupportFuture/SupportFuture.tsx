import Image from 'next/image';

export default function SupportFuture() {
    return (
        <div className='relative z-0 lg:mt-[-7vw]'>
            
        {/* Background Image */}
        <Image
            src="/images/SupportFuture.png" // Path to your image
            alt="Child5"
            width={1936}
            height={1260}
            className="object-cover w-full h-auto relative z-0"
        />

        {/* Overlaying Elements */}
        <div className="absolute inset-0 flex flex-col justify-center items-center pt-[3.39vw] ">
            <h1 className="font-amatic  lg:text-[3.33vw]">Підтримайте майбутнє дітей вже сьогодні</h1>
            <p className="font-assistant lg:text-[1.04vw] pt-[2.78vh]">Допоможіть дітям здійснити їхні мрії.</p>
            <button className='lg:w-[13.59vw] lg:h-[3.23vw] lg:text-[1.04vw] mt-[2.78vh] bg-[#4B86C6] font-assistant font-semibold text-white justify-center items-center  rounded-[2.60vw]'>
                    Задонатити
                </button>
        </div>
        </div>
    );
}
