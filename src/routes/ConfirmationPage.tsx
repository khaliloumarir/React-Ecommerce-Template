import Header from "../components/Header";
import Footer from "../components/Footer";
import thankYouImage from "../assets/images/tky.webp";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase-config";
import { useEffect } from "react";
import { useParams } from "react-router";
export default function ConfirmationPage() {
  let { product, downloadName, type } = useParams();

  return (
    <>
      <Header />
      <div className="flex justify-between flex-col sm:flex-row space-y-6 sm:space-x-6">
        <section className="flex flex-col justify-center">
          <h1>Order Successfully Placed</h1>
          <p>
            Thank you for your purchase, Please press the download button for
            the download to start
          </p>
          <button
            onClick={() => {
              const pdfRef = ref(storage, `${downloadName}.${type}`);
              getDownloadURL(pdfRef)
                .then((url) => {
                  //Open the url in a new window
                  window.location.href = url;
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
            className="bg-[#223628] text-[#FFFFFF] py-[14px] px-[40px] rounded-full font-bold self-start"
          >
            Download {product} Crochet Pattern
          </button>
        </section>
        <img width="500px" src={thankYouImage} />
      </div>
      <Footer />
    </>
  );
}
