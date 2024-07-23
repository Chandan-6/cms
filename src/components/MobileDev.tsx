import React from "react";
import { BsPhone, BsApple, BsAndroid2, BsGear, BsTools } from "react-icons/bs";

const mobileRoadmapData = [
  {
    title: "Fundamentals",
    icon: <BsPhone />,
    skills: ["Mobile UI/UX", "Responsive Design", "Mobile Architecture", "APIs", "Offline Storage"],
  },
  {
    title: "iOS Development",
    icon: <BsApple />,
    skills: ["Swift", "Objective-C", "Xcode", "UIKit", "SwiftUI", "Core Data"],
  },
  {
    title: "Android Development",
    icon: <BsAndroid2 />,
    skills: ["Java", "Kotlin", "Android Studio", "XML", "Jetpack Compose", "Room"],
  },
  {
    title: "Cross-Platform",
    icon: <BsGear />,
    skills: ["React Native", "Flutter", "Xamarin", "Ionic", "Progressive Web Apps"],
  },
  {
    title: "Mobile DevOps",
    icon: <BsTools />,
    skills: ["CI/CD for Mobile", "TestFlight", "Google Play Console", "App Store Connect", "Crashlytics"],
  }
];

const RoadmapCard = ({ title, icon, skills }: any) => (
  <div className="rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
    <div className="flex items-center mb-4">
      <span className="text-3xl mr-3">{icon}</span>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill:any, index :any) => (
        <li key={index} className="flex items-center">
          <span className="w-2 h-2 bg-neutral-500 rounded-full mr-2"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const MobileDev = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 border-b border-b-neutral-700">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Mobile Development Roadmap
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobileRoadmapData.map((section, index) => (
            <RoadmapCard key={index} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileDev;