import ReviewsCarrousel from './ReviewsCarrousel/ReviewsCarrousel';

export default function Reviews() {
    return (
        <div className="relative z-10 mt-[5.99vw] w-full lg:h-[46.88vw]  ">
            {/* Фонове зображення через CSS */}
            <div
                className="absolute inset-0 bg-reviews-change lg:bg-reviews bg-no-repeat bg-center"
                style={{ backgroundSize: '100% 100%' }}
            >
                {/* Фонове зображення */}
            </div>

            {/* Накладений контент */}
            <div className="relative flex flex-col pt-[3.39vw]">
                <h1 className="pl-20 pr-20 pb-15 text-xl sm:text-smXl md:text-mdXl font-amatic lg:pl-[5.21vw] lg:text-[3.33vw]">
                    Відгуки
                </h1>
                <ReviewsCarrousel />
            </div>
        </div>
    );
}
