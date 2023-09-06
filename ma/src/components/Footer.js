import React from "react";
import "../styles/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../assets/logo.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Footer() {
    return (
        <footer className="site-footer">



            {/* <section class="elementor-section elementor-inner-section elementor-element elementor-element-d629f6b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d629f6b" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7f640c1" data-id="7f640c1" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-20eb883 elementor-widget elementor-widget-heading" data-id="20eb883" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Need a Solution From Us?</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-0e856f5 elementor-widget elementor-widget-text-editor" data-id="0e856f5" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<p>Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>						</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6cffa86" data-id="6cffa86" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-26ea511 elementor-align-right elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="26ea511" data-element_type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
			<a href="#" class="elementor-button-link elementor-button elementor-size-sm" role="button">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-text">Contact Now</span>
		</span>
					</a>
		</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section> */}
            <section className="Upper">
                <div className="Uppersite">
                    <div className="uf1">
                        <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">Need a Solution From Us?</h2>
                        </div>
                        <div className="elementor-widget-container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div className="uf2">
                        <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                                <a href="#" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                                    <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-text">Contact Now</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Middle">
                <div className="Middlesite">
                    <div className="mf1">
                        <div className="Mlogo">
                            <img src={Logo} alt="Logo" />
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
                        <div className="mf2 Headinglist">
                            <ul>
                                <li className="list1">  <span className="elementor-icon-list-icon">
                                    <i aria-hidden="true" style={{ marginRight: '5px' }} className="fas fa-map-marker-alt"> <FontAwesomeIcon icon={faMapMarkerAlt} /></i>
                                </span>
                                    <span className="text-content">Jl. Sulawesi 0404 KA, Kanigoro, Blitar 4567</span>
                                </li>
                                <li>
                                    <span className="elementor-icon-list-icon">
                                        <i aria-hidden="true" style={{ marginRight: '5px' }} className="fas fa-phone-alt"> <FontAwesomeIcon icon={faPhoneAlt} /></i>
                                    </span>
                                    <span>Ph: +917024949888</span>
                                </li>
                                <li>
                                    <span className="elementor-icon-list-icon">
                                        <i aria-hidden="true" style={{ marginRight: '5px' }} className="fas fa-envelope"> <FontAwesomeIcon icon={faEnvelope} /></i>
                                    </span>
                                    <span>gwar619908@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mf3">
                        <div className="mf3 Heading">
                            <h4> PAGES</h4>
                        </div>
                        <div className="mf3 Headinglist">
                            <ul>
                                <li>
                                    <span>About Us</span>
                                </li>
                                <li>
                                    <span>Services</span>
                                </li>
                                <li>
                                    <span>Prices</span>
                                </li>
                                <li>
                                    <span>Our Team</span>
                                </li>
                            </ul>
                        </div>
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
