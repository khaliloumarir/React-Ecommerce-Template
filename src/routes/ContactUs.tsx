import Header from "../components/Header";
import Footer from "../components/Footer";
import { mainData } from "../data/mainData";
export default function ContactUs() {
  return (
    <div>
      <Header />
      <h1>How to contact us</h1>
      <p>Please either use the facebook Chat to talk to us</p>
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
