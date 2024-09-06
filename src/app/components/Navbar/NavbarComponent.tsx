import Image from 'next/image';
export default function Navbar() {
    return (
        <div className="flex justify-between items-center  w-full
        lg:pt-[1.82vw] 
        "> {/* flex контейнер для розташування елементів */}
            {/* Логотип */}
            <div className="flex-shrink-0"> {/* Забезпечує, що логотип не стискається */}
                <Image
                    src="/images/Logo.png" // Шлях до вашого зображення
                    alt="Logo"
                    width={250}
                    height={82}
                    className="object-cover
                lg:w-[13.02vw] lg:h-[4.27vw] 
                " // Використання Tailwind класу через className
                />
            </div>

            {/* Контейнер для іконок */}
            <div className="flex items-center lg:space-x-[1.04vw]   flex-shrink-0"> {/* flex контейнер для іконок з простором між ними */}
                <Image
                    src="/images/TelegramIcon.png"
                    alt="Telegram"
                    width={30}
                    height={30}
                    className="object-contain
                lg:w-[1.56vw] lg:h-[1.56vw] " // Встановлює об'єктну відповідність для утримання оригінального розміру
                />
                <Image
                    src="/images/FacebookIcon.png"
                    alt="Facebook"
                    width={30}
                    height={30}
                    className="object-contain
                lg:w-[1.56vw] lg:h-[1.56vw]  " // Встановлює об'єктну відповідність для утримання оригінального розміру
                />
                <Image
                    src="/images/InstagramIcon.png"
                    alt="Instagram"
                    width={30}
                    height={30}
                    className="object-contain
                lg:w-[1.56vw] lg:h-[1.56vw] " // Встановлює об'єктну відповідність для утримання оригінального розміру
                />
                <button className='bg-white rounded-[50px] font-assistant  lg:text-[0.83vw] lg:w-[10.83vw] lg:h-[2.19vw]'>Зателефонуйте нам</button>
            </div>
        </div>
    );
}