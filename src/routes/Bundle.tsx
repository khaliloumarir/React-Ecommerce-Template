import Header from "../components/Header";
import ProductBody from "../components/ProductBody";
import ProductDescription from "../components/ProductDescription";
import bundleBook from "../assets/images/bundle.webp";
import { asteriaReviews } from "../data/reviews";
import img1 from "../assets/images/arg-list-2.webp";
import img2 from "../assets/images/lorien-2.webp";
import img3 from "../assets/images/foliage-3.webp";
import { bundleDownload } from "../data/downloadData";
import MainArgument from "../components/product-description-components/MainArgument";
export default function Bundle() {
  return (
    <div className=" space-y-20">
      <div className="text-center bg-red-700 sm:p-8 p-4  ">
        <p className="sm:text-4xl text-2xl text-white font-bold">
          CHRISTMAS SALE 4 CROCHETS BUNDLE FOR THE PRICE OF ONE! ENDS 12/12/2022
        </p>
      </div>
      {/* Includes all the body details, this is where the user lands in */}
      <Header />

      <section className="sm:px-8">
        <ProductBody
          saleLine="Christmas Sale on, get it before 12/12/2022 , Save 14.99$"
          downloadFile={bundleDownload}
          productImage={bundleBook}
          reviews={asteriaReviews}
          productTitle="Crochet Pattern Bundle"
          priceToCompare={26.99}
          productPrice={12.99}
          productDescription="The Asteria, Foliage, Lorien, Fernanda, pattern is a very beautiful and easy crochet patterns. that will serve not as just a cute gift or as a pleasant decoration for your home. but as family heirloom to give to be cherished by your kids and there kids to come!"
        />
        <ProductDescription
          reviews={asteriaReviews}
          img1={img1}
          img2={img2}
          img3={img3}
        >
          <MainArgument
            paragraph="From Asteria to Foliage, From crochet to pillows to rags. Make a hand-made christmas gift that people appreciate and that involves your hobby and passion"
            title="Everything in One "
          >
            <img className="w-full" src={bundleBook} />
          </MainArgument>
        </ProductDescription>
      </section>
    </div>
  );
}
