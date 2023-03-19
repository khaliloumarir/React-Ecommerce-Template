import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export function ErrorPage() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Marion Wares - Page do not exist 404</title>
        <meta
          name="description"
          content="the Asteria pattern is a very beautiful and easy crochet pattern. that will serve not as just a cute gift or as a pleasant decoration for your home. but as family heirloom to give to be cherished by your kids and there kids to come!"
        />
        <meta name="author" content="MarionWares" />
      </Helmet>
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  Looks like this page doesn't exist
                </h1>
                <p className="my-2 text-gray-800">
                  Sorry about that! Please visit our hompage to get where you
                  need to go.
                </p>
                <Link to="/">
                  <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-greenColor text-white hover:bg-greenColor focus:outline-none focus:ring-2 focus:greenColor focus:ring-opacity-50">
                    Take me there!
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <img
                alt="error 404"
                loading="lazy"
                src="https://i.ibb.co/G9DC8S0/404-2.png"
              />
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
