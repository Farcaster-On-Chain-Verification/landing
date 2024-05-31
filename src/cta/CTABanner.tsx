import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
  image: string;
  imageAlt: string;
};

const CTABanner = (props: ICTABannerProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-col rounded-md bg-primary-100 p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
      <img
        src={`${router.basePath}${props.image}`}
        alt={props.imageAlt}
        className="w-48"
      />

      <div className="text-2xl font-semibold">
        <div className="text-gray-900">{props.title}</div>
        <div className="text-primary-500">{props.subtitle}</div>
      </div>

      <div className="whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0">
        {props.button}
      </div>
    </div>
  );
};

export { CTABanner };
