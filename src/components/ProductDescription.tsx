import purchaseIcon from "../assets/icons/cart-fill.svg";
import downloadIcon from "../assets/icons/download.svg";
import crochetingIcon from "../assets/icons/crocheting.svg";
import reliableTeamIcon from "../assets/icons/people-group-solid.svg";
import customerSupportIcon from "../assets/icons/customer-support.svg";
import satisfactionIcon from "../assets/icons/satisfaction.svg";
import bundleImage from "../assets/images/bundle.webp";
import checkIcon from "../assets/icons/check-circle-fill.svg";
import Logo from "../assets/images/site-logo.svg";
import { mainData } from "../data/mainData";
import { review } from "../interfaces";

import ReviewComponent from "./ReviewComponent";
import ImportantSection from "./product-description-components/ImportantSection";
import Footer from "./Footer";
import { Link } from "react-router-dom";
export default function ProductDescription({
  reviews,
  img1,
  img2,
  img3,
  children,
}: {
  reviews: review[];
  img1: string;
  img2: string;
  img3: string;
  children?: JSX.Element;
}) {
  const importantArgument: {
    icon: string;
    title: string;
    description: string;
  }[] = [
    {
      icon: purchaseIcon,
      title: "Purchase",
      description:
        "Once the payment is confirmed you will be redirected to the download page",
    },
    {
      icon: downloadIcon,
      title: "Download PDF",
      description:
        "You will be redirected to the Download Page where you can download the PDF immediately",
    },
    {
      icon: crochetingIcon,
      title: "Start Crocheting",
      description:
        "Open the pdf & start crocheting beautiful doilys for your home with our in depth step-by-step guide",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center text-center  ">
      <section className=" bg-gradient-to-b from-[#f6f8fc] to-[#FFFFFF] w-full flex flex-col items-center py-16 space-y-16 ">
        <section>
          <h2 className="">Look at our clients Results</h2>
          <p className="max-w-[760px] text-center ">
            These are some of the pictures that our clients have took after they
            followed the instructions in the book!
          </p>
        </section>

        <section className="flex lg:space-x-6 lg:flex-row flex-col justify-center items-center space-y-6 lg:space-y-0">
          <img alt="showcase one" width="360px" height="360px" src={img1} />
          <img alt="showcase two" width="360px" height="360px" src={img2} />
          <img alt="showcase three" width="360px" height="360px" src={img3} />
        </section>
        {children}
      </section>

      {/* Important Section */}
      <ImportantSection importantArgument={importantArgument} />
      {/* Reviews Section */}
      <div className="space-y-10 py-16">
        <section>
          <h1>Our Pattern Reviews</h1>
          <p>See what our readers are saying.</p>
        </section>
        <div className="grid sm:grid-cols-3 place-content-center gap-10">
          {reviews.map((review) => {
            return (
              <ReviewComponent
                key={review.userName}
                img={review.image}
                name={review.userName}
                review={review.reviewMessage}
              />
            );
          })}
        </div>
        <a href="#">
          <button className="bg-[#223628] text-[#FFFFFF] py-[14px] px-[40px] rounded-full font-bold">
            Get your copy today
          </button>
        </a>
      </div>
      <div className="bg-gradient-to-b from-[#f6f8fc] to-[#FFFFFF] w-full py-16">
        <section className="grid sm:grid-cols-3 gap-y-6 ">
          <div className="flex flex-col items-center">
            <img alt="reliable team" width="60px" src={reliableTeamIcon} />
            <h3>Reliable & Creative Team</h3>
            <p>
              We make detailed books with a creative view to offer the best
              experience and instructions to our customers
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              alt="great customer support"
              width="60px"
              src={customerSupportIcon}
            />
            <h3>24/7 Customer Support</h3>
            <p>
              Our friendly team is here to help & answer any questions you may
              have
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              alt="Satisfaction is guaranteed"
              width="60px"
              src={satisfactionIcon}
            />
            <h3>Satisfaction Guaranteed</h3>
            <p>
              We stand by our high quality products & your satisfaction is
              guaranteed
            </p>
          </div>
        </section>
        {/* If You don't want this, remove it  */}
        <section className="space-y-10">
          <h1>Bundle & Save UP!</h1>
          <div className="flex justify-center flex-col sm:flex-row">
            <img alt="Crochet Bundle" className="w-[400px]" src={bundleImage} />
            <ul className="text-left flex flex-col justify-between">
              <li>
                <p>
                  <img
                    alt="video tutorials"
                    className="inline-block"
                    src={checkIcon}
                  />
                  Videos tutorials
                </p>
              </li>
              <li>
                <p>
                  <img
                    alt="Step-By-Step Instructions"
                    className="inline-block"
                    src={checkIcon}
                  />{" "}
                  Step-By-Step Instructions
                </p>
              </li>
              <li>
                <p>
                  <img
                    alt="Asteria Crochet Pattern PDF"
                    className="inline-block"
                    src={checkIcon}
                  />{" "}
                  PDF Asteria pattern
                </p>
              </li>
              <li>
                <p>
                  <img
                    alt="Foliage Crochet Pattern PDF"
                    className="inline-block"
                    src={checkIcon}
                  />{" "}
                  PDF Foliage Pattern
                </p>
              </li>
              <li>
                <p>
                  <img
                    alt="Lorien Crochet Pattern PDF"
                    className="inline-block"
                    src={checkIcon}
                  />{" "}
                  PDF Lorien Pattern
                </p>
              </li>
              <li>
                <p>
                  <img
                    alt="Fernanda Crochet Pattern PDF"
                    className="inline-block"
                    src={checkIcon}
                  />{" "}
                  PDF Fernanda Pattern
                </p>
              </li>
            </ul>
          </div>
          <Link to="/bundle">
            <button className="bg-[#223628] text-[#FFFFFF] py-[14px] px-[40px] rounded-full font-bold">
              Christmas Sale on Bundle for 12.99$
            </button>
          </Link>
        </section>
        {/* it ends here  */}
      </div>
      <section className="">
        <section className="bg-[#f6f8fc] flex flex-col items-center  text-center w-full py-16">
          <img alt={`${mainData.companyName} logo`} src={Logo} width="200px" />
          <h1 className="text-greenColor">About us</h1>
          <p className="max-w-[900px]">{mainData.aboutUsGeneral}</p>
        </section>
        <Footer />
      </section>
    </div>
  );
}
