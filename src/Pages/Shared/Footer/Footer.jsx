import { FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="flex gap-0 text-white">
        <div className="w-[50%] inline text-right bg-[#1F2937] p-12">
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div className="w-[50%] p-12 bg-[#111827]">
          <h3 className="text-xl mb-3">Social</h3>
          <div className="flex gap-4">
            <FaFacebook></FaFacebook>
            <FaInstagram></FaInstagram>
            <FaTwitter></FaTwitter>
            
          </div>
        </div>
      </div>

      {/* footer bottom */}

      <div className=" p-4 bg-black text-center text-white">
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
