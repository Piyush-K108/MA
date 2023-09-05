import React from "react";
import "../styles/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../assets/logo.jpg"
function Footer() {
    return (
        <footer className="site-footer">
            <section className="Upper">


                <div className="Uppersite">
                    <div className="uf1">
                    </div>
                    <div className="uf2">
                    </div>
                </div>
            </section>
            <section className="Middle">
                <div className="Middlesite">
                    <div className="mf1">
                        <div className="Mlogo">
                            <img src={Logo} />
                        </div>
                        <div className="quote">
                            <p>It's important to take care of yourself, and you'll be able to get rid of the fat. As the land of the land, the mourning nor the corporal of the land, the pillow of the lion.</p>
                        </div>
                        <div className="social-icons">
                            {/* Add social media icons with links */}
                            <a href="https://www.instagram.com">
                                <InstagramIcon />
                            </a>
                            <a href="https://www.twitter.com">
                                <TwitterIcon />
                            </a>
                            {/* Add more icons and links as needed */}
                        </div>
                    </div>
                    <div className="mf2">
                        <div className="mf2 Heading">
                            <h4> HEAD OFFICE</h4>
                        </div>
                        <div className="mf2 Heading list">
                            <ul>
                                <li><span></span>
                                    <span>Jl. Sulawesi 0404 KA, Kanigoro, Blitar 4567</span>
                                </li>
                                <li>
                                    <span></span>
                                    <span>Ph: +917024949888</span>
                                </li>
                                <li>
                                    <span></span>
                                    <span>gwar619908@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mf3">
                    </div>
                </div>

            </section>
            <section className="Lower">
                <div className="lowersite">
                    <div className="l1">
                        <h5>  Copyright &copy; {new Date().getFullYear()}  mataniarchitect. All rights reserved.</h5>
                        <h5> Interior Designing By Sagar Matani </h5>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
