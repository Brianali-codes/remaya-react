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
                <p className="text-center desc font-md text-xl"> Some of our target locations include : </p>
            </div>
            <div style={{ height: '600px', position: 'relative' }}>
                <FlowingMenu items={demoItems} />
            </div>
        </>
        
      )
      
}

