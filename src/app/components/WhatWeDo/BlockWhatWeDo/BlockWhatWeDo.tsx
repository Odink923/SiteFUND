import Image from 'next/image';
import { ReactNode } from 'react';

interface BlockWhatWeDoProps {
  children: ReactNode;
  title: string;
  description: string;
}

export default function BlockWhatWeDo({ children, title, description }: BlockWhatWeDoProps) {
  return (
    <div className="mb-8 w-full flex justify-center lg:justify-start h-auto lg:mb-[10.16vw] lg:w-[29.43vw]">
      <div>
      <div className="pb-4 flex justify-center lg:justify-start lg:pb-[1.04vw]">{children}</div>
      <div className="text-[1.25rem] flex justify-center lg:justify-start lg:text-[1.88vw] lg:pb-[1.04vw] font-amatic">{title}</div>
      <p className="text-base text-justify  font-assistant leading-normal lg:text-[1.04vw]">
        {description}
      </p>
      </div>
    </div>
  );
}
