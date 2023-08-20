import Header from "./components/Header";
import ProductBody from "./components/ProductBody";
import ProductDescription from "./components/ProductDescription";
import { asteriaReviews } from "./data/reviews";
// import asteriaBook from "./assets/images/asteria-book.webp";
import asteriaBookCover from "./assets/images/asteria-book.webp";
import asteriaBookCoverSmall from "./assets/images/asteria-book-small.webp";
import img1 from "./assets/images/arg-list-1.webp";
import img2 from "./assets/images/arg-list-2.webp";
import img3 from "./assets/images/arg-list-3.webp";
// import img4 from "./assets/images/asteria_carousel_1.webp";
// import img5 from "./assets/images/asteria_carousel_2.webp";
// import img6 from "./assets/images/asteria_carousel_3.webp";
import MainArgument from "./components/product-description-components/MainArgument";
import RightArgument from "./components/product-description-components/RightArgument";
import video1 from "./assets/videos/opopop_480x480.mp4";
import video2 from "./assets/videos/700kib_480x480.mp4";
import { downloads } from "./data/downloadData";

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
          downloadFile={"cb93191c-b4c9-414d-915e-f246b4d42ed1"}
          paymentUrl={"https://mwares.gumroad.com/l/asteria-crochet-pattern"}
          productImage={asteriaBookCover}
          productSmallImage={asteriaBookCoverSmall}
          reviews={asteriaReviews}
          // productImages={[img6, img2, img3, img4, img5]}
          productTitle="Asteria Crochet Pattern MarionWares"
          deal={true}
          priceToCompare={9.99}
          productPrice={6.99}
          productDescription="Asteria Crochet Pattern – a masterpiece that combines elegance and creativity. Our
          Asteria Crochet Pattern is meant to inspire and assist you through the crafting process,
          whether you're an expert crocheter or a novice eager to learn.
          Are you passionate about crochet and looking for an exquisite and unique project? Look
          no further! At MarionWares, we're delighted to present this exclusive
          "
        />
        <ProductDescription
          productTitle="Asteria Crochet Pattern"
          reviews={asteriaReviews}
          img1={img1}
          img2={img2}
          img3={img3}
        >
          <section className="text-center flex flex-col items-center space-y-16">
            <MainArgument
              title="Create beautiful shapes without needing a machine or years of
          experience!"
              paragraph="The Asteria Crochet Pattern has a one-of-a-kind and intriguing pattern with
              complex intricacies and lovely motifs. It includes extensive step-by-step tutorials
              that accommodate different learning speeds. Visual learners will benefit from
              high-quality video tutorials that accompany the pattern and clearly demonstrate
              each technique. It is appropriate for all skill levels, from beginners to skilled
              crocheters. After purchase, the pattern is instantly available as a PDF download,
              allowing for quick crafting without shipping delays.
              "
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
