import React from "react";
import { PiClockLight } from "react-icons/pi";

export default function BlogCard({
  title,
  description,
  readTime,
  author,
  date,
}: {
  title: string;
  description: string;
  readTime: string;
  author: string;
  date: string;
}) {
  return (
    <div className="cursor-pointer p-4 my-2 rounded-xl border hover: border-neutral-800 hover:border-neutral-500 transition-all duration-300">
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
    </div>
  );
}
