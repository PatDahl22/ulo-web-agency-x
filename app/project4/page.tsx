"use client";

import { navItems, project3Items, project4Items, ProjectnavItems} from "@/data";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { RoleFeaturesSection } from "@/components/ui/RoleFeaturesSection";
import { TypewriterEffectSmooth as TypewriterEffect } from "@/components/ui/typewriter-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ProjectNav } from "@/components/ui/ProjectNav";

const page = () => {

  const words = [
    {
      text: "Ullis ",
      className: "text-6xl text-blue-500 dark:text-blue-500",
    },
    {
      text: " Fitness ",
      className: "text-6xl text-blue-500 dark:text-blue-500",
    },
    {
      text: " and ",
      className: "text-6xl text-blue-500 dark:text-blue-500",
    },
        {
      text: " Body Care",
      className: "text-6xl text-blue-500 dark:text-blue-500",
    },

  ];

  const project4Nav = ProjectnavItems.find(item => item.project4nav)?.project4nav;
  
  if (!project4Nav) {
    return <p>No navigation data found!</p>;
  }
  
  interface PersonasProps {
  id: number;
  area: string;
  icon?: string;
  title: string;
  description: React.ReactNode;
}

  const TextCard = ({ id, area, icon, title, description }: PersonasProps) => {
    return (
      <li
        id={id.toString()} // Apply the unique ID to each grid item
        className={`h-full items-start list-none ${area}`}
      >
        {/* Container with border and padding */}
        {/* Content container with inner styling */}
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] ">
          {/* Icon and text */}
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            {/* Icon container */}
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon && <img src={icon} alt={title} className="mb-4 w-16 h-16" />}
              {/* Title and Description */}
              <div className="space-y-3 text-start">
                {/* Title */}
                <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans md:text-2xl/[1.875rem] text-black dark:text-white items-start">
                  {title}
                </h3>
                {/* Description */}
                <h2 className="list-description font-medium font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-black dark:text-neutral-400 items-start w-full">
                  {description}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };

  const keyuserinsights = project3Items.keyuserinsights.map((item) => ({
    title: item.title,
    description: item.description,
    icon: item.icon,
  }));

  const accessibilityconsiderations = project3Items.accessibilityconsiderations.map((item) => ({
    title: item.title,
    description: item.description,
    icon: item.icon,
  }));


  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full h-full px-20">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <ProjectNav navItems={project4Nav} />

        <div className="h-full w-full">
          <StarsBackground className="absolute inset-0 z-100" />
          <ShootingStars />
          {/* BackgroundLines fills the container */}
          <div className="relative w-full md:h-[50vh] flex justify-center items-end my-4">
            <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-4 ">
              <div className="flex justify-center items-center sm:w-auto sm:mt-0">
                <img
                  src="/p4.png"
                  alt="Femtask"
                  className="justify-center items-center max-h-[600px] md:max-h-[500px] w-full mx-auto"
                />
              </div>
              <div className="flex flex-col justify-end items-start w-full ">
                <div className="flex flex-col justify-center w-full">
                  <TypewriterEffect words={words} />
                </div>

                <h4 className="my-2 m:text-xl lg:text-xl">
                  <strong className="sm:text-xl lg:text-xl">My Role:</strong>{" "}
                  UX/UI Designer & Web develper
                </h4>
                <h4 className="my-2 sm:text-xl lg:text-xl">
                  <strong className="sm:text-md lg:text-xl">
                    Project Duration:
                  </strong>{" "}
                  3 months
                </h4>
                <h4 className="my-2 sm:text-xl lg:text-xl">
                  <strong className="sm:text-md lg:text-xl">Tools Used:</strong>{" "}
                  Figma, VeteReact, Tailwindcss
                </h4>
              </div>
            </div>
          </div>

          {/* About section */}
          <section id="about" className="my-40">
            <h1 className="relative mt-6 flex flex-row text-4xl font-bold items-center justify-center">
              About The Project
            </h1>
            <p className="relative text-black dark:text-white-200 p-8 font-semibold flex text-center items-center justify-center">
              Improve Ullis Fitness och Kroppsvård by presenting their services
              (personal training, massage, and cupping), to attract potential
              clients, and enable easy booking of services.
            </p>
            <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-4">
              <div className="flex flex-col justify-center w-full">
                <h4 className="relative text-black dark:text-white-200 my-2 flex flex-row text-xl font-semibold">
                  GET START
                </h4>
                <h2 className="relative my-2 flex flex-row text-3xl font-bold">
                  Project's Overview
                </h2>
                <p className="text-sm leading-[1.6] my-2 text-black dark:text-white-200 font-normal">
                  Ullis Fitness & Kroppsvård (Ullis Fitness and Body Care) is a
                  Swedish company run by Ullis, offering a range of services
                  focused on physical and mental well-being.
                </p>
                <p className="text-sm leading-[1.6] my-2 text-black dark:text-white-200 font-normal">
                  These services primarily include massage therapy (various
                  types), personal training, and potentially health
                  coaching/advice. The focus is on a holistic approach to
                  health.
                </p>
              </div>
              <div className="flex justify-center items-center mt-16 sm:mt-8">
                <img
                  src="/p4.png"
                  alt="travelbuddy mockup"
                  className="w-full sm:w-auto sm:h-auto max-w-[400px] mx-auto"
                />
              </div>
            </div>
          </section>

          {/* Problems & Solutions */}
          <section id="problems" className="my-40">
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center w-full text-black dark:text-white">
              Problems VS Solutions
            </h1>
            <div className="w-full py-10">
              <HoverEffect
                items={project4Items.problemsandsolutions.map((item) => ({
                  title: item.title,
                  des: item.des.flat(), // Flatten the des array
                  link: "", // Provide an empty string if required
                }))}
              />{" "}
            </div>
          </section>

          {/* Challenge */}
          <section id="Challenge" className="my-40">
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center w-full text-black dark:text-white">
              Understanding the Users
            </h1>
            <p className="relative  text-black dark:text-white-200 mt-6 py-4 flex text-start items-center justify-center">
              As a beginner web developer, I started with creating a
              professional and cohesive user experience. After that, tackle the
              navigation improvements to ensure users don't get lost and can
              easily find what they need. To testing the booking system for
              usability improvements to ensuring the flow is as smooth as
              possible for users to make appointments.
            </p>

            <div className="my-8">
              <h1 className="relative text-black dark:text-white flex flex-row text-2xl font-bold text-start mt-6">
                The Challenge
              </h1>
              <div className="relative py-4">
                <ul className="py-4 items-center justify-center md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-6 grid">
                  {" "}
                  {/* This is the important part! */}
                  {project4Items.challenges.map((challenge, index) => (
                    <TextCard area={""} id={index} key={index} {...challenge} />
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Design Process*/}
          <section id="Designprocess" className="my-40">
            <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 w-full h-full py-4 items-center justify-between gap-4">
              <div className="flex flex-col justify-start items-start w-full sm:w-auto sm:px-4">
                <h1 className="relative text-black dark:text-white flex flex-row text-4xl mt-8 font-bold text-start">
                  Design process
                </h1>
                <p className="relative text-black dark:text-white-200 py-4 flex text-start">
                  Our design process followed a user-centered approach,
                  iterating based on user feedback and usability testing.
                </p>
              </div>

              <div className="flex justify-center items-center w-full h-full mx-auto">
                <img
                  src="/FemTask/Lo-fil.png"
                  alt="lofil"
                  className="w-full sm:w-auto sm:h-auto max-w-[500px] mx-auto"
                />
              </div>
            </div>
          </section>

          {/* Accessibility Considerations */}
          <section id="Accessibility" className="my-40">
            <h1 className="relative text-black dark:text-white text-4xl font-bold mt-4 py-4 px-8 flex text-center items-center justify-center">
              Accessibility considerations
            </h1>
            <p className="relative text-black dark:text-white-200 mt-4 py-4 px-8 flex text-start items-center justify-center">
              Ensuring accessibility was a core priority throughout the design
              process. Here's how we addressed key accessibility guidelines:
            </p>
            <div className="w-full py-8 items-center justify-center md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-6 grid">
              {accessibilityconsiderations.map(
                (accessibilityconsideration, index) => (
                  <RoleFeaturesSection
                    key={accessibilityconsideration.title}
                    {...accessibilityconsideration}
                    index={index}
                  />
                )
              )}
            </div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 xs:grid-cols-1 w-full h-full py-4 items-center justify-between gap-6">
              <div className="flex justify-center items-center w-full h-full mx-auto">
                <img
                  src="/FemTask/Icons.png"
                  alt="Icons"
                  className="w-full h-full mx-auto"
                />
              </div>
              <div className="flex justify-center items-center w-full h-full mx-auto">
                <img
                  src="/FemTask/Typography.png"
                  alt="Typography"
                  className="w-full h-full mx-auto"
                />
              </div>
              <div className="flex justify-center items-center w-full h-full mx-auto">
                <img
                  src="/FemTask/Colors.png"
                  alt="Colors"
                  className="w-full h-full mx-auto"
                />
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section id="Keyfeatures" className="my-40">
            <h1 className="relative text-black dark:text-white text-4xl font-bold mt-4 py-4 px-8 flex text-center items-center justify-center">
              Key Features
            </h1>
            <div className="w-full py-8 items-center justify-center md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-6 grid">
              {project4Items.KeyFeatures.map((keyFeature, index) => (
                <RoleFeaturesSection
                  key={keyFeature.title}
                  {...keyFeature}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* Measuring success */}
          <section id="MeasuringSuccess" className="my-40">
            <h1 className="relative text-black dark:text-white text-4xl font-bold mt-4 py-4 px-8 flex text-center items-center justify-center">
              Measuring success
            </h1>
            <p className="relative text-black dark:text-white-200 py-6 flex text-start items-center justify-center">
              The success of FamTask will be measured by the following KPIs:
            </p>
            <div className="mx-auto gap-8 md:px-6 sm:px-2">
              <div className="grid md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-8 list-none">
                {project3Items.measuringsuccess.map(
                  (measuringsuccess, index) => (
                    <TextCard
                      id={0}
                      area={""}
                      key={index}
                      {...measuringsuccess}
                    />
                  )
                )}
              </div>
            </div>
          </section>

          {/* Outcomes & Results */}
          <section id="Results" className="my-40">
            <div>
              <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center  text-black dark:text-white">
                Outcomes & Results
              </h1>
              <div className="flex flex-col justify-center items-start w-full sm:w-auto mt-8 px-2 gap-2">
                <p className="text-md leading-[1.6] text-black dark:text-white-200 font-normal mx-6">
                  The new website is a vast improvement over the old one. It's
                  more user-friendly, and functional. By addressing the "Less
                  Good" made the website be further enhanced to provide an even
                  better experience for visitors and potential clients.
                </p>
                <p className="text-xl leading-[1.6] text-black dark:text-white-200 font-normal mx-6">
                  The key drivers for the changes were likely:
                </p>
              </div>
              <div className="relative h-full w-full py-2 mt-4 rounded-xl border-0.75">
                {/* Glowing effect component */}
                <GlowingEffect
                  blur={0}
                  borderWidth={3}
                  spread={80}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="relative m-10">
                  <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-8 list-none">
                    {" "}
                    {project4Items.OutcomesandResults.map(
                      (
                        outcomesandResults: {
                          title: string;
                          description: string;
                        },
                        index: number
                      ) => (
                        <TextCard
                          key={index}
                          id={index}
                          area=""
                          title={outcomesandResults.title}
                          description={outcomesandResults.description}
                        />
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <h1 className="relative text-black dark:text-white flex flex-row text-2xl font-bold text-start mt-16 mx-6">
              Feedback
            </h1>
            <div className="grid w-full h-full items-center justify-center mt-8 gap-4">
              <div className="relative h-full w-full py-2 mt-4 rounded-xl border-0.75">
                {/* Glowing effect component */}
                <GlowingEffect
                  blur={0}
                  borderWidth={3}
                  spread={80}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="p-4">
                  <p className="text-xl leading-[1.6] m-4 text-black dark:text-white-200 font-normal">
                    "The styling of changes is well-executed. It demonstrates a
                    good understanding of design principles and best practices
                    for web development.
                  </p>
                  <p className="text-xl leading-[1.6] m-4 text-black dark:text-white-200 font-normal">
                    The use of color, typography, and spacing all contribute to
                    a positive user experience. The website presents a clean,
                    modern, and professional image, which is essential for
                    building trust with potential clients."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Lessons Learned */}
          <section id="Lessonslearned" className="my-40">
            <h1 className="relative text-black dark:text-white text-4xl font-bold mt-4 p-8 flex text-center items-center justify-center">
              Lessons learned
            </h1>
            <div className="mx-auto gap-8 md:px-6 sm:px-2">
              <div className="grid lg:grid-cols-2  md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-6 list-none">
                {project4Items.lessonslearneds.map((lessonslearneds, index) => (
                  <TextCard id={index} key={index} {...lessonslearneds} />
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center sm:w-auto mt-8 sm:mt-4 w-full p-4">
              <img
                src="/p4.png"
                alt="Femtask-mockup"
                className="w-full sm:w-auto sm:h-auto mx-auto"
              />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
