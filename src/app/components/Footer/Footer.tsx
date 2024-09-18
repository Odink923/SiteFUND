import Image from 'next/image';
export default function Footer() {
    return (
       <div className="bg-[#4B86C6] lg:pl-[5.21vw] lg:pt-[4.89vh] lg:pb-[4.89vh]">
         <Image
                    src="/images/Logo.png" // Шлях до вашого зображення
                    alt="Logo"
                    width={250}
                    height={82}
                    className="object-cover
                lg:w-[13.02vw] lg:h-[4.27vw] 
                " // Використання Tailwind класу через className
        />


       </div>
    );
}