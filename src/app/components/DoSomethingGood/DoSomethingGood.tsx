import Image from 'next/image';
export default function DoSomethingGood() {
    return (
        <div >
            <div className="flex items-center lg:pl-[5.83vw] lg:pt-[5.99vw] lg:pb-[3.39vw]">
                <h1 className="font-amatic lg:text-[3.33vw]">Зробіть щось хороше сьогодні</h1>
                <p className="font-assistant lg:text-[1.04vw] lg:w-[29.43vw] leading-none lg:ml-[20.94vw] ">Приєднуйтесь до нас, щоб підтримати ініціативи в Києві. Разом ми приносимо надію і змінюємо життя на краще.
                </p>
            </div>
            <div className='flex'>
                <Image
                    src="/images/DoSomethingImg1.png" // Шлях до вашого зображення
                    alt="Child"
                    width={640}
                    height={640}
                    className="object-cover
                lg:w-[33.33vw] lg:h-[33.33vw] 
                " // Використання Tailwind класу через className
                />
                <Image
                    src="/images/DoSomethingImg2.png" // Шлях до вашого зображення
                    alt="Child"
                    width={640}
                    height={640}
                    className="object-cover
                lg:w-[33.33vw] lg:h-[33.33vw] 
                " // Використання Tailwind класу через className
                />
                <Image
                    src="/images/DoSomethingImg3.png" // Шлях до вашого зображення
                    alt="Child"
                    width={640}
                    height={640}
                    className="object-cover
                lg:w-[33.33vw] lg:h-[33.33vw] 
                " // Використання Tailwind класу через className
                />
            </div>
            <div className='flex'>
                <Image
                    src="/images/DoSomethingImg4.png" // Шлях до вашого зображення
                    alt="Child"
                    width={640}
                    height={640}
                    className="object-cover
                lg:w-[33.33vw] lg:h-[33.33vw] 
                " // Використання Tailwind класу через className
                />
                <Image
                    src="/images/DoSomethingImg5.png" // Шлях до вашого зображення
                    alt="Child"
                    width={640}
                    height={640}
                    className="object-cover
                lg:w-[33.33vw] lg:h-[33.33vw] 
                " // Використання Tailwind класу через className
                />
                <Image
                    src="/images/DoSomethingImg6.png" // Шлях до вашого зображення
                    alt="Child"
                    width={640}
                    height={640}
                    className="object-cover
                lg:w-[33.33vw] lg:h-[33.33vw] 
                " // Використання Tailwind класу через className
                />
            </div>
        </div>
    );
}
