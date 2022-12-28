import { Fade, Flip, Rotate } from 'react-reveal';
import Man from '../../../Img/man.png';
import TestimonialBg from '../../../Img/testimonial-bg.png';

const Testimonial = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(' + TestimonialBg + ')',
      }}
      className="py-20 text-center bg-cover bg-center h-auto md:h-2/3"
    >
      <h1
        style={{ fontFamily: 'Righteous' }}
        className="text-3xl lg:text-5xl font-semibold mb-6"
      >
        Testimonial
      </h1>
      <Fade left>
        <p className="text-base mb-9 mb-10 lg:mx-0 mx-20">
          is a long established fact that a reader will be distracted by the
          readable content of a page when looking at{' '}
        </p>
      </Fade>
      {/* testimonial  */}
      <div className=" relative mx-10 md:mx-48 px-5 md:px-16 pt-16 bg-white rounded-lg pb-10 shadow-slate-600">
        {/* img update */}
        <div className="inset-x-0 absolute -top-6 w-full flex justify-center">
          <Flip top>
            <img className=" w-16 md:w-2/12 lg:w-1/12 mb-8" src={Man} alt="" />
          </Flip>
        </div>

        <div>
          <Rotate top left>
            <h4
              style={{ fontFamily: 'Righteous', marginTop: '20px' }}
              className="inline text-2xl my-8 border-b-[2px] border-[#F57615]"
            >
              Mark Due
            </h4>
          </Rotate>
          <Fade right>
            <p className="text-center">
              {' '}
              is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposedt is a long established fact
              that a reader will be distracted by the readable content of a page
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal distribution of letters, as opposed{' '}
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
