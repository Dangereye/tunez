// React router
import { Link } from 'react-router-dom';

type CardProps = {
  image: { url: string; width: number; height: number };
  name: string;
  description: string;
  link: string;
};

export default function Card({ image, name, description, link }: CardProps) {
  return (
    <Link
      to={link}
      className='flex flex-col gap-1 p-4 transition-colors bg-zinc-100 hover:bg-zinc-200'
    >
      <img
        src={image.url}
        alt={name}
        width={image.width}
        height={image.height}
      />
      <div className='text-base font-medium'>{name}</div>
      <div className='text-sm line-clamp-2'>{description}</div>
    </Link>
  );
}
