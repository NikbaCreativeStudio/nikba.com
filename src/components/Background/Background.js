import { useLocation } from 'react-router-dom';
import './Background.css';

export const Background = () => {

    const location = useLocation()
    const { pathname } = location;

    return (
        <div className={`background ${pathname==='/' ? '' : 'active'}`} id="background">
            <canvas 
                className="spiders" 
                id="spiders" 
                //ref={canvasRef}
            ></canvas>
        </div>
    );
}