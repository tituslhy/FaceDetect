import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './face-detection.png';

const Logo = () => {
    return (
        <div className = 'ma4 mt0'>
            <Tilt className = "Tilt br2 shadow-2" options={{'max': 25}} style={{ height: 150, width:150 }}>
                <div className = "Tilt-inner pa3">
                    <img style={{paddingTop: '5px'}} src = {brain} alt='logo'></img>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;