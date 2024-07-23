import { PiClockLight } from "react-icons/pi";

export default function BlogCard({
  title,
  description,
  readTime,
  author,
  date,
  link,
}: {
  title: string;
  description: string;
  readTime: string;
  author: string;
  date: string;
  link: string;
}) {
  return (
    <a
      href={link}
      className="flex flex-col  cursor-pointer p-4 my-2 rounded-xl border hover:bg-neutral-50 hover:border-neutral-400 dark:hover:bg-neutral-900 dark:border-neutral-800 transition-all duration-300"
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-lg text-neutral-500 mt-2">{description}</p>
      <div className="flex space-x-2 items-center justify-start mt-2">
        <p>{author}</p>
        <p>{date}</p>
      </div>
      <div className="flex space-x-2 items-center justify-start mt-2">
        <PiClockLight />
        <p>{readTime}</p>
      </div>
    </a>
  );
}
