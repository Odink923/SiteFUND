import Image from 'next/image';
import BlockWhatWeDo from './BlockWhatWeDo/BlockWhatWeDo';

export default function WhatWeDo() {
    return (
        <div className='relative z-10 mt-[5.99vw] w-full h-[697px] lg:w-[99vw] lg:h-[65.63vw]'>
        {/* Фонове зображення через CSS */}
        <div
            className="absolute inset-0 bg-what-we-do-change lg:bg-what-we-do bg-no-repeat bg-center"
            style={{ backgroundSize: '100% 100%' }}
        >
            {/* Фонове зображення */}
        </div>

            {/* Overlaying Elements */}
            <div className="absolute inset-0 flex flex-col pl-20 pr-20 lg:pl-0 lg:pr-0 ">
                <h1 className="text-xl pt-[3.125rem] flex justify-center lg:justify-start sm:text-smXl md:text-mdXl lg:text-[3.33vw] lg:pl-[5.21vw] lg:pt-[12.50vw] font-amatic  text-black">Чим ми займаємось?</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:pl-[5.21vw] lg:pt-[5.21vw]  text-black">
                    <BlockWhatWeDo title="Програми громадської підтримки" description="Ми взаємодіємо з місцевими громадами, надаючи ресурси та підтримку для різних соціальних потреб.">
                        
                        <Image
                            src="/images/WhatWeDo1.png" // Використання пропсу для зображення
                            alt="Child5"
                            width={70}
                            height={70}
                            className="object-cover w-[40px] h-[40px] lg:w-[3.65vw] lg:h-[3.65vw]"
                        />
                    </BlockWhatWeDo>
                    <div className="lg:pl-[5.21vw]">
                    <BlockWhatWeDo title="Освітні майстер-класи" description="Наші майстер-класи надають людям знання та навички для особистого та професійного зростання.">
                        <Image
                            src="/images/WhatWeDo2.png" // Використання пропсу для зображення
                            alt="Child5"
                            width={50}
                            height={50}
                            className="object-cover w-[40px] h-[40px] lg:w-[2.60vw] lg:h-[2.60vw]"
                        />
                    </BlockWhatWeDo>
                    </div>
                    <BlockWhatWeDo title="Волонтерство" description="Приєднуйтесь до нашої команди волонтерів та змінюйте своє співтовариство на краще через різноманітні важливі проекти.">
                        <Image
                            src="/images/WhatWeDo3.png" // Використання пропсу для зображення
                            alt="Child5"
                            width={70}
                            height={70}
                            className="object-cover w-[40px] h-[40px] lg:w-[3.65vw] lg:h-[3.65vw]"
                        />
                    </BlockWhatWeDo>
                    <div className="lg:pl-[5.21vw]">
                    <BlockWhatWeDo title="Благодійні заходи" description="Ми проводимо благодійні заходи, щоб зробити дітей щасливими.">
                        <Image
                            src="/images/WhatWeDo4.png" // Використання пропсу для зображення
                            alt="Child5"
                            width={50}
                            height={50}
                            className="object-cover w-[40px] h-[40px] lg:w-[2.60vw] lg:h-[2.60vw]"
                        />
                    </BlockWhatWeDo>
                    </div>

                </div>
            </div>
        </div>
    );
}
