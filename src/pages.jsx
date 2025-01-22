import HI from './assets/hero-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
                        <p className='text-5xl desc font-bold title'>REMAYA.Org</p>
                        <br />
                        <p className='desc text-2xl home-desc'>Being beneficiaries of AVSI and having experienced help from scratch while attending <span className='text-green-500'>Cardinal Otunga School,</span>Lamas and Reshida was inspired to dive deeper into practical philanthropy and start REMAYA Org</p>
                        <br />
                        <Link to="/support"><button className='support-btn'>Support the Work | <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                    </div>

                </div>
                   


            </div>    
        </div>
        </>
    )
}