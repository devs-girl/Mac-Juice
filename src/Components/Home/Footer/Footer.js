import { Fade } from 'react-reveal';

const Footer = () => {
  return (
    <div style={{ background: '#2B2B2B' }}>
      {/* footer  */}
      <div
        style={{ borderBottom: '2px solid #696969' }}
        className="text-center mx-10 md:mx-20 py-10"
      >
        <Fade left>
          <h3
            style={{ fontFamily: 'Righteous' }}
            className="text-white text-xl md:text-3xlfont-normal mx-0 md:mx-36 mb-6"
          >
            Free Multipurpose Responsive{' '}
            <span style={{ color: '#E9531D' }}>Landing Page 2022</span>
          </h3>
        </Fade>

        <Fade right>
          <p style={{ color: '#EEF7FC' }} className=" mx-0 lg:mx-80 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. dummy text ever since the
          </p>
        </Fade>
      </div>
      {/* copuright  */}
      <p className="text-base text-center text-white py-5 ">
        Copyright 2022 All Right Reserved By <b>SAIFUN NAHAR SUMI</b>
      </p>
    </div>
  );
};

export default Footer;
