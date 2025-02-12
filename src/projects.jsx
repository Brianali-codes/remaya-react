import pic1 from './assets/image2.webp'
import pic2 from './assets/image4.webp'
import pic3 from './assets/image7.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


export default function Projects(){
    return(
        <>
            <div className='project-main' id='projects'>
                <br /><br />
                <p className='desc font-bold text-3xl'>
                    Projects.
                    <div className='flex flex-row'>
                        <div class="horizontal-line"></div>
                        <div class="circle"></div>
                    </div>
                    <p className='text-xs'>Remaya's Projects over ther years.</p>
                </p>
                <br />
                <p className='desc text-lg'>REMAYA Org is dedicated to fostering positive change in various sectors. Their projects include ensuring access to quality education for underprivileged children by supporting them throughout their educational journey. They promote gender equality and equity by advocating for equal opportunities across all demographics. Additionally, REMAYA extends care and support to vulnerable populations through community outreach initiatives such as visiting children's homes, engaging with street communities, and providing companionship to the elderly. Their holistic approach aims to uplift and empower individuals and communities in need.</p>
                <br />
                <div className="project-container">
                        <div className="cards">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }} // Adjust the duration as needed
                            viewport={{ once: true }} // Ensures it triggers only once when in view
                        >
                            <img src={pic1} alt="Education Illustration" className='rounded-3xl project-img'/>
                        </motion.div> 
                            <br />
                            <p className='desc font-bold text-2xl'>Education.</p>
                            <p className='desc'>Ensuring access to quality education for underprivileged children, supporting them
                                    through their entire educational journey and helping them discover their desires in life.
                            </p>
                        </div>
                        <div className="cards">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }} // Adjust the duration as needed
                            viewport={{ once: true }} // Ensures it triggers only once when in view
                        >
                            <img src={pic2} alt="Education Illustration" className='rounded-3xl project-img'/>
                        </motion.div>
                            
                            <br />
                            <p className='desc font-bold text-2xl'>Equality and Equity.</p>
                            <p className='desc'>Advocating for equal opportunities across all genders as well as implementing reconaicance strategies for  victims of discrimination across all social groups.
                            </p>
                        </div>
                        <div className="cards">

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }} // Adjust the duration as needed
                            viewport={{ once: true }} // Ensures it triggers only once when in view
                        >
                            <img src={pic3} alt="Education Illustration" className='rounded-3xl project-img'/>
                        </motion.div>
                            
                            <br />
                            <p className='desc font-bold text-2xl'>Community Outreach.</p>
                            <p className='desc'>Extending care and support to vulnerable populations through visits to children's homes,
                                engagement with street communities, and companionship for the elderly.
                            </p>
                        </div>

                    </div>
                    <br />
                    <div className='flex flex-row justify-center items-center'>
                        
                        <div className='flex flex-row justify-center '>
                            <div class="circle"></div>
                            <div class="horizontal-line" id='line2'></div>         
                        </div>
                        <Link to="/support"><button className='support-btn'>Contribute | <FontAwesomeIcon icon={faArrowRight} /></button></Link> 
                    </div>
               
            </div>
            
        </>
        
    )
}