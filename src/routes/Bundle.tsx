import Header from "../components/Header";
import ProductBody from "../components/ProductBody";
import ProductDescription from "../components/ProductDescription";
import lorienBook from "../assets/images/Book-Bundle-1.webp";
import { asteriaReviews } from "../data/reviews";
import img1 from "../assets/images/arg-list-2.webp";
import img2 from "../assets/images/Lorien-2.webp";
import img3 from "../assets/images/foliage-3.webp";
import { bundleDownload } from "../data/downloadData";

export default function Bundle() {
  return (
    <div className=" space-y-20">
      {/* Includes all the body details, this is where the user lands in */}
      <Header />
      {/* <div className="text-center bg-red-600 py-8">
        <p className="text-4xl text-white">
          New year's Deal, Save -14.99$ On Bundle
        </p>
      </div> */}
      <section className="sm:px-8">
        <ProductBody
          downloadFile={bundleDownload}
          productImage={lorienBook}
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
        ></ProductDescription>
      </section>
    </div>
  );
}
