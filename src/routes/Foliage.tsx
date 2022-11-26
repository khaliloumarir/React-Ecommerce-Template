import Header from "../components/Header";
import ProductBody from "../components/ProductBody";
import ProductDescription from "../components/ProductDescription";
import foliageBook from "../assets/images/Foliage-book-cover.webp";
import { foliageReviews } from "../data/reviews";
import img1 from "../assets/images/Foliage-1.webp";
import img2 from "../assets/images/Foliage-2.webp";
import img3 from "../assets/images/Foliage-3.webp";
import MainArgument from "../components/product-description-components/MainArgument";
import RightArgument from "../components/product-description-components/RightArgument";
import foliageMain from "../assets/images/Foliage-main.webp";
import foliageMain2 from "../assets/images/Foliage-main-2.webp";
import { foliageDownload } from "../data/downloadData";
export default function Foliage() {
  const argumentOne: { title: string; description: string }[] = [
    {
      title: "For Doily",
      description:
        "Maxi Altin Basak (в 100 г – 565 м), hook 1,75 mm. Finished size: 37 сm. Or other materials, at your discretion. ",
    },
    {
      title: "For Carpet",
      description:
        "polyester cord 3mm – 1800m, hook – 5mm, finished size: 1,1m",
    },
    {
      title: "Other Materials",
      description: "Or other materials, at your discretion",
    },
  ];
  return (
    <div className=" space-y-20">
      {/* Includes all the body details, this is where the user lands in */}
      <Header />
      <section className="sm:px-8">
        <ProductBody
          downloadFile={foliageDownload}
          productImage={foliageBook}
          reviews={foliageReviews}
          productTitle="Foliage Crochet Pattern PDF"
          priceToCompare={9.99}
          productPrice={7.99}
          productDescription="The Foliage pattern is a very beautiful and easy crochet pattern. that will serve not as just a cute gift or as a pleasant decoration for your home. but as family heirloom to give to be cherished by your kids and there kids to come! "
        />
        <ProductDescription
          reviews={foliageReviews}
          img1={img1}
          img2={img2}
          img3={img3}
        >
          <section className="text-center flex flex-col items-center space-y-16">
            <MainArgument
              title="Create beautiful shapes without needing a machine or years of
          experience!"
              paragraph="Are you thinking of taking crochet as a hobby? but you´re too
        intimidated by the complex patterns that you see on the internet? with
        this Step by step guide you´ll find yourself creating patterns of a
        professional level! We will be going step by step through this cute
        crochet pattern with clear photos and instructions that will teach you
        the basics of this stunning pattern!"
            >
              <img src={foliageMain} />
            </MainArgument>
            <RightArgument
              title="Suggested Materials"
              productArguments={argumentOne}
            >
              <img src={foliageMain2} />
            </RightArgument>
          </section>
        </ProductDescription>
      </section>
    </div>
  );
}
