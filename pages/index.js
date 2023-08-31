// next image
import Image from "next/image";

//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className=" bg-primary/60 h-full">
      {/* {text} */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto ">
          {/* {title} */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Weaving Designs <br />
            Into <span className="text-accent">Interactive Wonders </span>
          </motion.h1>
          {/* {subtitle} */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Hey there! I'm Dayo. I dipped my toes into the vast ocean of
            programming back in 2019, but 2022? Ah, that's when I truly dove
            headfirst into the thrilling waves of Web development. From
            unraveling the web's mysteries to weaving its very threads, I've
            been on a whirlwind adventure of learning. Now, I'm armed with a
            quiver full of knowledge and an itch to craft digital masterpieces.
            Ready to collaborate? Let's turn your visions into vibrant virtual
            realities!
          </motion.p>
          {/* {btn} */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* {image} */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* {bg Img} */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* {particles} */}
        <ParticlesContainer />
        {/* {avatar img} */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] "
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
