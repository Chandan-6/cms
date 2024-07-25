import GoogleBtn from "@/components/GoogleBtn";

export default function Signin() {
  return (
    <section className="mx-auto flex flex-col justify-center items-center h-screen w-fit space-y-7">
      <p className="text-8xl font-bold font-mono drop-shadow-md bg-gradient-to-r bg-clip-text text-transparent from-white/40 to-slate-500">
        Welcome to
      </p>
      <a href="/" className="flex gap-4 items-center py-6">
        <p className="font-bold text-outline text-3xl border-[1.5px] border-black dark:border-white px-[0.6rem] py-[2px] rounded-md hover:bg-black hover:text-outline-white hover:scale-[110%] transition-all duration-300">
          U
        </p>
        <p className="font-bold text-4xl leading-4 mt-1">
          Ultra
          <br />
          <span className="text-[0.72rem] font-medium lowercase">
            the ananta initiative
          </span>
        </p>
      </a>
      <GoogleBtn btnTxt="Sign in with Google" />
    </section>
  );
}
