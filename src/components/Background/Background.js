//import { useRef } from "react";
//import './spiders.js'
import './Background.css';

export const Background = () => {

    //const canvasRef = useRef(null);

    return (
        <div className="background" id="background">
            <canvas 
                className="spiders" 
                id="spiders" 
                //ref={canvasRef}
            ></canvas>
        </div>
    );
}