import Header from "./components/Header";
import ProductBody from "./components/ProductBody";
import ProductDescription from "./components/ProductDescription";
import { asteriaReviews } from "./data/reviews";
import asteriaBook from "./assets/images/asteria-book.webp";
import img1 from "./assets/images/arg-list-1.webp";
import img2 from "./assets/images/arg-list-2.webp";
import img3 from "./assets/images/arg-list-3.webp";
import MainArgument from "./components/product-description-components/MainArgument";
import RightArgument from "./components/product-description-components/RightArgument";
import video1 from "./assets/videos/opopop_480x480.mp4";
import video2 from "./assets/videos/700kib_480x480.mp4";
import { asteriaDownload } from "./data/downloadData";

function App() {
  const argumentOne: { title: string; description: string }[] = [
    {
      title: "Knits",
      description:
        "Alize Bella Ombre Batik, 250 m/273 yds in 100 g, hook 1.75 mm, yardage – about 130 g; finished size – 36 cm/14 inches.",
    },
    {
      title: "Materials",
      description:
        "Cotton thread #10, in 50 g 280 m/306 yds, hook 1.75 mm, yardage – about 110 g; finished size – 39 cm/15.5 inches.",
    },
    {
      title: "Details",
      description:
        "Polyester Cord 3 mm, hook 4.50 mm, yardage – about 1800 m/1968 yds, finished size – 100 cm.",
    },
  ];
  return (
    <div className=" space-y-20">
      {/* Includes all the body details, this is where the user lands in */}
      <Header />
      <section className="sm:px-8 px-4">
        <ProductBody
          downloadFile={asteriaDownload}
          productImage={asteriaBook}
          reviews={asteriaReviews}
          productTitle="Asteria Crochet Pattern PDF"
          priceToCompare={9.99}
          productPrice={5.99}
          productDescription="the Asteria pattern is a very beautiful and easy crochet pattern. that will serve not as just a cute gift or as a pleasant decoration for your home. but as family heirloom to give to be cherished by your kids and there kids to come!"
        />
        <ProductDescription
          reviews={asteriaReviews}
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
              <video className="" autoPlay loop muted playsInline>
                <source src={video1} type="video/mp4" />
              </video>
            </MainArgument>
            <RightArgument
              title="Suggested Materials"
              productArguments={argumentOne}
            >
              <video
                className=""
                width="292px"
                height="351px"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={video2} type="video/mp4" />
              </video>
            </RightArgument>
          </section>
        </ProductDescription>
      </section>
    </div>
  );
}

export default App;
