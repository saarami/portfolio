import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const isMobile = window.innerWidth < 640;

  const cardContent = (
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div className="bg-tertiary rounded-[20px] py-5 px-6 sm:px-12 min-h-[220px] sm:min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  );

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="xs:w-[250px] w-full"
    >
      {isMobile ? (
        cardContent
      ) : (
        <Tilt
          className="w-full"
          options={{
            max: 25,
            scale: 1.03,
            speed: 300,
          }}
        >
          {cardContent}
        </Tilt>
      )}
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a junior full-stack software developer who enjoys learning and building things. 
        I like exploring new technologies, understanding how systems actually work behind the scenes,  
        and turning ideas into real, working applications.
        I'm a fast learner and enjoy going deep into technical topics, 
        trying different approaches, and improving my skills by building real projects.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
