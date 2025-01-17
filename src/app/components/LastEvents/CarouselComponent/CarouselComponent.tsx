"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './CarouselComponent.module.css';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CarouselComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative">
            <Swiper
               
                centeredSlides={true}
                initialSlide={1}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                breakpoints={{
                    320: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                    },
                    640:{
                        slidesPerView: 1.8,
                        spaceBetween: 15,
                    },
                    720:{
                        slidesPerView: 1.8,
                        spaceBetween: 20,
                    },
                    
                    1024: {
                        slidesPerView: 1.8,
                        spaceBetween: 37,
                    },
                    1280: {
                        slidesPerView: 1.8,
                        spaceBetween: 46,
                    },
                    1536: {
                        slidesPerView: 1.8,
                        spaceBetween: 55,
                    },
                }}
            >
                {[ // Мапимо слайди для зручного рендерингу
                    { src: "/images/CarouselComponent3.png", date: "01.09.2024", title: "Назва події" },
                    { src: "/images/CarouselComponent1.png", date: "01.09.2024", title: "Назва події" },
                    { src: "/images/CarouselComponent2.png", date: "01.09.2024", title: "Назва події" }
                ].map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative">
                            <Image 
                                src={slide.src} 
                                alt={`Подія ${index + 1}`} 
                                width={1086} 
                                height={600}
                                className="rounded-[3.13vw] object-cover w-full h-full lg:w-[56.56vw] lg:h-[31.25vw]" 
                            />
                            {/* Якщо слайд не активний - додаємо затемнення */}
                            {activeIndex !== index && (
                                <div className="absolute inset-0 bg-black opacity-50 rounded-[3.13vw]"></div>
                            )}
                            {/* Якщо слайд активний - додаємо градієнт і текст */}
                            {activeIndex === index && (
                                <>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#202020d9] to-transparent rounded-[3.13vw]"></div>
                                    {slide.title && (
                                        <div className="absolute bottom-10 left-10 text-white">
                                            <p className="text-base sm:text-smBase lg:text-[1.04vw] font-assistant">{slide.date}</p>
                                            <h2 className="text-base sm:text-smBase lg:text-[1.88vw] font-assistant font-semibold">{slide.title}</h2>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <style jsx global>{`
  .swiper-button-next,
  .swiper-button-prev {
    color: white !important;
    padding-left:4.38vw;
    padding-right:4.38vw;
     /* Примусове застосування білого кольору */
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 2.60vw
    !important; /* Примусове збільшення розміру стрілок */
  }
`}</style>
        </div>
    );
};

export default CarouselComponent;
