import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
         <img className='w-20 h-20 rounded-full mx-auto' src="https://i.ibb.co.com/PMf1RFY/online-study-logo-design-2cf5cf.jpg" alt="" />
          <p className='text-3xl font-bold text-blue-600'>
            Online Study
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    );
};

export default Footer;