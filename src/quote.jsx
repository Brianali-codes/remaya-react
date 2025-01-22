import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function Quote(){
    return(
        <>
        <div id="MAIN2">
            <div id="LP2" className="flex flex-col justify-center items-center p-20">
                <br />
                   <p className="desc font-bold text-center text-3xl text2">Providing hope and support to those in need, guided by compassion and faith, we strive to uplift communities and restore dignity to every individual</p> 
                   <p className="desc font-bold text-2xl italic text2">"Carry each other's burdens, and in this way, you will fulfill the law of Christ." — Galatians 6:2</p>
                   <br />
                   <div>
                   <Link to="/support"><button className='support-btn3'>Learn More | <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                    </div>

            </div>    
        </div>
        
        
        </>
    )
}