import Image from 'next/image';
export default function Footer() {
    return (
       <div className="bg-[#4B86C6] flex justify-between lg:pl-[5.21vw] lg:pt-[4.89vh] lg:pb-[4.89vh]">
         <Image
                    src="/images/Logo.png" // Шлях до вашого зображення
                    alt="Logo"
                    width={250}
                    height={82}
                    className="object-cover
                lg:w-[13.02vw] lg:h-[4.27vw] 
                " // Використання Tailwind класу через className
        />
          <div className="flex items-center lg:space-x-[1.04vw]   flex-shrink-0"> {/* flex контейнер для іконок з простором між ними */}
                <Image
                    src="/images/TelegramIcon.png"
                    alt="Telegram"
                    width={40}
                    height={40}
                    className="object-contain
                lg:w-[2.08vw] lg:h-[2.08vw] " // Встановлює об'єктну відповідність для утримання оригінального розміру
                />
                <Image
                    src="/images/FacebookIcon.png"
                    alt="Facebook"
                    width={40}
                    height={40}
                    className="object-contain
                lg:w-[2.08vw] lg:h-[2.08vw]  " // Встановлює об'єктну відповідність для утримання оригінального розміру
                />
                <Image
                    src="/images/InstagramIcon.png"
                    alt="Instagram"
                    width={40}
                    height={40}
                    className="object-contain
                lg:w-[2.08vw] lg:h-[2.08vw] " // Встановлює об'єктну відповідність для утримання оригінального розміру
                />
                  <Image
                    src="/images/FooterIcon.png"
                    alt="Instagram"
                    width={40}
                    height={40}
                    className="object-contain
                lg:w-[2.08vw] lg:h-[2.08vw] " // Встановлює об'єктну відповідність для утримання оригінального розміру
                />
                <p className="text-white text-[1.04vw] pr-[5.21vw]">380 36 026 6565</p>
                </div>
       </div>
    );
}