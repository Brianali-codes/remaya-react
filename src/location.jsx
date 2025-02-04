import abt from './assets/image4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export default function Location(){
    return(
        <>
        <br /><br />
            <div className="flex flex-row justify-center items-start p-10 abt-desc" id='abd'>
                
                <div className="w-2/6 flex flex-col justify-center items-center">
                <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1 }} // Adjust the duration as needed
                 viewport={{ once: true }} // Ensures it triggers only once when in view
                >
                    <img src={abt} alt="" className='w-72 rounded-3xl' id='location-img'/>
                </motion.div>
                    
                    <div class="vertical-line"></div>
                    <div class="circle"></div>
                </div>
                <div className="w-3/6 flex flex-col justify-center abd-desc">
                    <p className='desc text-xl font-bold'>What is Remaya?</p>
                    <p className='desc text-lg'>
REMAYA Organization, based in the vibrant city of Nairobi, Kenya, operates with a global vision and a strong commitment to local communities. It is a nonprofit organization dedicated to fostering positive change through practical philanthropy and community-driven initiatives.</p>
                    <h2 class="desc font-bold text-xl">About Us</h2>
                    <p class="desc text-lg">
                        We are located  in the vibrant city of Nairobi, Kenya, REMAYA Organization operates with a global
                        and local vision.
                    </p>
                    <p class="desc text-lg">
                        The inaugural endeavor of REMAYA was the "Cup of Tea with Ndiini Primary School Students," marking
                        the commencement of their noble journey. This initiative led to the identification and comprehensive
                        support of nine deserving children, ensuring their access to full education. 
                    </p>
                    <p className='desc text-lg'>REMAYA's mission extends beyond education. The organization is deeply committed to promoting gender equality and empowering women, advocating for equal opportunities for all, regardless of their background or circumstances. They actively engage in community outreach, providing support and care to vulnerable populations through visits to children's homes, companionship for the elderly, and interactions with street communities.</p>
                    <br />
                    <div>
                    <Link to="/support"><button className='support-btn'>Learn More | <FontAwesomeIcon icon={faArrowRight} /></button></Link> 
                    </div>
                    
                </div>
            </div>
        </>
    )


}