import Image from 'next/image';
import Navbar from '../Navbar/NavbarComponent';

export default function Carrousel() {
  return (
    <div className="relative w-screen max-h-[42.97vw] h-auto flex flex-col"> {/* Задаємо мінімальну висоту контейнера */}
      {/* Зображення фону */}
      <div className="absolute inset-0 w-full h-[42.97vw] flex-grow"> {/* flex-grow дозволяє контейнеру розтягуватися */}
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
        <h1 className="text-[5.21vw]
           w-[40.81vw]
           font-amatic 
           pt-[7.24vw]
            pb-[1.30vw]
             text-white">Зробіть свій внесок у майбутнє дітей сьогодні</h1>
        <p className=" text-white
       text-[1.04vw]
       w-[42.45vw] 
        font-assistant">
          Приєднуйтесь до нас у нашій місії надання допомоги та підтримки тим, хто цього потребує. Давайте працювати разом, щоб створити світле майбутнє вже зараз.
        </p>
        <button className="mt-[1.82vw] bg-white    font-assistant font-semibold py-2 px-4 rounded-[50px]
        w-[13.59vw] h-[3.23vw]
        text-[1.04vw]
      
        ">
          Долучайтесь до нас
        </button>
      </div>
    </div>
  );
}
