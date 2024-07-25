import { usePathname } from "next/navigation";
import React from "react";

export function BlogLayout({
  children,
  topics,
  image,
  imageAlt,
}: {
  children: React.ReactNode;
  topics: string[];
  image: string;
  imageAlt: string | undefined;
}) {
  const path = usePathname();
  return (
    <table className="mt-[90px] flex w-full">
      <tbody className="w-full">
        <tr>
          <td className="w-full">
            <img
              src={image}
              className="h-96 w-full object-cover"
              alt={imageAlt}
            />
            <div className="py-12 px-8 md:px-20 lg:px-20 w-[80ch] mx-auto">
              {children}
            </div>
          </td>
          <td className="border-l align-top p-8 border-black">
            <div className="w-72 flex flex-col justify-start">
              <p className="font-semibold mb-2">In this page</p>
              <ul className="ml-4 my-2 space-y-4 opacity-75">
                {topics.map((topic) => (
                  <li key={topic} className={topic.includes(">") ? "ml-4" : ""}>
                    <a href={`${path}#${topic.replaceAll(">", "")}`}>
                      -{" "}
                      <span className="ml-2">{topic.replaceAll(">", "")}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
