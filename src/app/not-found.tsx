import { IoArrowBackCircleOutline } from "react-icons/io5";

function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-neutral-800">
      <h1 className="text-3xl md:text-5xl text-center  mb-6 ">
       404 Page , it doesn&apos;t exist 🚧
      </h1>
      <p className="text-2xl text-center  mb-8 animate-pulse">
        Not all who wander are lost, but you are.
      </p>
      <a
        href="/"
        className="text-2xl mt-6 hover:shadow-lg rounded-full transition duration-300
       hover:-translate-x-8 border border-neutral-500 flex justify-center items-center px-4 py-2 "
      >
        <IoArrowBackCircleOutline className="mr-2 inline-block" />
        Home
      </a>
      <div className="mt-8 text-center text-white text-opacity-60">
        <p>While you&apos;re here, enjoy this funny 404 page. 🎉</p>
        <p>
          Here&apos;s a random fact: Bananas are berries, but strawberries aren&apos;t!
        </p>
      </div>
    </div>
  );
}

export default NotFound;
