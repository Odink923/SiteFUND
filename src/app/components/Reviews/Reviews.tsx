import Image from 'next/image';
import ReviewsCarrousel from './ReviewsCarrousel/ReviewsCarrousel';
export default function Reviews() {
    return (
        <div className='relative z-10 mt-[5.99vw]'>
        {/* Background Image */}
        <Image
            src="/images/Reviews.png" // Path to your image
            alt="Child5"
            width={1936}
            height={1260}
            className="object-cover w-full h-auto"
        />

        {/* Overlaying Elements */}
        <div className="absolute inset-0 flex flex-col pt-[3.39vw] ">
            <h1 className="font-amatic lg:pl-[5.21vw] lg:text-[3.33vw]">Відгуки</h1>
              <ReviewsCarrousel></ReviewsCarrousel>
        </div>
        </div>
    );
}
