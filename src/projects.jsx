import React, { useState, useEffect } from 'react';
import pic1 from './assets/image2.webp';
import pic2 from './assets/image4.webp';
import pic3 from './assets/image7.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TrueFocus from './trueFocus';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Projects() {
  const [pic1Loaded, setPic1Loaded] = useState(false);
  const [pic2Loaded, setPic2Loaded] = useState(false);
  const [pic3Loaded, setPic3Loaded] = useState(false);

  useEffect(() => {
    const pic1Element = new Image();
    pic1Element.onload = () => setPic1Loaded(true);
    pic1Element.src = pic1;

    const pic2Element = new Image();
    pic2Element.onload = () => setPic2Loaded(true);
    pic2Element.src = pic2;

    const pic3Element = new Image();
    pic3Element.onload = () => setPic3Loaded(true);
    pic3Element.src = pic3;
  }, [pic1, pic2, pic3]);

  return (
    <>
      <div className="project-main" id="projects">
        <br /><br />
        <p className="desc font-bold text-3xl">
          <p className="desc text-center text-md ">
            <TrueFocus
              sentence="Our Projects."
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
          <p className="text-xs">Remayas projects over the years.</p>
        </p>
        <p className="desc text-lg">REMAYA Org is dedicated to fostering positive change in various sectors. Their projects include ensuring access to quality education for underprivileged children by supporting them throughout their educational journey. They promote gender equality and equity by advocating for equal opportunities across all demographics. Additionally, REMAYA extends care and support to vulnerable populations through community outreach initiatives such as visiting children's homes, engaging with street communities, and providing companionship to the elderly. Their holistic approach aims to uplift and empower individuals and communities in need.</p>
        <br />
        <div className="project-container">
          <div className="cards">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {!pic1Loaded ? (
                <Skeleton width={300} height={200} className="rounded-3xl" />
              ) : (
                <img src={pic1} alt="Education Illustration" className="rounded-3xl project-img" />
              )}
            </motion.div>
            <br />
            <p className="desc font-bold text-2xl">Education.</p>
            <p className="desc">Ensuring access to quality education for underprivileged children, supporting them through their entire educational journey and helping them discover their desires in life.</p>
          </div>
          <div className="cards">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {!pic2Loaded ? (
                <Skeleton width={300} height={200} className="rounded-3xl" />
              ) : (
                <img src={pic2} alt="Education Illustration" className="rounded-3xl project-img" />
              )}
            </motion.div>
            <br />
            <p className="desc font-bold text-2xl">Equality and Equity.</p>
            <p className="desc">Advocating for equal opportunities across all genders as well as implementing reconaicance strategies for victims of discrimination across all social groups.</p>
          </div>
          <div className="cards">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {!pic3Loaded ? (
                <Skeleton width={300} height={200} className="rounded-3xl" />
              ) : (
                <img src={pic3} alt="Education Illustration" className="rounded-3xl project-img" />
              )}
            </motion.div>
            <br />
            <p className="desc font-bold text-2xl">Community Outreach.</p>
            <p className="desc">Extending care and support to vulnerable populations through visits to children's homes, engagement with street communities, and companionship for the elderly.</p>
          </div>
        </div>
        <br />
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-row justify-center ">
            <div className="circle"></div>
            <div className="horizontal-line" id="line2"></div>
          </div>
          <Link to="/support"><button className="support-btn">Contribute | <FontAwesomeIcon icon={faArrowRight} /></button></Link>
        </div>
      </div>
    </>
  );
}