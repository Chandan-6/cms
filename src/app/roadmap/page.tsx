import CloudDevOpsRoadmap from "@/components/CloudDevOps";
import FullStackRoadmap from "@/components/FullStack";
import MobileDev from "@/components/MobileDev";

export default function Page() {
  return (
    <div className="my-24 mt-32 mx-12 py-12 sm:px-6">
      <div className="pb-12 px-6 sm:px-16 ">
        <h1 className="text-5xl sm:text-6xl font-bold">Roadmaps</h1>
        <p className="w-[54ch] pt-6 font-light text-neutral-400 leading-9 ">
          A roadmap helps you to navigate easily through your journey of
          learning, however it is important to note that you need to try to
          experiment along and get your hands dirty with every technology
          because there is fun and most fruitful learning there.
        </p>
      </div>

      <FullStackRoadmap />
      <MobileDev />
      <CloudDevOpsRoadmap />
    </div>
  );
}
