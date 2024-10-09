import Image from 'next/image';
export default function Footer() {
    return (
       <div className="bg-[#4B86C6] pt-30 pb-30 flex flex-col-reverse justify-center items-center md:flex-row md:justify-between md:pl-[5.21vw] md:pt-[4.89vh] md:pb-[4.89vh]">
         <div className="relative w-[112px]   h-[36px] sm:scale-125 sm:origin-left md:scale-100   md:w-[13.02vw] md:h-[4.27vw]"> {/* Забезпечує, що логотип не стискається */}
                <Image
                    src="/images/Logo.png" // Шлях до вашого зображення
                    alt="Logo"
                    fill
                />
            </div>
          <div className="flex  items-center pb-20  space-x-[1.0625rem] md:space-x-[1.04vw]   flex-shrink-0"> {/* flex контейнер для іконок з простором між ними */}
          <div className="relative w-[20px] h-[20px] lg:w-[1.56vw] lg:h-[1.56vw]">
                    <Image
                        src="/images/TelegramIcon.png"
                        alt="Telegram"
                        fill
                    />
                </div>
                <div className="relative w-[20px] h-[20px] lg:w-[1.56vw] lg:h-[1.56vw]">
                    <Image
                        src="/images/FacebookIcon.png"
                        alt="Facebook"
                        fill
                    />
                </div>
                <div className="relative w-[20px] h-[20px] lg:w-[1.56vw] lg:h-[1.56vw]">
                    <Image
                        src="/images/InstagramIcon.png"
                        alt="Instagram"
                        fill
                    />
                </div>
                <div className="relative w-[20px] h-[20px] lg:w-[1.56vw] lg:h-[1.56vw]">
                    <Image
                        src="/images/FooterIcon.png"
                        alt="Instagram"
                        fill
                    />
                </div>
                 
                <p className="hidden md:flex text-white md:text-[1.04vw] md:pr-[5.21vw]">380 36 026 6565</p>
                </div>
       </div>
    );
}