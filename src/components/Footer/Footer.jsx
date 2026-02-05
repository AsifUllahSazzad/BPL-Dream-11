import "./Footer.css";
import FooterLogo from "../../../public/assets/logo-footer.png";
import Subscribe from "../Subscribe/Subscribe";
import { useState } from "react";
import { toast } from "react-toastify";
import { addToLS } from "../utilities/localStorage";

const Footer = () => {
  const [value, setValue] = useState("");

  // Email add to Local storage
  const handleTheValue = () => {
    // email validation
    if (
      !value.includes("@") ||
      !value.includes(".com") ||
      value.includes(" ")
    ) {
      toast.error("Please enter a valid email addres");
      // clear input box
      setValue("");
      return;
    }
    const isDuplicate = addToLS(value);

    if (isDuplicate) {
      toast.error("This email is already added");
      setValue("");
    } else {
      addToLS(value);
      toast.success("Email added successfully");
      setValue("");
    }
  };

  return (
    <div className="mt-95 max-md:mt-70">
      {/* Subscribe Content */}
      <div className="relative">
        <div className="max-w-7xl max-md:flex max-md:justify-center absolute w-full -top-50 left-1/2 -translate-x-1/2">
          <Subscribe
            handleTheValue={handleTheValue}
            setValue={setValue}
            value={value}
          ></Subscribe>
        </div>
      </div>

      {/* Footer Content */}
      <div className="bg-[#060919] pt-55">
        <div className="max-w-7xl mx-auto text-white space-y-10 mb-16 px-4">
          {/* Image Content */}
          <div className="flex justify-center">
            <img
              src={FooterLogo}
              alt="Footer Logo"
              className="w-32 md:w-auto"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 text-center md:text-left">
            {/* About Us */}
            <div className="md:w-72 space-y-4">
              <h5 className="font-semibold text-lg">About Us</h5>
              <p className="text-[#9B9DA3] text-base">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h5 className="font-semibold text-lg">Quick Links</h5>
              <ul className="text-[#9B9DA3] text-base space-y-2">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            {/* Subscribe */}
            <div className="space-y-5 md:w-80">
              <div className="space-y-4">
                <h5 className="font-semibold text-lg">Subscribe</h5>
                <p className="text-[#9B9DA3] text-base">
                  Subscribe to our newsletter for the latest updates.
                </p>
              </div>

              {/* Input + Button */}
              <div className="flex flex-col sm:flex-row w-full">
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full text-black px-5 py-3 rounded-xl sm:rounded-l-xl sm:rounded-r-none bg-white placeholder:text-[#686565]"
                />

                <button
                  onClick={handleTheValue}
                  className="btnStyle w-full sm:w-auto px-6 py-3 rounded-xl sm:rounded-r-xl sm:rounded-l-none text-black font-bold mt-3 sm:mt-0"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <hr className="border-[#ffffff33]" />
        <p className="text-[#ffffff99] text-center text-base py-3">
          ©2024 Your Company All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
