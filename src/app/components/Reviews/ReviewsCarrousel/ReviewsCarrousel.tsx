"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SwiperCore from 'swiper';

const ReviewsCarrousel = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

    // Приклад слайдів
    const slides = [
        {
            description: "KidsFuture.Fund це дивовижно! Їхня відданість підтримці майбутнього дітей надихає. Команда є співчутливою та професійною. Дякуємо за те, що змінюєте наше співтовариство на краще!",
            title: "Ім’я Прізвище (можливо посада)"
        },
        {
            description: "KidsFuture.Fund це дивовижно! Їхня відданість підтримці майбутнього дітей надихає. Команда є співчутливою та професійною. Дякуємо за те, що змінюєте наше співтовариство на краще!",
            title: "Ім’я Прізвище (можливо посада)"
        },
        {
            description: "KidsFuture.Fund це дивовижно! Їхня відданість підтримці майбутнього дітей надихає. Команда є співчутливою та професійною. Дякуємо за те, що змінюєте наше співтовариство на краще!",
            title: "Ім’я Прізвище (можливо посада)"
        },
        // Додайте інші слайди за потреби
    ];

    return (
        <div className="relative w-full">
            <Swiper
                slidesPerView={1.5}
                centeredSlides={false}
                initialSlide={0}
                className="mySwiper w-full"
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => console.log('Active slide index:', swiper.activeIndex)}

                loop={true} // Безкінечне прокручування
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        
                       
                    },
                    640:{
                        slidesPerView: 1,
                        
            
                    },
                    720:{
                        slidesPerView: 1,
                    },
                    
                    1024: {
                        slidesPerView: 1.5,
                        
                    },
                    1280: {
                        slidesPerView: 1.5,
                    
                    },
                    1536: {
                        slidesPerView: 1.5,
                        
                    },
                }}
                
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative pl-15 pr-15 ml-[2.875rem] mr-[2.875rem] bg-[#20202026] lg:w-[63.23vw] lg:h-[20.16vw] lg:ml-[4.21vw] rounded-[3.13vw] ">
                            {slide.title && (
                                <div className="text-[#202020] pt-[4.58vw]  lg:pl-[4.27vw] lg:w-[45.78vw] lg:h-[10.00vw] leading-none ">

                                    <div className="flex items-center">
                                        <svg width="4.74vw" height="4.74vw" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="45.5" cy="45.5" r="45.5" fill="#D9D9D9" />
                                            <path d="M45.5 45.5C51.9893 45.5 57.25 40.2393 57.25 33.75C57.25 27.2607 51.9893 22 45.5 22C39.0107 22 33.75 27.2607 33.75 33.75C33.75 40.2393 39.0107 45.5 45.5 45.5ZM53.3333 33.75C53.3333 38.0762 49.8262 41.5833 45.5 41.5833C41.1738 41.5833 37.6667 38.0762 37.6667 33.75C37.6667 29.4238 41.1738 25.9167 45.5 25.9167C49.8262 25.9167 53.3333 29.4238 53.3333 33.75Z" fill="black" />
                                            <path d="M69 65.0833C69 69 65.0833 69 65.0833 69H25.9167C25.9167 69 22 69 22 65.0833C22 61.1667 25.9167 49.4167 45.5 49.4167C65.0833 49.4167 69 61.1667 69 65.0833ZM65.0833 65.0697C65.0777 64.1031 64.481 61.2076 61.8242 58.5508C59.2695 55.9961 54.4656 53.3333 45.5 53.3333C36.5343 53.3333 31.7304 55.9961 29.1757 58.5508C26.5189 61.2076 25.9222 64.1031 25.9167 65.0697H65.0833Z" fill="black" />
                                        </svg>
                                        <h2 className="text-base pb-15 lg:pb-[0px]  lg:text-[1.88vw] lg:pl-[1.82vw] font-assistant font-semibold">{slide.title}</h2>
                                    </div>

                                    <p className="text-base lg:text-[1.04vw] lg:pt-[1.82vw] text-justify">{slide.description}</p>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Кастомні кнопки навігації */}
            <div className="flex ml-[5.21vw] pb-30 mt-[3.13vw] space-x-[1.46vw]">
                <button 
                    onClick={() => swiperInstance && swiperInstance.slidePrev()}
                    className="
                        hidden lg:flex bg-white hover:bg-gray-200 text-black rounded-full focus:outline-none transition-colors duration-300 shadow-lg hover:shadow-xl
                        flex items-center justify-center
                        lg:w-[3vw] lg:h-[3vw]
                    "
                >
                    <FaChevronLeft className="lg:text-[1.5vw]" />
                </button>
                <button
                    onClick={() => swiperInstance && swiperInstance.slideNext()}
                    className="
                        bg-white hidden lg:flex hover:bg-gray-200 text-black rounded-full focus:outline-none transition-colors duration-300 shadow-lg hover:shadow-xl
                        flex items-center justify-center
                        lg:w-[3vw] lg:h-[3vw]
                    "
                >
                    <FaChevronRight className="lg:text-[1.5vw]" />
                </button>
            </div>
        </div>
    );
};

export default ReviewsCarrousel;
