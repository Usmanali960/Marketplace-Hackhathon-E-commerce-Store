import React from 'react';
import 'boxicons/css/boxicons.min.css';

function Footer() {
  return (
    <div>
      <div className="grid relative xs:grid-cols-2 px-10 xs:py-10 md:grid-cols-5 md:py-20 w-full gap-3 xs:px-6 bg-[#111111] text-white max-h-max">
        <div className="exclusive text-[16px]">
          <h1 className="font-medium mb-5">Find A Store</h1>
          <h2 className="font-normal mb-6">Become A Member</h2>
          <p className="font-light mb-4">Sign Up for Email</p>
          <p className="font-light mb-4">Send Us Feedback</p>
          <p className="font-light mb-4">Student Discounts</p>
        </div>
        <div className="support">
          <h1 className="font-medium mb-5 text-xl">Get Help</h1>
          <ul className="font-light text-[#7E7E7E]">
            <li className="mb-3">Order Status</li>
            <li className="mb-3">Delivery</li>
            <li className="mb-3">Payment Options</li>
            <li className="mb-3">Contact Us On Nike.com Inquiries</li>
            <li className="mb-3">Contact Us On All Other Inquiries</li>
          </ul>
        </div>
        <div className="account">
          <h1 className="font-medium mb-5">About Nike</h1>
          <ul className="font-light text-[#7E7E7E]">
            <li className="mb-3">News</li>
            <li className="mb-3">Careers</li>
            <li className="mb-3">Investors</li>
            <li className="mb-3">Sustainability</li>
            <li className="mb-3">Shop</li>
          </ul>
        </div>
        <div className="app lg:absolute lg:right-6 lg:top-16">
          <div className="socialMedia flex items-center gap-2 text-2xl mt-3">
            <i className="bx bxl-facebook bg-[#7E7E7E] p-1 rounded-full text-black" aria-label="Facebook"></i>
            <i className="bx bxl-twitter bg-[#7E7E7E] p-1 rounded-full text-black" aria-label="Twitter"></i>
            <i className="bx bxl-instagram bg-[#7E7E7E] p-1 rounded-full text-black" aria-label="Instagram"></i>
            <i className="bx bxl-linkedin bg-[#7E7E7E] p-1 rounded-full text-black" aria-label="LinkedIn"></i>
          </div>
        </div>
      </div>

      <div className="lastFooter w-full h-[10vh] flex px-5 sm:flex-col xs:flex-col lg:flex-row md:flex-row items-center xs:justify-center sm:justify-center lg:justify-between bg-[#111111] text-white">
        <div className="location flex items-center gap-5">
          <div className="current flex items-center justify-center gap-2">
            <p><i className="bx bx-location-plus"></i></p>
            <p>India</p>
          </div>
          <p className="text-[#7E7E7E] lg:text-[14px] sm:text-[10px] xs:text-[8px]">© 2023 Nike, Inc. All Rights Reserved</p>
        </div>
        <div className="footerMenu mr-5">
          <ul className="flex lg:text-[14px] sm:text-[10px] xs:text-[8px] text-[#7E7E7E] items-center gap-5">
            {['Guides', 'Terms of Sale', 'Terms of Use', 'Nike Privacy Policy'].map((menu, index) => (
              <li key={index} className="hover:text-white transition-colors">
                {menu}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
