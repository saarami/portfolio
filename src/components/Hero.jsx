import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* purple circle&line */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        {/* introduce text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Saar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a full-stack developer <br className='sm:block hidden' />
            building real-world software and web applications.   
          </p>
        </div>
      </div>
 
      <ComputersCanvas />

      {/* Rotate hint - above xs:bottom-[505px] bottom-[220px]
    <div className="absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center z-20">
      <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 hover:scale-105 transition-all  rotate-90 '>
        <motion.div
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="mb-1 flex items-center justify-center"
        >
          <span style={{ display: "inline-block", transform: "rotate(-90deg)" }}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-secondary"
            >
              <path d="M3 12h18" />
              <path d="M7 8l-4 4 4 4" />
              <path d="M17 8l4 4-4 4" />
            </svg>
          </span>
        </motion.div>
      </div>
    </div> */}

      {/* Moving button Up/Down */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 hover:scale-105 transition-all'>

            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1 '
            />
          </div>
        </a>
      </div>
    </section> 
  );
};

export default Hero;