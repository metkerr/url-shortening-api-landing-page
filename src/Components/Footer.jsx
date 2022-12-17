import logo from "../images/logo-white.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
export default function Footer() {
  return (
    <footer className="bg-very-dark-violet px-5 text-white flex pt-14 pb-8 text-center text-base">
      <div id="footer-wrapper" className="flex flex-col mx-auto gap-10">
        <div id="footer-logo" className="mb-3">
          <img src={logo} alt="shortly logo" className="m-auto" />
        </div>
        <div id="footer-features" className="flex flex-col gap-2">
          <h3 className="font-bold mb-3">Features</h3>
          <button className="text-grayish-violet">Link Shortening</button>
          <button className="text-grayish-violet">Branded Links</button>
          <button className="text-grayish-violet">Analytics</button>
        </div>
        <div id="footer-resources" className="flex flex-col gap-2">
          <h3 className="font-bold mb-3">Resources</h3>
          <button className="text-grayish-violet">Blog</button>
          <button className="text-grayish-violet">Developers</button>
          <button className="text-grayish-violet">Support</button>
        </div>
        <div id="footer-company" className="flex flex-col gap-2">
          <h3 className="font-bold mb-3">Company</h3>
          <button className="text-grayish-violet">About</button>
          <button className="text-grayish-violet">Our Team</button>
          <button className="text-grayish-violet">Careers</button>
          <button className="text-grayish-violet">Contact</button>
        </div>
        <div id="footer-social-media" className="mt-2 mb-4">
          <div id="sm-wrapper" className="flex gap-5">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
}
