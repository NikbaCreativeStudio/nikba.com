import { useLocation } from 'react-router-dom';
import { ParticleComponent } from '../Particles/Particles';

import './Background.css';

export const Background = () => {

    const location = useLocation()
    const { pathname } = location;

    return (
        <div className={`background ${pathname === '/' ? '' : 'active'}`} id="background">
            {pathname === '/' && <ParticleComponent />}
        </div>
    );
}