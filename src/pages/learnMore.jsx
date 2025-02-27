import Nav2 from "../nav2"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import CW from '../assets/charity2.jpg';
import { useState } from "react";
import { useEffect } from "react";
import TrueFocus from "../trueFocus";
import { motion } from "framer-motion";
import SK1 from '../assets/kid.webp'
import SK2 from '../assets/kid2.webp'
import SK3 from '../assets/kibera.jpg'
import Contacts from "../contacts";












export default function LearnMore(){

    const [cwLoaded, setCwLoaded] = useState(false);

    useEffect(() => {
      const cwElement = new Image();
      cwElement.onload = () => setCwLoaded(true);
      cwElement.src = CW;
    }, [CW]);


    return(
        <>
        <Nav2/>
            <div className="flex flex-col justify-center items-center h-fit bg-white p-5" id="Blog">
                    <p className="desc font-bold text-3xl">
                    <p className="desc text-center text-md ">
                        <TrueFocus
                        sentence="The Blog."
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
                    <p className="text-xs">Remaya's Blogs and announcements.</p>
                    </p>
                    <br />
                    <div className="flex flex-col">
                    <p className="desc text-4xl text-start font-bold">The Power of Giving: Changing Lives One Act at a Time.</p>
                    <p className="desc">26 FEB 2025 <span className="text-blue-500">BY: REMAYA.org</span></p>
                    <div className="flex flex-row gap-2">
                        <FontAwesomeIcon icon={faXTwitter} className="text-2xl text-black hover:cursor-pointer" />
                        <a href="https://m.facebook.com/people/Remaya-ORG/100064591067526/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} className="text-black text-2xl hover:cursor-pointer" />
                        </a>
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl text-black hover:cursor-pointer" />
                    </div>
                    <br />
                    <p>In a world where challenges often seem overwhelming, the power of giving remains a beacon of hope. Whether it’s offering a warm meal, providing access to education, or simply spending time with those in need, every act of kindness creates a ripple effect that extends far beyond what we can see.</p>
                    {!cwLoaded ? (
                        <Skeleton width="100%" height={300} style={{ borderRadius: '8px', marginTop: '10px' }} />
                    ) : (
                        <img src={CW} alt="charity image" style={{ borderRadius: '8px', marginTop: '10px' }} />
                    )}
                    <br />
                    <p className="text-xl font-bold">What we do.</p>
                    <p className="text-start desc ">
                        At Remaya, we believe that change starts with small, meaningful actions. When you donate, volunteer, or advocate for a cause, you become part of a movement dedicated to making the world a better place. Every contribution, no matter how small, has the power to transform lives and inspire others to do the same.
                    </p>
                    <p className="text-xl font-bold">Our testimonies.</p>
                    <p className="text-start desc ">
                        Imagine a child receiving their first schoolbook, a homeless person finding shelter for the night, or an elderly individual feeling valued and cared for—these are the moments that define our mission. Through collective efforts, we can break cycles of poverty, empower communities, and bring hope to those who need it most. Join us today in making a difference. Together, we can turn compassion into action and create a brighter future for all. How You Can Help you ask? well some ways include : Donating: Your financial support enables us to provide food, education, and healthcare to those in need. Volunteering : Give your time and skills to support our programs and directly impact lives. Spreading the Word: Share our mission with friends and family to raise awareness and encourage more people to get involved. Your kindness has the power to change lives. Be a part of the change today!
                    </p>
                    <br /><br />
                    <p className="desc text-center font-bold text-lg">More Blogs.</p>
                    <div className='flex flex-row w-full p-3 gap-5'>
                        <div className="flex flex-col justify-start w-3/6">
                            <img src={SK2} alt="another image" className="h-6/6 w-6/6" />
                            <p className="desc font-bold text-md">The importance of giving.</p>
                            <p className="desc text-xs">GIVING INCREASES OUR SOCIAL CONNECTEDNESS
                            It makes sense that when we give to others, they feel closer to us. What we might not realize is that giving to others makes us feel closer to them, too.</p>
                            <p className="desc text-xs"></p>
                            <p className="desc text-xs">12 FEB 2025: Remaya.org</p>
                            <button className="text-start">Read Blog</button>
                            

                        </div>
                        <div className="flex flex-col justify-start w-3/6">
                            <img src={SK3} alt="another image" className="h-6/6 w-6/6" />
                            <p className="desc font-bold text-md">Why Charity Matters.</p>
                            <p className="desc text-xs">Explore the crucial role of charity in society, how collective giving helps create a more compassionate and equitable world and how the little we give for charity impacts someones life for the better.</p>
                            <p className="desc text-xs"></p>
                            <p className="desc text-xs">17 FEB 2025: Remaya.org</p>
                            <button className="text-start">Read Blog</button>
                            

                        </div>
                        <div className="flex flex-col justify-start w-3/6">
                            <img src={SK1} alt="another image" className="h-6/6 w-6/6" />
                            <p className="desc font-bold text-md">Empowering the Future:</p>
                            <p className="desc text-xs">Education is a key to breaking the cycle of poverty. Learn how supporting underprivileged children's education leads to long-term societal change and shifts in the social classes as we know them.</p>
                            <p className="desc text-xs"></p>
                            <p className="desc text-xs">25 FEB 2025: Remaya.org</p>
                            <button className="text-start">Read Blog</button>
                            

                        </div>

                        

                    </div>
                    </div>
                </div>

                <Contacts/>
        
        </>

    )


}
