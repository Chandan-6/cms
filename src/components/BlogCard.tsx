import { PiClockLight } from "react-icons/pi";

export default function BlogCard({
  title,
  description,
  image,
  readTime,
  author,
  date,
  link,
}: {
  title: string;
  description: string;
  image: string;
  readTime: string;
  author: string;
  date: string;
  link: string;
}) {
  return (
    <a
      href={link}
      className="flex flex-col  cursor-pointer rounded-xl overflow-clip border-black border dark:hover:bg-neutral-900 dark:border-white/30 transition-all duration-300"
    >
      <img className="h-64 object-cover" src={image} />
      <div className="p-6 flex flex-col grow">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="my-2 line-clamp-3">{description}</p>
        <p className="text-sm font-medium mt-auto">
          {author}
          <span className="ml-2 opacity-50">{date}</span>
        </p>
        <div className="flex space-x-2 items-center justify-start mt-2">
          <PiClockLight />
          <p className="text-sm">{readTime}</p>
        </div>
      </div>
    </a>
  );
}
