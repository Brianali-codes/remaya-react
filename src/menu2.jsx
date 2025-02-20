import FlowingMenu from "./flowingmenu";
import kibera from './assets/kibera.jpg'
import mathare from './assets/mathare.jpg'
import githurai from './assets/githurai.jpg'
import Mwihoko from './assets/mwihoko.jpg'

export default function Menu2(){
    const demoItems = [
        { link: '#', text: 'Kibera', image: kibera },
        { link: '#', text: 'Mathare', image: mathare },
        { link: '#', text: 'Mwihoko', image: githurai },
        { link: '#', text: 'Githurai', image: Mwihoko }
      ];
     
      return(
        <>
            <div className="">
                <p className="text-center desc"> We mainly focus on helping the needy in slums or hotpoints of child abuse and neglection, valid locations include: </p>
            </div>
            <div style={{ height: '600px', position: 'relative' }}>
                <FlowingMenu items={demoItems} />
            </div>
            <br />
            <div className="p-7">
                <p className="text-center desc">Together, We Can Make a Difference! Every act of kindness, no matter how small, creates ripples of hope. Your support can transform lives—providing education for underprivileged children, extending care to vulnerable communities, and ensuring no one feels forgotten. Join us in spreading love, compassion, and opportunity. Together, we can build a brighter, more inclusive future.
Donate today and be the reason someone smiles tomorrow.
Thank you for believing in the power of change. ❤️</p>
            </div>
        </>
        
      )
      
}

