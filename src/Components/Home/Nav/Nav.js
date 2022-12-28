import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import BannerBg from '../../../Img/banner-bg.png';
import Logo from '../../../Img/logo.png';
import Banner from '../Banner/Banner';

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className="h-auto md:h-2/3 md:pb-14 bg-cover bg-center"
        style={{
          backgroundImage: 'url(' + BannerBg + ')',
        }}
      >
        <div className="mx-5 md:mx-20">
          {/* Nav menu  */}
          <div className="flex justify-between items-center mb-10">
            <div>
              <img src={Logo} alt="" />
            </div>

            <div className="hidden md:block">
              <ul className="flex justify-between items-center">
                <li className="px-3 text-lg font-medium text-white hover:text-black duration-500">
                  <a href="#">About</a>
                </li>
                <li className="px-3 text-lg font-medium text-white hover:text-black duration-500">
                  <a href="#">Contact Us</a>
                </li>
                <li className="px-3 text-lg font-medium text-white hover:text-black  duration-500">
                  <a href="#">Sign Up</a>
                </li>
              </ul>
            </div>
            <div className="block md:hidden">
              {' '}
              {open ? (
                <div onClick={() => setOpen(false)}>
                  <AiOutlineClose color="white" size={25} />
                </div>
              ) : (
                <div onClick={() => setOpen(true)}>
                  <FiMenu color="white" size={25} />
                </div>
              )}
            </div>
            {/* menu icon for mobile device  */}
            {open && (
              <div
                className={`block md:hidden absolute top-12 bg-white inset-x-0 py-6 ${
                  open && 'transition delay-700'
                }`}
              >
                <ul className=" space-y-3 ml-4">
                  <li className="px-3 text-lg font-semibold text-orange-400 hover:text-black duration-500">
                    <a href="#">About</a>
                  </li>
                  <li className="px-3 text-lg font-semibold text-orange-400 hover:text-black duration-500">
                    <a href="#">Contact Us</a>
                  </li>

                  <li className="px-3 text-lg font-semibold text-orange-400 hover:text-black  duration-500">
                    <a className="relative z-30" href="#">
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Banner  */}
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default Nav;
