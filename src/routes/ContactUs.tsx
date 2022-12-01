import Header from "../components/Header";
import Footer from "../components/Footer";
import { mainData } from "../data/mainData";
export default function ContactUs() {
  return (
    <div>
      <Header />
      <h1>How to contact us</h1>
      <p>
        Please either Talk to us in our Facebook Page :{" "}
        <a
          href={mainData.facebookPage}
          className="text-blue-500 underline cursor-pointer"
        >
          Facebook Page
        </a>{" "}
      </p>
      <p>
        Or Send us an email at{" "}
        <span className="font-bold"> {mainData.email}</span>{" "}
      </p>
      <p>
        We will reply Within 1 hour if it is during our work time, if it's not
        during our work time you will get a message back ASAP
      </p>
      <Footer />
    </div>
  );
}
