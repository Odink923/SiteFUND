import Image from 'next/image';
export default function AboutUs() {
    return (
     <div className='mt-[5vw]'>
        <div className='flex pt-[5.99vw]' >
         <Image
                src="/images/AboutUsImg.png" // Шлях до вашого зображення
                alt="Logo"
                width={860}
                height={573}
                className="object-cover
                w-[44.79vw] h-[29.84vw] 
                " // Використання Tailwind класу через className
            />
            <div className='flex flex-col ml-[5.26vw] w-[29.43vw] justify-center '>
                <h1 className='font-amatic text-[3.33vw] pb-[2.34vw]'>Про нас</h1>
                <p className='font-assistant text-justify text-[1.04vw]  '>Ми є некомерційною організацією, розташованою в
                     місті Київ, Україна. Наша місія полягає у підтримці
                      окремих осіб та громад через різноманітні ініціативи та послуги.
                      <br/><br/>
                Ми зосереджуємося на наданні ресурсів і консультацій тим, хто цього потребує, забезпечуючи їх інструментами для подолання труднощів
                     і покращення свого життя. Наша команда віддана своїй справі та має великий досвід, завжди готова допомогти
                      нашій спільноті процвітати.</p>
            </div>
        </div>
     </div>
    );
  }