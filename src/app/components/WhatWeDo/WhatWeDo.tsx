import Image from 'next/image';
import BlockWhatWeDo from './BlockWhatWeDo/BlockWhatWeDo';

export default function WhatWeDo() {
    const path1 = "/images/WhatWeDo1.png"
    return (
        <div className='relative z-10 mt-[5.99vw]'>
            {/* Background Image */}
            <Image
                src="/images/WhatWeDo.png" // Path to your image
                alt="Child5"
                width={1936}
                height={1260}
                className="object-cover w-full h-auto"
            />

            {/* Overlaying Elements */}
            <div className="absolute inset-0 flex flex-col">
                <h1 className="lg:text-[3.33vw] lg:pl-[5.21vw] lg:pt-[12.50vw] font-amatic  text-black">Чим ми займаємось?</h1>

                <div className="grid grid-cols-2  lg:pl-[5.21vw] lg:pt-[5.21vw] text-black">
                    <BlockWhatWeDo title="Програми громадської підтримки" description="Ми взаємодіємо з місцевими громадами, надаючи ресурси та підтримку для різних соціальних потреб.">
                        <Image
                            src="/images/WhatWeDo1.png" // Використання пропсу для зображення
                            alt="Child5"
                            width={70}
                            height={70}
                            className="object-cover lg:w-[3.65vw] lg:h-[3.65vw]"
                        />
                    </BlockWhatWeDo>
                    <div className="lg:pl-[5.21vw]">
                    <BlockWhatWeDo title="Освітні майстер-класи" description="Наші майстер-класи надають людям знання та навички для особистого та професійного зростання.">
                        <Image
                            src="/images/WhatWeDo2.png" // Використання пропсу для зображення
                            alt="Child5"
                            width={50}
                            height={50}
                            className="object-cover lg:w-[2.60vw] lg:h-[2.60vw]"
                        />
                    </BlockWhatWeDo>
                    </div>
                    <BlockWhatWeDo title="Волонтерство" description="Приєднуйтесь до нашої команди волонтерів та змінюйте своє співтовариство на краще через різноманітні важливі проекти.">
                        <Image
                            src="/images/WhatWeDo3.png" // Використання пропсу для зображення
                            alt="Child5"
                            width={70}
                            height={70}
                            className="object-cover lg:w-[3.65vw] lg:h-[3.65vw]"
                        />
                    </BlockWhatWeDo>
                    <div className="lg:pl-[5.21vw]">
                    <BlockWhatWeDo title="Благодійні заходи" description="Ми проводимо благодійні заходи, щоб зробити дітей щасливими.">
                        <Image
                            src="/images/WhatWeDo4.png" // Використання пропсу для зображення
                            alt="Child5"
                            width={50}
                            height={50}
                            className="object-cover lg:w-[2.60vw] lg:h-[2.60vw]"
                        />
                    </BlockWhatWeDo>
                    </div>

                </div>
            </div>
        </div>
    );
}
