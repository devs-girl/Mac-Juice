import { Fade, Flip } from 'react-reveal';
import Banana from '../../../Img/banana.png';

const About = () => {
  return (
    <div className=" text-center md:text-left block md:flex justify-between items-center mt-16 bg-[#F4F4F2] md:py-14 py-14 lg:py-0">
      {/* banner img  */}
      <div className="mb-10 md:mb-0">
        <Flip top>
          <img src={Banana} alt="" />
        </Flip>
      </div>

      <div className="mx-5 md:mx-0">
        <Fade top>
          <h1
            style={{ fontFamily: 'Righteous' }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 "
          >
            About us our <span style={{ color: '#F57615' }}>Juice shop</span>{' '}
          </h1>
        </Fade>

        <Fade right>
          <p className="text-center md:text-left pr-0 md:pr-10 lg:pr-52 mb-9">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type{' '}
          </p>
        </Fade>
        <a
          className="text-white px-8 py-3 bg-[#F57615] rounded-sm hover:bg-white hover:border-2-[#F57615] hover:text-black duration-300"
          href="#"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default About;
