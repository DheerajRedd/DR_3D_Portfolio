import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { MediaData, services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// Use import { Tilt } from 'react-tilt' ; instead of import Tilt from 'react-tilt';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text=[17px] max-w-3xl leading=[30px]"
      >
        Graduate student at Northeastern's Software Engineering Systems,With a
        strong background in Computer Science , I possess a wide range of skills
        in software development and Root Cause Analysis. I am committed to
        delivering high-quality results and always strive for excellence. I find
        great satisfaction in challenging myself to find innovative solutions
        and constantly expanding my knowledge and skill set.Overall, I am a
        driven individual who is dedicated to making a difference through
        technology. I am excited about the opportunities that lie ahead in my
        career, and I look forward to leveraging my expertise to create
        impactful software solutions.
      </motion.p>
      <div className="flex space-x-2">
        {MediaData.map((item, index) => {
          return (
            <div key={index}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-10 w-10 m-2"
                />
              </a>
            </div>
          );
        })}
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
