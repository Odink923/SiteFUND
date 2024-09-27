import Image from 'next/image';
export default function AboutUs() {
    return (
        <div  >
            <div className='flex flex-col-reverse sm:flex-row  pt-30 pl-20 pr-20 sm:pl-30 sm:pr-30 lg:flex-row lg:pt-[5.99vw] lg:pr-[5.21vw] lg:pl-[5.21vw]  ' >
               <div className='relative w-[89vw] h-[55vw] sm:w-[44.79vw] sm:h-[29.84vw]   lg:w-[44.79vw] lg:h-[29.84vw] '>
                <Image
                    src="/images/AboutUsImg.png" // Шлях до вашого зображення
                    alt="Logo2"
                    fill
                    className="object-cover
             
                " // Використання Tailwind класу через className w-[77.77777777777779vw] h-[51.94444444444445vw]
                />
                </div>
                <div className='flex flex-col sm:w-[22.8125rem] sm:pl-[3.125rem] lg:ml-[5.26vw] lg:w-[29.43vw] justify-center  '>
                    <h1 className='font-amatic text-xl sm:text-smXl md:text-mdXl lg:text-[3.33vw] lg:pb-[2.34vw]'>Про нас</h1>
                    <p className='font-assistant pt-15 pb-15 text-base sm:text-smBase md:text-mdBase text-justify lg:text-[1.04vw]  leading-none'>Ми є некомерційною організацією, розташованою в
                        місті Київ, Україна. Наша місія полягає у підтримці
                        окремих осіб та громад через різноманітні ініціативи та послуги.
                        <br /><br />
                        Ми зосереджуємося на наданні ресурсів і консультацій тим, хто цього потребує, забезпечуючи їх інструментами для подолання труднощів
                        і покращення свого життя. Наша команда віддана своїй справі та має великий досвід, завжди готова допомогти
                        нашій спільноті процвітати.</p>
                </div>
            </div>
        </div>
    );
}