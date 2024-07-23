"use client"
import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import blogs from "@/utils/blogs";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-24 py-12 px-8 md:px-20 lg:px-20 space-y-6">
      <h1 className="text-5xl sm:text-6xl pb-4">Blogs</h1>
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-neutral-800 dark:bg-black dark:text-white focus:outline-none rounded-lg"
      />
      <div className="space-y-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              description={blog.description}
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
