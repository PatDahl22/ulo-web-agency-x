"use client";

import { navItems, project2Items, ProjectnavItems } from "@/data";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { useEffect, useState } from "react";
import { TypewriterEffectSmooth as TypewriterEffect } from "@/components/ui/typewriter-effect";
import { RoleFeaturesSection } from "@/components/ui/RoleFeaturesSection";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ProjectNav } from "@/components/ui/ProjectNav";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import MagicButton from "@/components/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Page = () => {
  const [showSecondEffect, setShowSecondEffect] = useState(false); 

  const words1 = [
    {
      text: "Shoes ",
      className: "text-6xl text-blue-500 dark:text-blue-500",
    },
    {
      text: "& ",
      className: "text-6xl text-blue-500 dark:text-blue-500",
    },

    {
      text: "Stitches",
      className: "text-6xl text-blue-500 dark:text-blue-500",
    },
  ];
  const words3 = [
    {
      text: "E-Commerce ",
      className: "text-2xl ",
    },
    {
      text: " web",
      className: "text-2xl ",
    },
    {
      text: " application",
      className: "text-2xl ",
    },
    {
      text: " using",
      className: "text-2xl ",
    },
    {
      text: " Vite React",
      className: "text-2xl ",
    },
  ];

  useEffect(() => {
    // Assuming each word takes 1 second to type, adjust the timeout accordingly
    const timeout = words1.length * 1000;
    const timer = setTimeout(() => setShowSecondEffect(true), timeout);
    return () => clearTimeout(timer);
  }, []);
  

  const myroles = project2Items.myroles.map((item: { title: any; description: any; icon: any; className: any; }) => ({
    title: item.title,
    description: item.description,
    icon: item.icon,
    className: item.className 
  }));

   const project2Nav = ProjectnavItems.find(item => item.project2nav)?.project2nav;
  
  if (!project2Nav) {
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
      <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
        <div className="relative flex flex-1 flex-col justify-between gap-3">
          <div className="w-fit rounded-lg border border-gray-600 p-2">
            {icon && <img src={icon} alt={title} className="mb-4 w-16 h-16" />}
            <ul className="space-y-3 text-start">
              <span className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans md:text-2xl/[1.875rem] text-black dark:text-white">
                {title}
              </span>
              {Array.isArray(description) && description.length > 0 && (
                <ul className="px-6 md:px-2 text-start text-base text-black dark:text-white-100">
                  {description.map((desc, index) => (
                    <li className="py-2 list-disc" key={index}>
                      {desc}
                    </li>
                  ))}
                </ul>
              )}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full h-full px-20">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <ProjectNav navItems={project2Nav} />
        <div className="h-full w-full">
          <StarsBackground className="absolute inset-0 z-100" />
          <ShootingStars />
          {/* BackgroundLines fills the container */}
          <div className="relative xs:pt-40 w-full h-[50vh] flex justify-center items-center my-10">
            <div className="grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-full h-full items-center justify-center gap-4 sm:mt-20">
              <div className="flex justify-center items-center">
                <img
                  src="/WebShop/Ws-bg.png"
                  alt="travelbuddy mockup"
                  className="max-h-[500px] md:max-h-[300px] mx-auto"
                />
              </div>
              <div className="flex flex-col justify-center w-full">
                <div className="flex flex-col justify-center w-full mt-4">
                  {" "}
                  <TypewriterEffect words={words1} />
                  {showSecondEffect && <TypewriterEffect words={words3} />}
                </div>
                <h4 className="my-2 sm:text-xl lg:text-xl">
                  <strong className="sm:text-md lg:text-xl">
                    Project Duration:
                  </strong>{" "}
                  5 Weeks
                </h4>
                <h4 className="my-2 sm:text-xl lg:text-xl">
                  <strong className="sm:text-md lg:text-xl">Tools Used:</strong>{" "}
                  Figma, FigJam, Slack, ViteReact, Tailwindcss
                </h4>
              </div>
            </div>
          </div>

          {/* About section */}
          <section id="about" className="my-40 w-full">
            <h1 className="relative mt-6 flex flex-row text-4xl font-bold items-center justify-center">
              About The Project
            </h1>
            <p className="relative text-black dark:text-white-200 py-4 font-semibold flex text-center items-center justify-center">
              'Shoes & Stitches' is a collaborative e-commerce project
            </p>
            <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-4">
              <div className="flex flex-col justify-center w-full sm:w-auto mt-8 gap-2">
                <h4 className="relative text-black dark:text-white-200 my-2 flex flex-row text-xl font-semibold">
                  GET START
                </h4>
                <h2 className="relative my-2 flex flex-row text-3xl font-bold">
                  Project's Overview
                </h2>
                <p className="text-md leading-[1.6] text-black dark:text-white-200 py-2 font-normal">
                  "Shoes & Stitches" is a responsive e-commerce web application
                  developed as a group project, focusing on providing a
                  realistic online shopping experience for clothing and shoes.
                  It was built using React, Vite, and React Router, and
                  emphasizes a clean design and functional shopping cart
                  implementation.
                </p>
                <p className="text-md leading-[1.6] text-black dark:text-white-200 font-normal">
                  The project followed an agile methodology with a focus on
                  teamwork and code quality. The site is published on Netlify.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-8 mx-auto">
                <div className="flex justify-center items-center sm:w-auto">
                  <img
                    src="/WebShop/Shoes&stiches1.jpg"
                    alt="travelbuddy mockup"
                    className="w-full h-[400px] mx-auto rounded-xl border-0.75"
                  />
                </div>
                <div className="flex justify-center items-center sm:w-auto">
                  <img
                    src="/WebShop/Shoes&stiches2.jpg"
                    alt="travelbuddy mockup"
                    className="w-full h-[400px] mx-auto rounded-xl border-0.75"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="my-40 w-full">
            <h1 className="relative my-6 flex flex-row text-4xl font-bold items-center justify-center">
              Our plan
            </h1>

            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-8 mx-auto">
              <div className="flex justify-center items-center sm:w-auto">
                <img
                  src="/WebShop/Ws-roadmap.jpg"
                  alt="travelbuddy mockup"
                  className="w-full h-[400px] mx-auto rounded-xl border-0.75"
                />
              </div>
              <div className="flex justify-center items-center sm:w-auto">
                <img
                  src="/WebShop/Ws-timeline.jpg"
                  alt="travelbuddy mockup"
                  className="w-full h-[400px] mx-auto rounded-xl border-0.75"
                />
              </div>
            </div>
          </section>

          {/* My role section */}
          <section id="myrole" className="my-40">
            <h1 className="relative mt-6 flex flex-row text-4xl font-bold items-center justify-center text-black dark:text-white">
              My Role
            </h1>
            <p className="relative text-black dark:text-white-200 mt-6 py-4 flex text-center items-center justify-center">
              As a UI/UX designer and frontend developers, I make sure that our
              designs are all funtions are well received by users.
            </p>
            <div className="w-full py-10 items-center justify-center md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-6 grid">
              {myroles.map((role, index) => (
                <RoleFeaturesSection key={role.title} {...role} index={index} />
              ))}
            </div>
          </section>

          {/* Project Goals*/}
          <section id="goals" className="my-40">
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center w-full text-black dark:text-white">
              Project Goals
            </h1>
            <div className="mx-auto gap-6 my-4">
              <HoverEffect
                items={project2Items.goals.map((item) => ({
                  title: item.title,
                  des: item.des, // Ensure des is an array of strings
                  link: "", // Provide an empty string if required
                }))}
              />{" "}
            </div>
          </section>

          {/* Design Process */}
          <section id="designProcess" className="my-40">
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center  text-black dark:text-white">
              Design Process
            </h1>
            <div className="flex flex-col justify-center items-start w-full sm:w-auto mt-8 gap-3">
              <p className="text-md leading-[1.6] text-black dark:text-white-200 font-normal">
                During the early stages of the "Shoes & Stitches" project, I
                immersed myself in the design process, sketching out both lo-fi
                and hi-fi wireframes to bring our vision to life.
              </p>
              <p className="text-md leading-[1.6] text-black dark:text-white-200 font-normal">
                As the team navigated technical constraints and evolving
                requirements, I continually refined these designs, ensuring that
                our clean and modern aesthetic was not only visually appealing
                but also feasible from a development perspective.
              </p>
              <p className="text-md leading-[1.6] text-black dark:text-white-200 font-normal">
                This iterative process allowed our ideas to evolve naturally,
                merging creative ambition with practical application.
              </p>
            </div>
            <div className="relative my-10">
              <ul className="grid md:grid-cols-2 grid-rows-none sm:grid-cols-1 xs:grid-cols-2 gap-8 ">
                {" "}
                {project2Items.designProcess.map((designProcess, index) => (
                  <TextCard area={""} id={0} key={index} {...designProcess} />
                ))}
              </ul>
            </div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-8 mx-auto">
              <div className="flex justify-center items-center sm:w-auto gap-4">
                <div className="flex justify-center items-center sm:w-auto">
                  <img
                    src="/WebShop/Components.png"
                    alt="Components"
                    className="w-full h-[400px] mx-auto rounded-xl border-0.75"
                  />
                </div>
                <div className="flex justify-center items-center sm:w-auto">
                  <img
                    src="/WebShop/Styles-system.png"
                    alt="Styles-system"
                    className="w-full h-[400px] mx-auto rounded-xl border-0.75"
                  />
                </div>
              </div>
              <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-4 mx-auto">
                <div className="flex justify-center items-center sm:w-auto">
                  <img
                    src="/WebShop/lo-fil.png"
                    alt="low-fil"
                    className="w-full h-[400px] mx-auto rounded-xl border-0.75"
                  />
                </div>
                <div className="flex justify-center items-center sm:w-auto">
                  <img
                    src="/WebShop/hi-file.png"
                    alt="hi-fil"
                    className="w-full h-[400px] mx-auto rounded-xl border-0.75"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Development Process */}
          <section id="DevelopmentProcess" className="my-40">
            <h1 className="relative text-black dark:text-white flex flex-row text-4xl font-bold items-center justify-center">
              Development Process
            </h1>
            <div className="flex flex-col justify-center items-start w-full sm:w-auto mt-8 gap-3">
              <p className="text-md leading-[1.6] text-black dark:text-white-200 font-normal">
                My journey continued as I took ownership of the "About Us" page,
                a core component of our responsive e-commerce site. Working with
                React, I transformed our design concepts into a dynamic,
                interactive page, using Vite and React Router to enhance
                performance and streamline navigation.
              </p>
              <p className="text-md leading-[1.6] text-black dark:text-white-200 font-normal">
                This role not only sharpened my component development skills but
                also deepened my understanding of building user-centric features
                that resonate with visitors.
              </p>
            </div>
            <div className="relative my-10">
              <ul className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 grid-rows-none sm:grid-cols-1 xs:grid-cols-2 gap-8 ">
                {" "}
                {project2Items.DevelopmentProcess.map(
                  (DevelopmentProcess, index) => (
                    <TextCard
                      area={""}
                      id={0}
                      key={index}
                      {...DevelopmentProcess}
                    />
                  )
                )}
              </ul>
            </div>
            <h1 className="relative text-black dark:text-white flex flex-row text-2xl font-bold items-center justify-start py-4 px-2">
              Code examples
            </h1>
            <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-4 mx-auto">
              <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-4 mx-auto">
                <div className="flex justify-center items-center sm:w-auto">
                  <img
                    src="/WebShop/Autentisering.jpg"
                    alt="Autentisering"
                    className="w-full h-[400px] mx-auto rounded-xl border-0.75"
                  />
                </div>
                <div className="flex justify-center items-center sm:w-auto">
                  <img
                    src="/WebShop/Inloggning.jpg"
                    alt="Inloggning"
                    className="w-full h-[400px] mx-auto rounded-xl border-0.75"
                  />
                </div>
                <div className="flex justify-center items-center sm:w-auto">
                  <img
                    src="/WebShop/Handlings.jpg"
                    alt="Handlings"
                    className="w-full h-[400px] mx-auto rounded-xl border-0.75"
                  />
                </div>
                <div className="flex justify-center items-center sm:w-auto">
                  <img
                    src="/WebShop/View.jpg"
                    alt="View"
                    className="w-full h-[400px] mx-auto rounded-xl border-0.75"
                  />
                </div>
              </div>
              <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 w-full h-full items-center justify-center gap-4 mx-auto">
                <div className="flex justify-center items-center sm:w-auto">
                  <img
                    src="/WebShop/CreateAnOrder.jpg"
                    alt="CreateAnOrder"
                    className="w-full h-[400px] mx-auto rounded-xl border-0.75"
                  />
                </div>
                <div className="flex justify-center items-center sm:w-auto">
                  <img
                    src="/WebShop/APIcalls.jpg"
                    alt="APIcalls"
                    className="w-full h-[400px] mx-auto rounded-xl border-0.75"
                  />
                </div>
                <div className="flex justify-center items-center sm:w-auto">
                  <img
                    src="/WebShop/ProductDetail.jpg"
                    alt="ProductDetail"
                    className="w-full h-[400px] mx-auto rounded-xl border-0.75"
                  />
                </div>
                <div className="flex justify-center items-center sm:w-auto">
                  <img
                    src="/WebShop/ProductList.jpg"
                    alt="ProductList"
                    className="w-full h-[400px] mx-auto rounded-xl border-0.75"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 w-full h-full items-center justify-center gap-4 mx-auto my-8">
              <div className="flex items-center justify-center w-full h-full gap-10">
                <a
                  href="https://shoesnstiches.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MagicButton
                    title="Web-Link"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
                <a
                  href="https://github.com/Swifty-sketch/webshop.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MagicButton
                    title="GitHub-Link"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
              </div>
            </div>{" "}
          </section>

          {/* Challenges & Solutions */}
          <section id="Challenges" className="my-40">
            <h1 className="relative text-black dark:text-white flex flex-row text-4xl font-bold items-center justify-center">
              Challenges & Solutions
            </h1>
            <div className="flex flex-col justify-center items-start w-full sm:w-auto mt-8 px-2 gap-2">
              <p className="text-md leading-[1.6] text-black dark:text-white-200 font-normal">
                Collaboration was at the heart of our project. I actively
                engaged in code reviews and Git collaboration, where every line
                of code was scrutinized and improved through collective insight.
              </p>
              <p className="text-md leading-[1.6] text-black dark:text-white-200 font-normal">
                Participating in agile meetings, from daily stand-ups to sprint
                retrospectives, I learned the art of balancing individual
                contributions with the broader team goals. These interactions
                were instrumental in fostering a culture of open communication
                and continuous improvement.
              </p>
            </div>
            <h1 className="relative text-black dark:text-white flex flex-row text-2xl mt-8 font-bold items-center justify-start px-2">
              Challenges
            </h1>
            <div className="mx-auto gap-6">
              <HoverEffect
                items={project2Items.challenges.map((item) => ({
                  title: item.title,
                  des: [item.des], // Ensure des is an array of strings
                  link: "", // Provide an empty string if required
                }))}
              />{" "}
            </div>
            <h1 className="relative text-black dark:text-white flex flex-row text-2xl mt-8 font-bold items-center justify-start px-2">
              Solutions
            </h1>
            <div className="mx-auto gap-6">
              <HoverEffect
                items={project2Items.solutions.map((item) => ({
                  title: item.title,
                  des: [item.des], // Ensure des is an array of strings
                  link: "", // Provide an empty string if required
                }))}
              />{" "}
            </div>
          </section>

          {/* Outcomes & Results */}
          <section id="Results" className="my-40">
            <div>
              <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center  text-black dark:text-white">
                Outcomes & Results
              </h1>
              <div className="flex flex-col justify-center items-start w-full sm:w-auto mt-8 px-2 gap-2">
                <p className="text-md leading-[1.6] text-black dark:text-white-200 font-normal">
                  One of the most rewarding aspects of the project was learning
                  to tackle the challenge of aligning high design standards with
                  the realities of coding limitations.
                </p>
                <p className="text-md leading-[1.6] text-black dark:text-white-200 font-normal">
                  I found creative solutions that allowed us to maintain our
                  visual aspirations without compromising on functionality. This
                  delicate balance was achieved through constant both the design
                  and development to a seamless online shopping experience.
                </p>
              </div>
              <div className="relative h-full w-full py-2 mt-8 rounded-xl border-0.75">
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
                  <ul className="grid md:grid-cols-3 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-6">
                    {" "}
                    {/* This is the important part! */}
                    {project2Items.outcomesandResults.map(
                      (outcomesandResults, index) => (
                        <TextCard key={index} {...outcomesandResults} />
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Lessons Learned & Reflection */}
          <section id="Reflection" className="my-40">
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-center">
              Lessons Learned & Reflection
            </h1>
            <div className="flex flex-col justify-center items-start w-full sm:w-auto mt-8 px-2 gap-2">
              <p className="text-md leading-[1.6] text-black dark:text-white-200 font-normal">
                The agile framework we followed provided a structured yet
                flexible approach to managing tasks and adapting to change. This
                experience not only honed my skills in task management and
                communication but also underscored the importance of iterative
                development.
              </p>
              <p className="text-md leading-[1.6] text-black dark:text-white-200 font-normal">
                I emerged from the project with a richer understanding of agile
                practices, ready to embrace new challenges with confidence.
              </p>
            </div>
            <div className="relative h-full w-full mt-8 rounded-xl border-0.75">
              <div className="relative my-10">
                <ul className="grid md:grid-cols-3 grid-rows-none sm:grid-cols-1 xs:grid-cols-1 gap-6">
                  {" "}
                  {project2Items.LearnedandReflections.map(
                    (LearnedandReflections, index) => (
                      <TextCard key={index} {...LearnedandReflections} />
                    )
                  )}
                </ul>
              </div>
            </div>
            <h1 className="relative flex flex-row text-4xl font-bold items-center justify-start px-2">
              Overall
            </h1>
            <div className="relative h-full w-full mt-8 p-8 rounded-xl border-0.75">
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
              <div className="flex flex-col justify-center items-start w-full sm:w-auto px-2 gap-2">
                <p className="text-xl leading-[1.6] text-black dark:text-white-200 font-normal">
                  "Shoes & Stitches" was more than just a collaborative project;
                  it was a comprehensive learning journey. I deepened my
                  expertise in React, Vite, and Git, while also gaining
                  invaluable insights into agile development practices.
                </p>
                <p className="text-xl leading-[1.6] text-black dark:text-white-200 font-normal">
                  The experience has left me with a profound appreciation for
                  the balance between creative design and technical execution, a
                  lesson that will undoubtedly shape my future projects.
                </p>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default Page;
