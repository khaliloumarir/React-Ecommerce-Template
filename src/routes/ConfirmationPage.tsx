import Header from "../components/Header";
import Footer from "../components/Footer";
import thankYouImage from "../assets/images/tky.webp";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase-config";
import { downloads } from "../data/downloadData";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { downloadDate } from "../interfaces";
import AlertDialogSlide from "../components/Alert-Dialog";
export default function ConfirmationPage() {
  let { uuid } = useParams();
  const [downloadUrl, setDownloadUrl] = useState<string>("");
  const [product, setProduct] = useState<downloadDate>();
  useEffect(() => {
    if (uuid !== undefined) {
      setProduct(downloads[uuid]);
      const pdfRef = ref(
        storage,
        `${downloads[uuid].downloadName}.${downloads[uuid].type}`
      );
      getDownloadURL(pdfRef)
        .then((url) => {
          //Open the url in a new window
          setDownloadUrl(url);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Header />
      {isOpen && <AlertDialogSlide open={isOpen} setOpen={setIsOpen} />}
      <div className="flex justify-between flex-col sm:flex-row space-y-6 sm:space-x-6">
        <section className="flex flex-col justify-center">
          <h1>Order Successfully Placed</h1>
          <p>
            Thank you for your purchase, Please press the download button for
            the download to start
          </p>
          <a
            href={downloadUrl}
            className="bg-[#223628] text-[#FFFFFF] py-[14px] px-[40px] rounded-full font-bold self-start"
          >
            Download {product?.productName} Crochet Pattern
          </a>
          <span className="text-md max-w-[500px]">
            Please Contact us at{" "}
            <b className="text-blue-600">sellaprod.contact@gmail.com</b> if you
            are having difficulties downloading the pdfs
          </span>
        </section>
        <img width="500px" src={thankYouImage} />
      </div>

      <Footer />
    </>
  );
}
