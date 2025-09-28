import ExperienceTimeline from "./Components/ExperienceTimeline";

export default function Experience() {
  const experiences = [
    {
      title: "Worked under Professor",
      date: "Jun 2023 - Aug 2023",
      description:
        "Assisted in developing PDF2X,a windows and linux application, which mapped student's result originally in pdf format to excel file. Earlier this used to be done manually, thus reduced the manual work which required 2 days to a single click",
      designation: "",
    },
    {
      title: "Fullstack Intern at GO KATi LTD.",
      date: "Mar 2025 - May 2025",
      description:
        "Assisted in developing a meeting summarization application(electron based) that reduced meeting review time by 70% using multi-mode audio processing techniques. (Contract based)",
      designation: "Fullstack Intern",
    },
    {
      title: "Project Intern at Voicera Analytics",
      date: "September 2025 - Current",
      description:
        "Contributed to the design and development of an Agentic Testing Framework to streamline and automate complex test workflows. Built intuitive Figma wireframes, researched industry practices, and defined user/data flows for a robust frontend-backend system",
      designation: "Project Intern",
    },

    // {
    //   title: "Intern at Startup Inc.",
    //   date: "Jan 2018 - May 2018",
    //   description:
    //     "Assisted in developing a mobile application, gaining hands-on experience in agile development practices and team collaboration.",
    //   designation: "Intern",
    // },
  ];
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 max-w-1/3 flex items-center space-x-2">
          <h1 className="text-4xl font-bold text-accent mb-2 font-heading whitespace-nowrap">
            #Experience
          </h1>
          <div className="flex-1 h-1 bg-accent"></div>
        </div>
        <ExperienceTimeline experiences={experiences} />
      </div>
    </section>
  );
}
