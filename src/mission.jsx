import React, { useState, useEffect } from 'react';
import img1 from './assets/kid.webp';
import img2 from './assets/kid2.webp';
import { motion } from 'framer-motion';
import TrueFocus from './trueFocus';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Mission() {
  const [img1Loaded, setImg1Loaded] = useState(false);
  const [img2Loaded, setImg2Loaded] = useState(false);

  useEffect(() => {
    const img1Element = new Image();
    img1Element.onload = () => setImg1Loaded(true);
    img1Element.src = img1;

    const img2Element = new Image();
    img2Element.onload = () => setImg2Loaded(true);
    img2Element.src = img2;
  }, [img1, img2]);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 bg-slate-100 p-5" id="mv">
        <p className="desc font-bold text-3xl">
          <p className="desc text-center text-md ">
            <TrueFocus
              sentence="Our Mission."
              manualMode={false}
              blurAmount={2}
              borderColor="rgb(67, 67, 253)"
              animationDuration={1}
              pauseBetweenAnimations={1}
            />
          </p>
          <div className="flex flex-row">
            <motion.div
              initial={{ width: "10%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="horizontal-line"
            ></motion.div>
            <div className="circle"></div>
          </div>
          <p className="text-xs">Remaya's mission and vision.</p>
        </p>
        <div className="flex flex-row justify-center items-center mission" id="mission">
          <div className="flex-flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {!img1Loaded ? (
                <Skeleton width={300} height={200} />
              ) : (
                <img src={img1} alt="kid studying" className="mission-img" />
              )}
            </motion.div>
            <div className="flex flex-col justify-center items-center">
              <div className="vertical-line2"></div>
              <div className="circle"></div>
            </div>
            <br />
            <p className="desc text-start">
              Our Organizations <span className="text-lg font-bold text-blue-400">Mission</span> is dedicated to fostering education, promoting gender equality, empowering individuals, raising awareness about mental health and climate change, eradicating poverty, fostering economic empowerment, and nurturing a culture of care, support, and human dignity within communities.
            </p>
          </div>

          <div className="flex-flex-col justify-center items-center">
            <p className="desc text-start">
              We envision a world where every individual, regardless of their circumstances, has the opportunity to thrive and achieve their full potential. Our <span className="text-lg font-bold text-blue-400">Vision</span> is to inspire smiles, ignite hope, and foster positive change, making the world a brighter and more compassionate place for generations to come.
            </p>
            <div className="flex flex-col justify-center items-center">
              <div className="circle"></div>
              <div className="vertical-line2"></div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                {!img2Loaded ? (
                  <Skeleton width={300} height={200} />
                ) : (
                  <img src={img2} alt="kid studying" className="mission-img" />
                )}
              </motion.div>
              <div className="vertical-line2"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="desc">
            Our mission is to foster education, promote equality, empower individuals, and raise awareness about mental health, climate change, and poverty. We envision a world where everyone thrives, inspiring smiles, hope, and positive change for a brighter, compassionate future.
          </p>
        </div>
      </div>
    </>
  );
}