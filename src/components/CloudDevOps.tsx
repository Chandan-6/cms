import React from "react";
import { 
  BsCloud, BsGear, BsCodeSlash, BsShieldLock, 
  BsSpeedometer, BsArrowRepeat, BsServer
} from "react-icons/bs";

const cloudDevOpsRoadmapData = [
  {
    title: "Cloud Fundamentals",
    icon: <BsCloud />,
    skills: [
      "Cloud Service Models (IaaS, PaaS, SaaS)",
      "Cloud Deployment Models",
      "Virtualization",
      "Containerization",
      "Serverless Computing",
      "Cloud Storage",
      "Cloud Networking"
    ]
  },
  {
    title: "Major Cloud Providers",
    icon: <BsServer />,
    skills: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform (GCP)",
      "IBM Cloud",
      "Oracle Cloud",
      "DigitalOcean",
      "Alibaba Cloud"
    ]
  },
  {
    title: "Infrastructure as Code",
    icon: <BsCodeSlash />,
    skills: [
      "Terraform",
      "AWS CloudFormation",
      "Azure Resource Manager",
      "Google Cloud Deployment Manager",
      "Ansible",
      "Puppet",
      "Chef"
    ]
  },
  {
    title: "CI/CD",
    icon: <BsArrowRepeat />,
    skills: [
      "Jenkins",
      "GitLab CI",
      "GitHub Actions",
      "CircleCI",
      "Travis CI",
      "Azure DevOps",
      "ArgoCD"
    ]
  },
  {
    title: "Containers & Orchestration",
    icon: <BsGear />,
    skills: [
      "Docker",
      "Kubernetes",
      "Docker Swarm",
      "Amazon ECS",
      "Azure Container Instances",
      "Google Kubernetes Engine",
      "OpenShift"
    ]
  },
  {
    title: "Monitoring & Logging",
    icon: <BsSpeedometer />,
    skills: [
      "Prometheus",
      "Grafana",
      "ELK Stack (Elasticsearch, Logstash, Kibana)",
      "Datadog",
      "New Relic",
      "Splunk",
      "Nagios"
    ]
  },
  {
    title: "Security & Compliance",
    icon: <BsShieldLock />,
    skills: [
      "Identity and Access Management (IAM)",
      "Network Security Groups",
      "Encryption (at rest and in transit)",
      "Security Information and Event Management (SIEM)",
      "Compliance frameworks (GDPR, HIPAA, PCI-DSS)",
      "Penetration Testing",
      "Security Automation"
    ]
  },
];

const RoadmapCard = ({ title, icon, skills }:any) => (
  <div className="rounded-lg p-6 transition-all duration-300">
    <div className="flex items-center mb-4">
      <span className="text-3xl mr-3 text-neutral-500">{icon}</span>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill:any, index:any) => (
        <li key={index} className="flex items-center">
          <span className="w-2 h-2 bg-neutral-500 rounded-full mr-2"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const CloudDevOpsRoadmap = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 border-b border-b-neutral-700">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-center mb-12">
          Cloud & DevOps
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cloudDevOpsRoadmapData.map((section, index) => (
            <RoadmapCard key={index} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CloudDevOpsRoadmap;