
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Laptop,
  Database,
  Code,
  Layout,
  Users,
  Wrench,

} from "lucide-react";

const skills = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ],
  Tools: [
    "VS Code",
    "Git/GitHub",
    "Postman",
    "Linux",
    "Google Colab"
  ],
  programmingLanguages: [
    "JavaScript",
    "Go",
    "Python",
    "C++",
    "HTML/CSS",
  ],
  frameworksLibraries: [
    "React",
    "Django",
    "Tailwind CSS",
  ],
  softSkills: [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Time Management",
  ],
};

const iconMap = {
  frontend: <Laptop className="w-8 h-8 text-purple-400" />,
  tools: <Wrench className="w-8 h-8 text-blue-400" />,
  programmingLanguages: <Code className="w-8 h-8 text-green-400" />,
  frameworksLibraries: <Layout className="w-8 h-8 text-orange-400" />,
  softSkills: <Users className="w-8 h-8 text-pink-400" />,
};

const SkillCategory = ({ title, items, icon }: { title: string; items: string[]; icon: JSX.Element }) => (
  <Card className="backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
    <CardHeader className="flex flex-row items-center gap-4">
      {icon}
      <CardTitle className="text-xl font-semibold text-white">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 gap-2">
        {items.map((skill) => (
          <div
            key={skill}
            className="px-3 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 transition-all"
          >
            <p className="text-white">{skill}</p>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Skills = () => {
  return (
    <section className="py-20" id="skills">
      <div className="container px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <SkillCategory title="Frontend Development" items={skills.frontend} icon={iconMap.frontend} /> */}
          <SkillCategory title="Programming Languages" items={skills.programmingLanguages} icon={iconMap.programmingLanguages} />
          <SkillCategory title="Frameworks & Libraries" items={skills.frameworksLibraries} icon={iconMap.frameworksLibraries} />
          <SkillCategory title="Tools & Platforms" items={skills.Tools} icon={iconMap.tools} />
          <SkillCategory title="Soft Skills" items={skills.softSkills} icon={iconMap.softSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
