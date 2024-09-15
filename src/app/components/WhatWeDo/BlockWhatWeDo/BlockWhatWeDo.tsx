import Image from 'next/image';
import { ReactNode } from 'react';
interface BlockWhatWeDoProps {
    children: ReactNode; 
  title: string;    // заголовок
  description: string; // опис
}

export default function BlockWhatWeDo({ children , title, description }: BlockWhatWeDoProps) {
  return (
    <div className="lg:mb-[10.16vw] lg:w-[29.43vw] h-[10.05vw]">
           <div className="lg:pb-[1.04vw]">{children}</div>
      
      <div className="lg:text-[1.88vw] lg:pb-[1.04vw] font-amatic">{title}</div>
      <p className="lg:text-[1.04vw] text-justify font-assistant leading-none">{description}</p>
    </div>
  );
}
