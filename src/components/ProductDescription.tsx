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
  productTitle,
  reviews,
  img1,
  img2,
  img3,
  children,
}: {
  productTitle?: string;
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
        "After your payment has been verified, you will be sent to the download page.",
    },
    {
      icon: downloadIcon,
      title: "Download the PDF",
      description:
        "You will be routed to the Download Page, where you can directly download the PDF.",
    },
    {
      icon: crochetingIcon,
      title: "Begin Crocheting",
      description:
        "Open the pdf and begin crocheting gorgeous doilies for your house using our detailed step-by-step instructions.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center text-center  ">
      <section className=" bg-gradient-to-b from-[#f6f8fc] to-[#FFFFFF] w-full flex flex-col items-center py-16 space-y-16 ">
        <section>
          <h2 className="">
            Why Choose Our {productTitle ?? "Crochet patterns"}:
          </h2>
          <p className="max-w-[760px] text-center ">
            These are some of the photos taken by our clients after following
            the directions in the book!
          </p>
        </section>

        <section className="flex lg:space-x-6 lg:flex-row flex-col justify-center items-center space-y-6 lg:space-y-0">
          <img
            loading="lazy"
            alt="showcase one"
            width="360px"
            height="360px"
            src={img1}
          />
          <img
            loading="lazy"
            alt="showcase two"
            width="360px"
            height="360px"
            src={img2}
          />
          <img
            loading="lazy"
            alt="showcase three"
            width="360px"
            height="360px"
            src={img3}
          />
        </section>
        {children}
      </section>

      {/* Important Section */}
      <ImportantSection importantArgument={importantArgument} />
      {/* Reviews Section */}
      <div className="space-y-10 py-16">
        <section>
          <h1>Pattern Evaluations</h1>
          <p>Check out what our readers are saying.</p>
        </section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 place-content-center gap-10 ">
          {reviews.map((review) => {
            return (
              <ReviewComponent
                pdtImg={review.pdtImg}
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
            <img
              loading="lazy"
              alt="Team that is Dependable and Creative"
              width="60px"
              height="60px"
              src={reliableTeamIcon}
            />
            <h3>Team that is Dependable and Creative</h3>
            <p>
              We create thorough books with a creative eye in order to provide
              our clients with the finest experience and guidance possible.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              loading="lazy"
              alt="24/7 Customer Service"
              width="60px"
              height="60px"
              src={customerSupportIcon}
            />
            <h3>24/7 Customer Service</h3>
            <p>
              Customer Service is available around the clock. Our friendly team
              is here to help and answer any questions you may have.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              loading="lazy"
              alt="Guaranteed Customer Satisfaction"
              width="60px"
              height="60px"
              src={satisfactionIcon}
            />
            <h3>Guaranteed Customer Satisfaction</h3>
            <p>
              We stand behind our high-quality items and guarantee your
              pleasure.
            </p>
          </div>
        </section>
        {/* If You don't want this, remove it  */}
        <section className="space-y-10">
          <h1>Bundle & Save UP!</h1>
          <div className="flex justify-center flex-col sm:flex-row">
            <img
              loading="lazy"
              alt="Crochet Bundle"
              src={bundleImage}
              width="400px"
              height="254px"
            />
            <ul className="text-left flex flex-col justify-between">
              <li>
                <p>
                  <img
                    loading="lazy"
                    alt="instructional videos"
                    className="inline-block"
                    src={checkIcon}
                  />{" "}
                  Instructional videos
                </p>
              </li>
              <li>
                <p>
                  <img
                    loading="lazy"
                    alt="Instructions in Steps"
                    className="inline-block"
                    src={checkIcon}
                  />{" "}
                  Instructions in Steps
                </p>
              </li>
              <li>
                <p>
                  <img
                    loading="lazy"
                    alt="Asteria Crochet Pattern PDF"
                    className="inline-block"
                    src={checkIcon}
                  />{" "}
                  Asteria crochet pattern PDF
                </p>
              </li>
              <li>
                <p>
                  <img
                    loading="lazy"
                    alt="Foliage Crochet Pattern PDF"
                    className="inline-block"
                    src={checkIcon}
                  />{" "}
                  Foliage crochet Pattern PDF
                </p>
              </li>
              <li>
                <p>
                  <img
                    loading="lazy"
                    alt="Lorien Crochet Pattern PDF"
                    className="inline-block"
                    src={checkIcon}
                  />{" "}
                  Lorien Crochet Pattern PDF
                </p>
              </li>
              <li>
                <p>
                  <img
                    loading="lazy"
                    alt="Fernanda Crochet Pattern PDF"
                    className="inline-block"
                    src={checkIcon}
                  />{" "}
                  Fernanda Crochet Pattern PDF
                </p>
              </li>
            </ul>
          </div>
          <Link to="/bundle">
            <button className="bg-[#223628] text-[#FFFFFF] py-[14px] px-[40px] rounded-full font-bold">
              Buy Bundle for 12.99$
            </button>
          </Link>
        </section>
        {/* it ends here  */}
      </div>
      <section className="">
        <section className="bg-[#f6f8fc] flex flex-col items-center  text-center w-full py-16">
          <img
            loading="lazy"
            alt={`${mainData.companyName} logo`}
            src={Logo}
            width="200px"
            height="100px"
          />
          <h1 className="text-greenColor">About us</h1>
          <p className="max-w-[900px]">{mainData.aboutUsGeneral}</p>
        </section>
        <Footer />
      </section>
    </div>
  );
}
