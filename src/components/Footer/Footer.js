import React from 'react'
import './Footer.css'
import IconImg from '../../assets/unnamed.png';
import FacebookImg from '../../assets/Facebook_icon.webp';
import WhatsappImg from '../../assets/Whatsapp_icon.jpg';
import EmailImg from '../../assets/google-mail-gmail-icon-logo-symbol-free-png.webp';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={IconImg} alt="rc" width="150" height="125" />
            <p><b>At Food Express Limited</b>, we understand that hunger waits for no one. That's why our Express Delivery service is designed to bring your favorite meals from the best restaurants to your doorstep within minutes – piping hot and fresh, just the way you love it.</p>
            <div className="footer-social-icons">
              <a href="https://www.facebook.com/">
                 <img src={FacebookImg} alt="rc" width="50" height="50" />
              </a>
              <a href="https://www.whatsapp.com/">
                 <img src={WhatsappImg} alt="rc" width="50" height="50" />
              </a>
              <a href="https://workspace.google.com/intl/en-US/gmail/">
                 <img src={EmailImg} alt="rc" width="50" height="50" />
              </a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#About-Information">About</a></li>
              <li>Delivery</li>
              <li><a href="https://worldexpressdeliveryinc.com/privacy-policy/index.html">Privacy Policy</a></li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li><a href="tel:+88001993259223"> +880-019-932-592-23</a></li>
                <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=ashfaq.cse.20230104069@aust.edu" >📧 contact1@expressdelivery.com</a></li>
                <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=ayesha.cse.20230104054@aust.edu">📧 contact2@expressdelivery.com</a></li>
                <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=sazia.cse.20210104020@aust.edu" >📧 contact3@expressdelivery.com</a></li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2025 @expressdelivery.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer;