import Image from 'next/image';
export default function Navbar() {
    return (
        <div className="flex justify-between items-center  w-full
        pt-5 lg:pt-[1.82vw] 
        "> {/* flex контейнер для розташування елементів */}
            {/* Логотип */}
            <div className="relative w-[112px] h-[36px]  lg:w-[13.02vw] lg:h-[4.27vw]"> {/* Забезпечує, що логотип не стискається */}
                <Image
                    src="/images/Logo.png" // Шлях до вашого зображення
                    alt="Logo"
                    fill
                />
            </div>

            {/* Контейнер для іконок */}
            <div className="hidden lg:flex items-center lg:space-x-[1.04vw]   flex-shrink-0"> {/* flex контейнер для іконок з простором між ними */}
                <div className="relative lg:w-[1.56vw] lg:h-[1.56vw]">
                    <Image
                        src="/images/TelegramIcon.png"
                        alt="Telegram"
                        fill
                    />
                </div>
                <div className="relative lg:w-[1.56vw] lg:h-[1.56vw]">
                    <Image
                        src="/images/FacebookIcon.png"
                        alt="Facebook"
                        fill
                    />
                </div>
                <div className="relative lg:w-[1.56vw] lg:h-[1.56vw]">
                    <Image
                        src="/images/InstagramIcon.png"
                        alt="Instagram"
                        fill
                    />
                </div>
                <button className='bg-white rounded-[50px] font-assistant  lg:text-[0.83vw] lg:w-[10.83vw] lg:h-[2.19vw]'>Зателефонуйте нам</button>
              
            </div>
            <button className=' lg:hidden'>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="24" height="24" rx="12" stroke="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 16.3125C7 16.0709 7.19588 15.875 7.4375 15.875H17.0625C17.3041 15.875 17.5 16.0709 17.5 16.3125C17.5 16.5541 17.3041 16.75 17.0625 16.75H7.4375C7.19588 16.75 7 16.5541 7 16.3125Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 13.6875C7 13.4459 7.19588 13.25 7.4375 13.25H17.0625C17.3041 13.25 17.5 13.4459 17.5 13.6875C17.5 13.9291 17.3041 14.125 17.0625 14.125H7.4375C7.19588 14.125 7 13.9291 7 13.6875Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 11.0625C7 10.8209 7.19588 10.625 7.4375 10.625H17.0625C17.3041 10.625 17.5 10.8209 17.5 11.0625C17.5 11.3041 17.3041 11.5 17.0625 11.5H7.4375C7.19588 11.5 7 11.3041 7 11.0625Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 8.4375C7 8.19588 7.19588 8 7.4375 8H17.0625C17.3041 8 17.5 8.19588 17.5 8.4375C17.5 8.67912 17.3041 8.875 17.0625 8.875H7.4375C7.19588 8.875 7 8.67912 7 8.4375Z" fill="white" />
                    </svg>

                </button>   
        </div>
    );
}