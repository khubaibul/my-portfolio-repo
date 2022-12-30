import React from 'react';
import gitHub from "../../../Assets/github.png";
import facebook from "../../../Assets/facebook.png";
import linkedin from "../../../Assets/linkedin-logo.png";
import twitter from "../../../Assets/twitter-sign.png";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-gradient-to-r from-purple-600 to-pink-600 text-neutral-content">
            <div>
                <p>KHUBAIBUL ISLAM SHAKIB<br />Providing reliable web application service since 2021</p>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/khubaibulislamshakib.xx" target="_blank">
                        <img className='w-8' src={facebook} alt="" />
                    </a>
                    <a href="https://github.com/KIShakib" target="_blank">
                        <img className='w-8' src={gitHub} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/ki-shakib" target="_blank">
                        <img className='w-8' src={linkedin} alt="" />
                    </a>
                    <a href="https://twitter.com/KI_Shakib2001" target="_blank">
                        <img className='w-8' src={twitter} alt="" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;