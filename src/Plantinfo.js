import React from 'react';
import './Plantinfo.css'; 
import logo from './image/logo.pic';

function Plantinfo() {
    return (
        <div className="container">

            <div className="drawing">
                {/* Your drawing or image goes here. Placeholder below: */}
                <img src={logo} alt="InvaScan Logo" />
                    <path d="M10 10 Q90 10 90 90 T10 90" fill="none" stroke="black"/>
            </div>

            <div className="header-box">
                <div className="detail-box">
                    Invasive (or not)
                </div>

                <div className="detail-box">
                    NameOfPlant
                </div>
            </div>

            <div className="detail-box">
                Information
            </div>

            <div className="detail-box">
                Contact Environmental Dpt.
            </div>
        </div>
    );
}

export default Plantinfo;
