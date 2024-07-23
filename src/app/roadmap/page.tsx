import CloudDevOpsRoadmap from "@/components/CloudDevOps";
import FullStackRoadmap from "@/components/FullStack";
import MobileDev from "@/components/MobileDev";

export default function Page() {
  return (
    <div className="my-12">
      <h1>Roadmaps</h1>
      
      <FullStackRoadmap />
      <MobileDev />
      <CloudDevOpsRoadmap />
    </div>
  );
}
