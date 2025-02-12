import img1 from './assets/kid.webp'
import img2 from './assets/kid2.webp'
import { motion } from 'framer-motion';


export default function Mission(){
    return(
        <>
            <div className="flex flex-col justify-center items-center p-5 gap-5" >
            <p className='desc font-bold text-3xl'>
                    Mission.
                    <div className='flex flex-row'>
                        <div class="horizontal-line"></div>
                        <div class="circle"></div>
                    </div>
                </p>
                <div className="flex flex-row justify-center items-center mission" id='mission'>
                    <div className='flex-flex-col justify-center items-center'>
                        <motion.div
                         initial={{ opacity: 0, scale: 0.9 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 1 }} // Adjust the duration as needed
                         viewport={{ once: true }} // Ensures it triggers only once when in view
                        >
                           <img src={img1} alt="kid studying" className='mission-img' />
                        </motion.div>         
                        <div className="flex flex-col justify-center items-center">
                            <div class="vertical-line2"></div>
                            <div class="circle"></div>
                        </div>
                        <br />
                        <p className="desc text-start">Our Organizations <span className='text-lg font-bold text-blue-400'>Mission</span>  is dedicated to fostering education, promoting gender equality, empowering individuals, raising awareness about mental health and climate change, eradicating poverty, fostering economic empowerment, and nurturing a culture of care, support, and human dignity within communities.</p>
                    </div>

                    <div className='flex-flex-col justify-center items-center'>
                        
                        <p className="desc text-start">We envision a world where every individual, regardless of their circumstances, has the opportunity to thrive and achieve their full potential. Our <span className='text-lg font-bold text-blue-400'>Vision</span> is to inspire smiles, ignite hope, and foster positive change, making the world a brighter and more compassionate place for generations to come.</p>
                        <div className="flex flex-col justify-center items-center">
                            <div class="circle"></div>
                            <div class="vertical-line2"></div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }} // Adjust the duration for the animation.
                            viewport={{ once: true }} // Ensures it triggers only once when in view
                            >
                            <img src={img2} alt="kid studying" className='mission-img'/>
                            </motion.div>   
                            <div class="vertical-line2"></div>
                            <div class="circle"></div>
                        </div>
                        
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    
                    <p className='desc'>Our mission is to foster education, promote equality, empower individuals, and raise awareness about mental health, climate change, and poverty. We envision a world where everyone thrives, inspiring smiles, hope, and positive change for a brighter, compassionate future.</p>
                </div>
                
                
            </div>
    </>
    )
}