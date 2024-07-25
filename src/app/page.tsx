"use client";
import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import blogs from "@/utils/blogs";
import { useSession } from "next-auth/react";
import { FiSearch } from "react-icons/fi";

export default function Page() {
  const { data: session } = useSession();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-24 py-12 px-8 md:px-20 lg:px-20 space-y-6">
      <h1 className="text-5xl sm:text-6xl pb-4">What's new</h1>
      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-4 px-6 border border-neutral-800 dark:bg-black dark:text-white focus:outline-none rounded-lg"
        />
        <FiSearch className="size-12 cursor-pointer border bg-neutral-900 p-[14px] text-white rounded-full" />
      </div>
      <div className="mb-4 flex">
        {[
          "Cloud.svg",
          "Coding Challenge.svg",
          "ML.svg",
          "Mobile.svg",
          "Open Source.svg",
          "UX.svg",
          "Web.svg",
        ].map((stack) => (
          <button onClick={() => {}}>
            <img
              src={`/stacks/${stack}`}
              className="w-24 h-16 shrink-0 mix-blend-difference object-cover dark:invert"
            />
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              description={blog.description}
              image={
                blog.image ||
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiC2X0sIY_AGvgi6jD8Eh_u8rOdZXKA6PP18tnJdA6jQxR-n4bF6vsIVI2D4FTOnHAlqSY5hJShEjHcRQr7P8QM-YyP3sM3Su_KxFRdBXhg8WUIoXr74luWfFvtgYGJHWdDe_gPnwpCsLR4YhE0U88QcSqrYs3LLjp7dGqQul_pRoerJr__-mD8lUPA/s1600/Android-IO22AndroidDevRecap_Social.png"
              }
              readTime={blog.readTime}
              author={blog.author}
              date={blog.date}
              link={blog.link}
            />
          ))
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
    </div>
  );
}
