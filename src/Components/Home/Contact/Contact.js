import { Flip } from 'react-reveal';
import Pinneapple from '../../../Img/pineapple.png';

const Contact = () => {
  return (
    <div className="block md:flex justify-between items-center mt-16 mx-5 md:mx-20">
      {/* text  */}
      <div>
        <h1
          style={{ fontFamily: 'Righteous' }}
          className="text-3xl md:text-5xl font-semibold mb-4 text-center"
        >
          Contact us{' '}
        </h1>

        <div className="flex flex-col px-5 md:px-10 py-10 rounded-xl bg-[#F4F4F2]">
          <form action="#">
            <input
              className="bg-white mb-4 px-6 py-2 w-full rounded-sm"
              type="text"
              placeholder="Name"
            />
            <input
              className="bg-white mb-4 px-6 py-2 w-full rounded-sm"
              type="email"
              placeholder="Email"
            />
            <input
              className="bg-white mb-4 px-6 py-2 w-full rounded-sm"
              type="number"
              placeholder="Phone Number"
            />
            <textarea
              className="bg-white mb-6 px-6 py-2 w-full rounded-sm"
              name=""
              id=""
              cols="40"
              rows="3"
              placeholder="Message"
            ></textarea>

            <a
              className="text-white px-8 py-3 rounded-sm bg-[#F57615] hover:bg-white hover:border-2-[#F57615] hover:text-black duration-300"
              href="#"
            >
              Send
            </a>
          </form>
        </div>
      </div>

      {/* img  */}
      <div className="">
        <Flip right>
          <img className="w-full" src={Pinneapple} alt="" />
        </Flip>
      </div>
    </div>
  );
};

export default Contact;
