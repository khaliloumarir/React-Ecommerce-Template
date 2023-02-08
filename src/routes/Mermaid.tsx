import Header from "../components/Header";
import ProductBody from "../components/ProductBody-customized";
import ProductDescription from "../components/ProductDescription-customized";
import foliageBook from "../assets/images/Merbabies-Amigurumi-PDF.webp";
import { mermaidReviews } from "../data/reviews";
import img1 from "../assets/mermaids/mermaid-1.webp";
import img2 from "../assets/mermaids/mermaid-2.webp";
import img3 from "../assets/mermaids/mermaid-3.webp";
import MainArgument from "../components/product-description-components/MainArgument";
import foliageMain from "../assets/mermaids/mermaid-4.webp";
import foliageMain2 from "../assets/mermaids/mermaid-5.webp";
import { foliageDownload } from "../data/downloadData";
export default function Mermaid() {
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
          productTitle="Merbabies Amigurumi Pattern, crochet merbaby plushie pattern"
          priceToCompare={12.99}
          productPrice={9.99}
          productDescription="The Merbabies Amigurumi Pattern will be an adorable little mermaid, complete with a tail, fins, and a cute little crown. The pattern is designed for those who are familiar with basic crochet techniques and is suitable for both beginner and intermediate crocheters. "
        />
        <ProductDescription
          reviews={mermaidReviews}
          img1={img1}
          img2={img2}
          img3={img3}
        >
          <section className="text-center flex flex-col items-center space-y-16">
            <MainArgument
              title="Get Hooked on the Adorable Merbabies Amigurumi Pattern"
              paragraph="The Merbabies Amigurumi Pattern provides detailed instructions and step-by-step photos to help guide you through the process of creating your own mermaid baby. The pattern includes instructions for making the mermaid's tail, fins, and crown, as well as all of the necessary details to make your mermaid look as realistic as possible. The pattern also includes tips and tricks for stuffing and shaping your amigurumi, so you can be confident in your finished product.  "
            >
              <img src={foliageMain} />
            </MainArgument>
            {/* <RightArgument
              title="This pattern is perfect for those:"
              productArguments={argumentOne}
            >
              <img src={foliageMain2} />
            </RightArgument> */}
            <MainArgument
              title="Step-by-Step Guide to Crafting the Perfect Merbabies Amigurumi"
              paragraph="The Merbabies Amigurumi Pattern provides detailed instructions and step-by-step photos to help guide you through the process of creating your own mermaid baby. The pattern includes instructions for making the mermaid's tail, fins, and crown, as well as all of the necessary details to make your mermaid look as realistic as possible. The pattern also includes tips and tricks for stuffing and shaping your amigurumi, so you can be confident in your finished product.  "
            >
              <img src={foliageMain2} />
            </MainArgument>
          </section>
        </ProductDescription>
      </section>
    </div>
  );
}
