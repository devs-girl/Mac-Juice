import { Fade, Flip } from 'react-reveal';
import Bhi from '../../../Img/bhi.png';

const Healthy = () => {
  return (
    <div className="mt-16 py-28 bg-gradient-to-t from-[#F87F13] to-[#E03624]">
      <div className="block md:flex justify-between items-center mx-5 md:mx-20">
        <div className="text-center md:text-left">
          <Fade left>
            <h1
              style={{ fontFamily: 'Righteous' }}
              className="text-3xl lg:text-5xl text-white font-semibold mb-6 "
            >
              Healthy bhi tasty bhi
            </h1>
          </Fade>

          <Fade right>
            <p className="text-base text-white pr-4 lg:pr-48 mb-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since theLorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the
            </p>
          </Fade>
          <flip left>
            <a
              className="bg-white px-8 py-3 rounded-sm text-[#F57615]"
              href="#"
            >
              See More
            </a>
          </flip>
        </div>

        {/* banner img  */}
        <div className="pt-10 md:pt-0">
          <Flip left>
            <img className="md:max-w-xs lg:max-w-lg " src={Bhi} alt="" />
          </Flip>
        </div>
      </div>
    </div>
  );
};

export default Healthy;
