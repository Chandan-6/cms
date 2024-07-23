"use client";
import "./docker.css";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

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

  return (
    <div className="mt-24 py-12 px-8 md:px-20 lg:px-20">
      <h1 className="text-6xl pb-6 font-semibold text-center">
        What is Docker?
      </h1>
      <p className="pb-8 text-neutral-500">
        Docker is a platform that uses containers to create, deploy, and run
        applications. Containers are lightweight and include everything needed
        to run the application, so you can ensure it will run the same way
        everywhere.
      </p>
      <div className="text-center mb-8">
        <img
          src="https://www.docker.com/wp-content/uploads/2023/05/symbol_blue-docker-logo.png"
          alt="Docker Overview"
          className="mx-auto w-32 object-cover"
        />
      </div>
      <h2 className="text-xl sm:text-3xl pb-4 font-semibold">
        Real-World Example
      </h2>
      <p className="pb-8 text-neutral-500">
        Think of Docker containers like a shipping container. No matter what is
        inside the container, it can be shipped, handled, and stored the same
        way. Similarly, Docker containers package software and its dependencies
        to ensure consistency across different environments.
      </p>
      <h2 className="text-xl sm:text-3xl pb-4 font-semibold">
        Containerizing a Node.js App
      </h2>
      <p className="pb-4 text-neutral-500">
        Let&apos;s containerize a simple Node.js app that listens on port 3000.
        Suppose our Node.js app consists of the following:
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
                  The <code>Dockerfile</code> contains a set of instructions on
                  how to build the Docker image:
                </p>
                <ul className="list-disc list-inside code-snippet">
                  <li>
                    <code>FROM node:14</code>: Specifies the base image to use,
                    in this case, Node.js version 14.
                  </li>
                  <li>
                    <code>WORKDIR /app</code>: Sets the working directory in the
                    container to <code>/app</code>.
                  </li>
                  <li>
                    <code>COPY package*.json ./</code>: Copies{" "}
                    <code>package.json</code> and <code>package-lock.json</code>{" "}
                    to the working directory.
                  </li>
                  <li>
                    <code>RUN npm install</code>: Installs the Node.js
                    dependencies.
                  </li>
                  <li>
                    <code>COPY . .</code>: Copies the rest of the application
                    files to the working directory.
                  </li>
                  <li>
                    <code>EXPOSE 3000</code>: Exposes port 3000 to be accessible
                    outside the container.
                  </li>
                  <li>
                    <code>CMD [&quot;node&quot;, &quot;index.js&quot;]</code>:
                    Specifies the command to run the application.
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
                This command runs the Docker container from the image, mapping
                port 3000 on the host to port 3000 on the container.
              </p>
            )}
            {item.title === "Step 4: Stop the Docker Container" && (
              <p>
                These commands list the running Docker containers and stop the
                specified container using its ID.
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DockerGuide;
