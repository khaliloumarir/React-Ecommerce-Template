import Header from "../components/Header";
import ProductBody from "../components/ProductBody-customized";
import ProductDescription from "../components/ProductDescription-customized";
import foliageBook from "../assets/images/Crochet-Dog-Sweater-Pattern.webp";
import { mermaidReviews } from "../data/reviews";
import img1 from "../assets/dog/dog-1.webp";
import img2 from "../assets/dog/dog-2.webp";
import img3 from "../assets/dog/dog-3.webp";
import MainArgument from "../components/product-description-components/MainArgument";
import foliageMain from "../assets/dog/dog-4.webp";
import foliageMain2 from "../assets/dog/dog-5.webp";
import { foliageDownload } from "../data/downloadData";

export default function DogPattern() {
  const argumentOne: { title: string; description: string }[] = [
    {
      title: "Gift Givers",
      description:
        "who are looking for a unique and special gift for a child or loved one",
    },
    {
      title: "Looking for a new challenge",
      description:
        "The pattern is also a great way to challenge yourself as a crocheter",
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
      <section className="sm:px-8 px-4">
        <ProductBody
          downloadFile={foliageDownload}
          productImage={foliageBook}
          reviews={mermaidReviews}
          productTitle="Crochet Dog Sweater Pattern - Create a Customized Dog Sweater for Your Four-Legged Friend with This Crochet Pattern!"
          priceToCompare={8.11}
          productPrice={6.99}
          productDescription="Crochet Dog Sweater Pattern - A dog sweater crochet pattern is a set of instructions that guides you in making a cozy and comfortable garment for your furry companion. This type of pattern is perfect for those who want to keep their dogs warm during the colder months, or for pets who are sensitive to the cold."
        />
        <ProductDescription
          reviews={mermaidReviews}
          img1={img1}
          img2={img2}
          img3={img3}
        >
          <section className="text-center flex flex-col items-center space-y-16">
            <MainArgument
              title="Don't Let the Cold Bother Your Dog"
              paragraph="Crafted with love and care, this easy-to-follow pattern provides all the guidance you need to create a cozy and comfortable sweater for your four-legged companion. Whether your dog is sensitive to the cold, or just in need of a little extra warmth, this pattern is the perfect solution."
            >
              <img
                className="w-[500px]"
                alt="crochet dog sweater pattern red color"
                src={foliageMain}
              />
            </MainArgument>
            {/* <RightArgument
                  title="This pattern is perfect for those:"
                  productArguments={argumentOne}
                >
                  <img src={foliageMain2} />
                </RightArgument> */}
            <MainArgument
              title="Get Ready for Winter with This Cute and Comfy Dog Sweater Crochet Pattern!"
              paragraph="With a range of sizes and styles to choose from, this dog sweater crochet pattern allows you to create a customized garment that fits your pet's unique shape and personality. Plus, with a variety of colors and textures to choose from, you can let your creativity run wild and create a one-of-a-kind sweater that is as stylish as it is functional."
            >
              <img
                className="w-[500px]"
                alt="crochet dog sweater pattern purple color"
                src={foliageMain2}
              />
            </MainArgument>
          </section>
        </ProductDescription>
      </section>
    </div>
  );
}
