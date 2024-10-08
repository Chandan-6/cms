"use client";
import "./docker.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { GoBook } from "react-icons/go";
import { BlogLayout } from "../../components/layout";

const plus = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const DockerGuide = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const handleCopy = (command: string) => {
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const commands = [
    {
      title: "Step 1: Create a Dockerfile",
      command: `FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
`,
    },
    {
      title: "Step 2: Build the Docker Image",
      command: "docker build -t my-node-app .",
    },
    {
      title: "Step 3: Run the Docker Container",
      command: "docker run -p 3000:3000 my-node-app",
    },
    {
      title: "Step 4: Stop the Docker Container",
      command: "docker ps\n\ndocker stop <container_id>",
    },
  ];

  const topics = [
    "Introduction",
    "Metaphorically",
    "Containerizing a Node.Js app",
    ">Creating dockerfile",
    ">Building docker image",
    ">Running the docker container",
    ">Stopping the docker container",
  ];

  return (
    <BlogLayout
      topics={topics}
      image="/blog-headers/docker.png"
      imageAlt="an image of the docker logo on light blue background"
    >
      <div className={`flex flex-col ${plus.className}`}>
        <div className="text-center my-4">
          <h1 className="text-5xl md:text-6xl my-4 font-semibold">
            What is Docker?
          </h1>
          <h2 className="text-lg md:text-2xl my-6">
            Code doesn&apos;t work in your machine? Docker is here to save the
            day!
          </h2>
          <h3 className="text-lg md:text-xl mb-6 text-[#777777]">
            Solves the age-old problem of &quot;It works on my machine!&quot;
          </h3>

          <div className="flex space-x-3 items-center justify-center">
            <img
              src="/me.jpeg"
              alt="An image of Sidharth Philkhana"
              className=" w-12 h-12 md:w-20 md:h-20 rounded-full object-cover"
            />
            <p className="md:text-xl md:flex hidden px-2 font-semibold">
              P Sidharth{" "}
            </p>
            <p className="text-sm md:text-xl px-1">|</p>
            <p className="text-sm md:text-xl px-2">24 Jul 2024</p>
            <div className="flex space-x-4 items-center justify-between px-1">
              <GoBook />
              <p className="text-sm md:text-xl">10 min</p>
            </div>
          </div>
        </div>
      </div>
      <section id={topics[0]}>
        <h1 className="text-4xl pb-6 font-semibold mt-8">Intro</h1>
        <p className="pb-8 text-neutral-500">
          Docker is a platform that uses containers to create, deploy, and run
          applications. Containers are lightweight and include everything needed
          to run the application, so you can ensure it will run the same way
          everywhere.
        </p>
      </section>
      {/* <div className="text-center mb-8">
        <img
          src="https://www.docker.com/wp-content/uploads/2023/05/symbol_blue-docker-logo.png"
          alt="Docker Overview"
          className="mx-auto w-32 object-cover"
        />
      </div> */}
      <section id={topics[1]}>
        <h2 className="text-xl sm:text-3xl pb-4 font-semibold">
          Real-World Example
        </h2>
        <p className="pb-8 text-neutral-500">
          Think of Docker containers like a shipping container. No matter what
          is inside the container, it can be shipped, handled, and stored the
          same way. Similarly, Docker containers package software and its
          dependencies to ensure consistency across different environments.
        </p>
      </section>
      <section id={topics[2]}>
        <h2 className="text-xl sm:text-3xl pb-4 font-semibold">
          Containerizing a Node.js App
        </h2>
        <p className="pb-4 text-neutral-500">
          Let&apos;s containerize a simple Node.js app that listens on port
          3000. Suppose our Node.js app consists of the following:
        </p>
        <pre className="dark:bg-neutral-900 bg-neutral-200 p-4 rounded-lg mb-4">
          <code className="dark:text-yellow-600 text-yellow-800 flex-wrap">
            {`// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Docker!');
});

app.listen(PORT, () => {
  console.log(\`Server is running on 
  port \${PORT}\`);
});
`}
          </code>
        </pre>
        <p className="pb-4 text-neutral-500">
          This Node.js app uses Express to set up a server that listens on port
          3000 and returns &quot;Hello, Docker!&quot; when accessed.
        </p>
        {commands.map((item, index) => (
          <section id={topics[3 + index].replace(">", "")}>
            <div key={index} className="pb-8">
              <h3 className="text-xl pb-2 font-semibold">{item.title}</h3>
              <pre className="dark:bg-neutral-900 bg-neutral-200 p-4 rounded-lg mb-4">
                <code className="dark:text-blue-300 text-blue-800">
                  {item.command}
                </code>
              </pre>
              <CopyToClipboard
                text={item.command}
                onCopy={() => handleCopy(item.command)}
              >
                <button
                  className={`dark:bg-neutral-900 bg-neutral-200 py-2 px-4 rounded-lg ${
                    copiedCommand === item.command
                      ? " dark:bg-green-900 dark:text-green-500 bg-green-500 text-green-950"
                      : ""
                  }`}
                >
                  {copiedCommand === item.command ? "Copied!" : "Copy Command"}
                </button>
              </CopyToClipboard>
              <div className="text-neutral-500 pt-4">
                {item.title === "Step 1: Create a Dockerfile" && (
                  <>
                    <p className="pb-2">
                      The <code>Dockerfile</code> contains a set of instructions
                      on how to build the Docker image:
                    </p>
                    <ul className="list-disc list-inside code-snippet">
                      <li>
                        <code>FROM node:14</code>: Specifies the base image to
                        use, in this case, Node.js version 14.
                      </li>
                      <li>
                        <code>WORKDIR /app</code>: Sets the working directory in
                        the container to <code>/app</code>.
                      </li>
                      <li>
                        <code>COPY package*.json ./</code>: Copies{" "}
                        <code>package.json</code> and{" "}
                        <code>package-lock.json</code> to the working directory.
                      </li>
                      <li>
                        <code>RUN npm install</code>: Installs the Node.js
                        dependencies.
                      </li>
                      <li>
                        <code>COPY . .</code>: Copies the rest of the
                        application files to the working directory.
                      </li>
                      <li>
                        <code>EXPOSE 3000</code>: Exposes port 3000 to be
                        accessible outside the container.
                      </li>
                      <li>
                        <code>
                          CMD [&quot;node&quot;, &quot;index.js&quot;]
                        </code>
                        : Specifies the command to run the application.
                      </li>
                    </ul>
                  </>
                )}
                {item.title === "Step 2: Build the Docker Image" && (
                  <p>
                    This command builds the Docker image from the Dockerfile and
                    tags it as <code>my-node-app</code>.
                  </p>
                )}
                {item.title === "Step 3: Run the Docker Container" && (
                  <p>
                    This command runs the Docker container from the image,
                    mapping port 3000 on the host to port 3000 on the container.
                  </p>
                )}
                {item.title === "Step 4: Stop the Docker Container" && (
                  <p>
                    These commands list the running Docker containers and stop
                    the specified container using its ID.
                  </p>
                )}
              </div>
            </div>
          </section>
        ))}
      </section>
    </BlogLayout>
  );
};

export default DockerGuide;
