import 'react';
import styles from '../styles/footer.module.css'
import logo from "../assets/WeOneInfotech_Logo.png"
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import location from "../assets/googleMaps.jpg";

import facebookIcon from "../assets/Facebook_icon.jpg"
import instagramIcon from "../assets/Instagram_logo.jpg"
import twitterIcon from "../assets/X_logo_2023.jpg";
import linkdeinIcon from "../assets/linkedIn.png";

export default function Footer() {
    const scrollToTop = () => {
        scroll.scrollToTop();
      };
  return (
    <div className={styles.footerContainer}>
    <footer className={styles.footer}>
        <button onClick={scrollToTop} className={styles.backtotopBtn}>
            <div className={styles.backtotop}>
                Back to top
            </div> 
        </button>
        <div className={styles.footerTop}>
            <div className={styles.company}>
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                    <p className={styles.companyName}>We One Infotech</p>
                </div>
                <div className={styles.companyAddress}>
                    <NavLink to='https://www.google.com/maps/@18.6450322,73.8580622,103m/data=!3m1!1e3?entry=ttu'>
                        <img src={location} alt="location" className={styles.socialMediaIcon} />
                        <span className={styles.addressHeading}> Registered Office Address:</span>
                    </NavLink>
                    <p>Mohan Nagar phase 2,</p>
                    <p>near Jai Ganesh Samrajjya Circle,</p>
                    <p>Outer Ring Road, Devarabeesanahalli Village,</p>
                    <p>Alankapuram Road Bhosari - 411039,</p>
                    <p>Maharashtra, India</p>
                    <p>CIN : U51109KA2012PTC066107</p>
                    <p>Telephone: +91 9663778843</p>
                </div>
            </div>
            <div className={styles.footerGrid}>
                <div className={styles.footerGridColumn}>
                    <p className={styles.heading}>About</p>
                    <ul>
                        <li>My Account</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>My account</li>
                        <li>Orders history</li>
                        <li>Advanced search</li>
                    </ul>
                </div>
                <div className={styles.footerGridColumn}>
                    <p className={styles.heading}>Help</p>
                    <ul>
                        <li>Payments</li>
                        <li>Shipping</li>
                        <li>Cancellation & Returns</li>
                        <li>FAQ</li>
                        <li>Report Infringement</li>
                    </ul>
                </div>
                <div className={styles.footerGridColumn}>
                    <p className={styles.heading}>Consumer Policy</p>
                    <ul>
                        <li>Cancellation & Returns</li>
                        <li>Terms Of Use</li>
                        <li>Security</li>
                        <li>Privacy</li>
                        <li>Sitemap</li>
                        <li>Grievance Redressal</li>
                        <li>EPR Compliance</li>
                    </ul>
                </div>
                <div className={styles.footerGridColumn} >
                    <p className={styles.heading}>Follow Us</p>
                    <ul id={styles.socialMedia}>
                        <NavLink to="https://www.instagram.com/weoneinfotech?igsh=a3pkNXRjYmtuOGVq&utm_source=qr">
                          <img src={instagramIcon} alt="instagram" className={styles.socialMediaIcon} />
                        </NavLink>
                        <NavLink to="">
                          <img src={facebookIcon} alt="facebook" className={styles.socialMediaIcon} />
                        </NavLink>
                        <NavLink to="">
                          <img src={twitterIcon} alt="twitter" className={styles.socialMediaIcon} />
                        </NavLink>
                        <NavLink to="">
                          <img src={linkdeinIcon} alt="linkdin" className={styles.socialMediaIcon} />
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>      
        <div className={styles.copyRight}>
            © 2023 www.weoneinfotech.com. All rights reserved.
        </div>
    </footer>
    </div>
  )
}
