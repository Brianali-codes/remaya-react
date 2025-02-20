import HI from './assets/hero-img.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SplitText from './splitText';



export default function Page(){
    return(
        <>
        <br /><br /><br />
        <div id="MAIN1">
            <div id="LP">

                <div className="bg-transparent flex flex-row justify-center items-center " id='hero-section'>
                   
                        <motion.div
                         initial={{ opacity: 0, scale: 0.9 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 1 }} // Adjust the duration as needed
                         viewport={{ once: true }} // Ensures it triggers only once when in view
                        >
                            <img src={HI} alt="hero-img" className='Home-img'/>
                        </motion.div>
                        

                    <div className='text-center w-3/6 p-5 home-desc'>
                       
                        <SplitText
                        text="REMAYA.org"
                         className='text-5xl desc font-bold title'
                        delay={100}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                       
                        />

                        
                        <br />
                        <br />
                        <motion.p
                        initial={{ opacity: 0, y: 50 }}  // Start from below the screen
                        whileInView={{ opacity: 1, y: 0 }} // Move to original position
                        transition={{ duration: 1, delay: 0.6 }} // Small delay before this button
                        viewport={{ once: true }} // Ensures it triggers only once when in view
                         className='desc text-2xl home-desc'
                        >Being beneficiaries of AVSI and having experienced help from scratch while attending <span className='text-blue-400'> Cardinal Otunga School, </span>Lamas and Reshida was inspired to dive deeper into practical philanthropy and start REMAYA Org
                        </motion.p>
                        
                        <br />
                        <Link to="/support">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}  // Start from below the screen
                            whileInView={{ opacity: 1, y: 0 }} // Move to original position
                            transition={{ duration: 1, delay: 0.8 }} // Small delay before this button
                            viewport={{ once: true }} // Ensures it triggers only once when in view  
                        >
                          <button className='support-btn'>Support the Work | <FontAwesomeIcon icon={faArrowRight} /></button>
                        </motion.div>
                        </Link>
                    </div>

                </div>
                   


            </div>    
        </div>
        </>
    )
}