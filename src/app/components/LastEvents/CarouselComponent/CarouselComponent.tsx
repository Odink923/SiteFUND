"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CarouselComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative">
            <Swiper
                slidesPerView={1.8}
                centeredSlides={true}
                initialSlide={1}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                breakpoints={{
                    1024: {
                        spaceBetween: 37,
                    },
                    1280: {
                        spaceBetween: 46,
                    },
                    1536: {
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
                                className="rounded-[60px] object-cover w-full h-full lg:w-[56.56vw] lg:h-[31.25vw]" 
                            />
                            {/* Якщо слайд не активний - додаємо затемнення */}
                            {activeIndex !== index && (
                                <div className="absolute inset-0 bg-black opacity-50 rounded-[60px]"></div>
                            )}
                            {/* Якщо слайд активний - додаємо градієнт і текст */}
                            {activeIndex === index && (
                                <>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#202020d9] to-transparent rounded-[60px]"></div>
                                    {slide.title && (
                                        <div className="absolute bottom-10 left-10 text-white">
                                            <p className="text-[1.04vw] font-assistant">{slide.date}</p>
                                            <h2 className="text-[1.88vw] font-assistant font-semibold">{slide.title}</h2>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CarouselComponent;
