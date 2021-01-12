import React from 'react';

import './style/NavigationBar.css';

const nav_item = [
    "Setting", "VOC", "Help","User"
];

function NavigationBar() {
    return (
        <div className='navigationBar'>
            <div className="navigationBar__drawerBtn">
                <i className="fas fa-bars"></i>
            </div>
            <div className="navigationBar__wrapper">
                <div className="navigationBar__leftMenu">
                    <img src="resource/logo.png" className="navigationBar__logo"/>
                    <span className="navigationBar__logoTxt"> J-CI</span>
                </div>
                
                <div className="navigationBar__rightMenu">
                    <ul>
                        {nav_item.map( (nav, idx) => {
                            return <li className="navigationBar__item" key={`nav_item ${nav} ${idx}`}><a href="#">{nav}</a></li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;