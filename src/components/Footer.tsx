import React from "react";
import Github from "../assets/github.png";
import Instagram from "../assets/instagram.png";
import LinkedIn from "../assets/linkedin.png";
import Logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div className="position: relative;">
      <hr className="border: 1px solid var(--lightgray);"/>
      <div className="padding: 1rem 2rem;
                        display: flex;
                        flex-direction: column;
                        gap: 4rem;
                        align-items: center;
                        justify-content: center;
                        height: 20rem;">
        <div className="display: flex;
                          gap: 4rem;">
          <img src={Github.src}  className="width: 2rem;
  height: 2rem;
  cursor: pointer;" alt="" />
          <img src={Instagram.src}  className="" alt="" />
          <img src={LinkedIn.src}  className="" alt="" />
        </div>
        <div className="width: 10rem;">
            <img src={Logo.src} alt="" />
        </div>
      </div>
      <div className="blur bottom: 0;
                            right: 15%;
                            width: 26rem;
                            height: 12rem;
                            filter: blur(200px);
                            background: red; 
                            bottom: 0;
                            right: 15%;
                            width: 26rem;
                            height: 12rem;
                            filter: blur(200px);
                            background: red;"></div>
      <div className="blur bottom: 0;
                right: 15%;
                width: 26rem;
                height: 12rem;
                filter: blur(200px);
                background: rgb(255, 115, 0);
                bottom: 0;
                left: 15%;
                width: 26rem;
                height: 12rem;
                filter: blur(200px);
                background: rgb(255, 115, 0);"></div>
    </div>
  );
};

export default Footer;
