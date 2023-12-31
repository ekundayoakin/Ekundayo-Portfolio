import React, { useState } from "react";
//components
import Avatar from "../../components/Avatar";
import Circle from "../../components/Circles";
// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counter
import CountUp from "react-countup";

//icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGithub,
  FaShopify,
  FaMailchimp,
  FaFigma,
} from "react-icons/fa";
import { SiNextdotjs, SiFramer, SiCpanel } from "react-icons/si";

// data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key={0} />,
          <FaCss3 key={1} />,
          <FaJs key={2} />,
          <FaReact key={3} />,
          <SiNextdotjs key={4} />,
          <SiFramer key={5} />,
        ],
      },
      {
        title: "Misc",
        icons: [
          <FaFigma key={0} />,
          <SiCpanel key={1} />,
          <FaMailchimp key={2} />,
          <FaGithub key={3} />,
          <FaShopify key={4} />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Programming Instructor - CodeTree Nigeria",
        stage: "September 2019 - Present",
      },
      {
        title: "Freelance Frontend Developer - Self Employed",
        stage: "Feb 2023 - August 2023",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circle />
      {/* {avatar} */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className=" hidden xl:flex absolute bottom-0 -left-[370px] "
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* {text} */}
        <div className="flex-1 flex flex-col justify-center ">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            <span className=" text-accent ">Stories</span> inspires the soul;
            <span className="text-accent"> design </span>
            brings those dreams to life.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 "
          >
            Stepping into the realm of web development, each project I&apos;ve
            undertaken reflects my growth and enthusiasm. Take a look at my
            early adventures in code and the paths I&apos;ve begun to pave.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 "
          >
            <div className=" flex flex-1 xl:gap-x-6 ">
              {/* {experience} */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={11} duration={5} /> +
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Months of experience
                </div>
              </div>
              {/* {projects} */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Finished Projects
                </div>
              </div>
              {/* {clients} */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Clients
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* {info} */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" flex flex-col w-full xl:max-w-[48%] h-[480px] "
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300 "
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-accent after:absolute after:-bottom-1 after:left-0 `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* {title} */}
                  <div className="fontlight mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* {icons} */}
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
