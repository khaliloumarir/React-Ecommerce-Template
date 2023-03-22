import Logo from "../assets/images/site-logo.svg";
import { mainData } from "../data/mainData";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="text-left grid sm:grid-cols-4 place-content-between bg-gradient-to-b from-[#f6f8fc] to-[#FFFFFF] py-16">
      <section>
        <img
          alt={`Footer ${mainData.companyName} Logo`}
          src={Logo}
          width="150px"
          height="75px"
        />
        <p>{mainData.aboutUs}</p>
      </section>
      <section>
        <h3 className="text-2xl">Main Office</h3>
        <p>{mainData.address}</p>
        <p>{mainData.phone} </p>
      </section>
      <section>
        <h3 className="text-2xl">Informations</h3>
        <ul>
          <li>
            <Link className="" to="/return-refund">
              <p className="hover:text-greenColor hover:font-bold min-h-[48px]">
                Return & Refund Policy
              </p>
            </Link>
          </li>
          <li>
            <Link to="/cookie-policy">
              <p className="hover:text-greenColor hover:font-bold min-h-[48px]">
                Cookie Policy
              </p>
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy">
              <p className="hover:text-greenColor hover:font-bold min-h-[48px]">
                Privacy Policy
              </p>
            </Link>
          </li>
          <li>
            <Link to="/terms-of-service">
              <p className="hover:text-greenColor hover:font-bold min-h-[48px] ">
                Terms of service
              </p>
            </Link>
          </li>
          <li>
            <Link to="/contact-us">
              <p className="hover:text-greenColor hover:font-bold min-h-[48px]">
                Contact us
              </p>
            </Link>
          </li>
        </ul>
      </section>
      {/* <section>
        <h3 className="text-2xl">Follow Us</h3>
        <a href="www.twitter.com">
          <p>Twitter: {mainData.twitter}</p>
        </a>
      </section> */}
    </div>
  );
}
