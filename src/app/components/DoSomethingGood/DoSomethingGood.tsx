import Image from 'next/image';
export default function DoSomethingGood() {
    return (
        <div >
            <div className="flex flex-col pt-30 pb-15 pl-20 pr-20 lg:flex-row lg:items-center lg:pl-[5.83vw] lg:pt-[5.99vw] lg:pb-[3.39vw]">
                <h1 className="font-amatic text-xl sm:text-smXl md:text-mdXl lg:text-[3.33vw]">Зробіть щось хороше сьогодні</h1>
                <p className="font-assistant text-base sm:text-smBase lg:text-[1.04vw] lg:w-[29.43vw] leading-none lg:ml-[23.94vw] ">Приєднуйтесь до нас, щоб підтримати ініціативи в Києві. Разом ми приносимо надію і змінюємо життя на краще.
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3">
                <div className="relative w-full aspect-square">
                    <Image
                        src="/images/DoSomethingImg1.png"
                        alt="Image 1"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative w-full aspect-square">
                    <Image
                        src="/images/DoSomethingImg2.png"
                        alt="Image 2"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative w-full aspect-square">
                    <Image
                        src="/images/DoSomethingImg3.png"
                        alt="Image 3"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative w-full aspect-square">
                    <Image
                        src="/images/DoSomethingImg4.png"
                        alt="Image 4"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative w-full aspect-square">
                    <Image
                        src="/images/DoSomethingImg5.png"
                        alt="Image 5"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative w-full aspect-square">
                    <Image
                        src="/images/DoSomethingImg6.png"
                        alt="Image 6"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
