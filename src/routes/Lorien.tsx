import Header from "../components/Header";
import ProductBody from "../components/ProductBody";
import ProductDescription from "../components/ProductDescription";
import lorienBook from "../assets/images/Lorien-Pattern.webp";
import { lorienReviews } from "../data/reviews";
import img1 from "../assets/images/Lorien-1.webp";
import img2 from "../assets/images/Lorien-2.webp";
import img3 from "../assets/images/Lorien-3.webp";
import MainArgument from "../components/product-description-components/MainArgument";
import RightArgument from "../components/product-description-components/RightArgument";
import lorienMain from "../assets/images/Lorien-main.webp";
import lorienMain2 from "../assets/images/Lorien-main-2.webp";
import { lorienDownload } from "../data/downloadData";
export default function Lorien() {
  const argumentOne: { title: string; description: string }[] = [
    {
      title: "Knits",
      description:
        "Alize Bella Ombre Batik, 250 m/273 yds in 100 g, hook 1.75 mm, yardage – about 130 g; finished size – 36 cm/14 inches.",
    },
    {
      title: "Materials",
      description:
        "White(A) – Limol uni (330 m in 50 gr), hook 1,5 mm. Consumption - 100 gr.",
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
          downloadFile={"1ed3dc63-f20d-4aa2-b39c-0839f988b7d6"}
          productImage={lorienBook}
          reviews={lorienReviews}
          productTitle="Lorien Crochet Pattern PDF"
          priceToCompare={12.99}
          productPrice={6.99}
          productDescription="The Lorien crochet pattern is a must have in every home & is an easy crochet pattern. Lorien Crochet is a decoration for tables, on top of the dressers & is a breath-taking pattern for you or your dear who loves to knit  "
        />
        <ProductDescription
          reviews={lorienReviews}
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
              <img width="480px" src={lorienMain} />
            </MainArgument>
            <RightArgument
              title="Suggested Materials"
              productArguments={argumentOne}
            >
              <img width="400px" src={lorienMain2} />
            </RightArgument>
          </section>
        </ProductDescription>
      </section>
    </div>
  );
}
