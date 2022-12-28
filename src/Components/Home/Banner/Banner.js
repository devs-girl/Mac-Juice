import { Fade } from 'react-reveal';
import Juice from '../../../Img/Juice.png';

const Banner = () => {
  return (
    <div className="block md:flex justify-between items-center">
      <div className="text-center md:text-left">
        <Fade left>
          <h1
            style={{ fontFamily: 'Righteous' }}
            className="text-3xl md:text-5xl font-semibold mb-4 text-white"
          >
            Juice shop
          </h1>
        </Fade>
        <Fade right>
          <h2
            style={{ fontFamily: 'Righteous' }}
            className="text-3xl mb:text-5xl font-semibold mb-4 text-white"
          >
            Landing page 2022
          </h2>
        </Fade>

        <Fade left>
          <p className="text-lg text-white pr-0 md:pr-52 mb-9">
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis
          </p>
        </Fade>
        <a
          style={{ color: '#F57615' }}
          className="bg-white px-8 py-3 rounded-sm"
          href="#"
        >
          Read More
        </a>
      </div>
      {/* banner img  */}
      <div className="mt-10 md:mt-0 pb-10 md:pb-0">
        <Fade right>
          <img src={Juice} alt="" />
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
