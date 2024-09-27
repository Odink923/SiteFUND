import Image from 'next/image';
import Navbar from '../Navbar/NavbarComponent';

export default function Carrousel() {
  return (
    <div className="relative w-screen min-h-[275px] sm:min-h-[300px] md:min-h-[320px] h-auto flex flex-col 
    pr-20 pl-20 sm:pr-30 sm:pl-30
    lg:pr-[5.21vw] lg:pl-[5.21vw]"> {/* Задаємо мінімальну висоту контейнера */}
      {/* Зображення фону */}
      <div className="absolute inset-0 w-full lg:h-[42.97vw] flex-grow"> {/* flex-grow дозволяє контейнеру розтягуватися */}
        <Image
          src="/images/ImageCarrousel.png" // Шлях до вашого зображення
          alt="Image Carrousel"
          layout="fill" // Заповнення всього контейнера
          objectFit="cover" // Збереження пропорцій зображення
        />
        {/* Вертикальний градієнт поверх зображення */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4B86C6]/90 to-[#ACD4FF]/50"></div>
      </div>

      {/* Вміст поверх зображення і градієнта */}
      <div className="relative z-10 flex flex-col ">
        <Navbar />
        <h1 className=" text-xl sm:text-smXl  md:text-mdXl pt-[3.25rem] lg:text-[5.21vw] lg:w-[40.81vw] font-amatic 
           lg:pt-[7.24vw]
            lg:pb-[1.30vw]
             text-white
             leading-none">Зробіть свій внесок <br></br>у майбутнє дітей сьогодні</h1>
        <p className="
        text-base
        sm:text-smBase
        md:text-mdBase
        max-w-[25rem]
         sm:max-w-[32rem]
        md:max-w-[32.125rem]
        text-white
        pt-[0.625rem]
       lg:text-[1.04vw]
       lg:max-w-[42.45vw] 
        font-assistant
        leading-none
        text justify">
          Приєднуйтесь до нас у нашій місії надання допомоги та підтримки тим, хто цього потребує. Давайте працювати разом, щоб створити світле майбутнє вже зараз.
        </p>
        <button className="text-[0.625rem] py-2 mt-[0.625rem] w-[8rem] mt-[0.625rem] lg:mt-[1.82vw] bg-white  leading-none  font-assistant font-semibold lg:py-2 lg:px-4 rounded-[50px]
        lg:w-[13.59vw] lg:h-[3.23vw]
        lg:text-[1.04vw]
      
        ">
          Долучайтесь до нас
        </button>


        <div className='flex mt-[0.625rem]  lg:pt-[7.92vw] lg:space-x-[0.26vw]  lg:pb-[1.35vw]'>
          <svg width="0.36vw" height="0.36vw" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.5" cy="3.5" r="3.5" fill="white" fill-opacity="0.8" />
          </svg>
          <svg width="1.46vw" height="0.36vw" viewBox="0 0 28 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="7" rx="3.5" fill="white" />
          </svg>
          <svg width="0.36vw" height="0.36vw" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.5" cy="3.5" r="3.5" fill="white" fill-opacity="0.8" />
          </svg>
          <svg width="0.36vw" height="0.36vw" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.5" cy="3.5" r="3.5" fill="white" fill-opacity="0.8" />
          </svg>

        </div>

      </div>
    </div>
  );
}
