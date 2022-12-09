import React, { useState, useEffect, useRef } from "react";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import circleFillIcon from "../assets/icons/circle-fill.svg";
import ReviewBubble from "./ReviewBubble";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
//data

import { review, downloadDate } from "../interfaces";
import { mainData } from "../data/mainData";

declare global {
  interface Window {
    // ⚠️ notice that "Window" is capitalized here
    gtag: any;
  }
}
export default function ProductBody({
  productTitle,
  priceToCompare,
  productPrice,
  productDescription,
  reviews,
  productImage,
  downloadFile,
  saleLine,
}: {
  productTitle: string;
  priceToCompare: number;
  productPrice: number;
  productDescription: string;
  reviews: review[];
  productImage: string;
  downloadFile: downloadDate;
  saleLine?: string;
}) {
  const navigate = useNavigate();
  const timeoutRef: React.MutableRefObject<any> = useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  const [reviewBubble, setReviewBubble]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(0);
  const [showPaypal, setShowPaypal]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setReviewBubble(reviewBubble + 1 > 2 ? 0 : reviewBubble + 1);
    }, 3000);
    return () => {
      resetTimeout();
    };
  }, [reviewBubble]);

  const initialOptions = {
    "client-id":
      "AS5Yyek_YeG8f9c_nsqQZ2uYyjyHGJJyUUcPrjHUdPavOMAdTP7ajGvFDqMb7FJTDFkdbtG60sSUuFon",
    currency: "USD",
    intent: "capture",
  };
  return (
    <div className="flex justify-between sm:flex-row flex-col space-y-4">
      <Helmet>
        <title>{productTitle}</title>
        <meta name="description" content={productDescription} />
        <meta name="author" content={mainData.companyName} />
      </Helmet>
      {/* Product Details */}
      <div className="sm:basis-1/2 sm:space-y-6 space-y-2">
        <h1 className="text-4xl font-bold text-header ">{productTitle}</h1>

        <section>
          <p className="line-through text-[#8A0000]">{priceToCompare}$</p>
          {saleLine?.length && (
            <p className="text-[#8A0000] font-medium">{saleLine}</p>
          )}
          <p className="text-greenColor font-bold">
            {productPrice}$ - In stock (25 Sold)
          </p>
        </section>

        <p>{productDescription}</p>
        {showPaypal == false ? (
          <button
            onClick={() => {
              setShowPaypal(!showPaypal);
            }}
            className="bg-[#223628] text-[#FFFFFF] py-[14px] px-[40px] rounded-full font-bold"
          >
            Get {productTitle} for {productPrice}$
          </button>
        ) : null}
        {/* ShowPaypal if set to true, then deferLoading is set to False to load Paypal SDK */}
        <PayPalScriptProvider
          deferLoading={!showPaypal}
          options={initialOptions}
        >
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: `${productPrice}`,
                    },
                    description: productTitle,
                  },
                ],
              });
            }}
            onApprove={(data, actions: any) => {
              return actions.order.capture().then((details: any) => {
                navigate(
                  `/confirmation/${downloadFile.productName}/${downloadFile.downloadName}/${downloadFile.type}`
                );
              });
            }}
            style={{ layout: "vertical" }}
          />
        </PayPalScriptProvider>

        <ReviewBubble review={reviews[reviewBubble]} />

        {/* Circle bubbles section */}
        <section className="flex justify-center space-x-2 ">
          {new Array(3).fill("").map((data: string, index: number) => {
            return (
              <img
                key={`image-${index}`}
                alt={productTitle}
                onClick={() => {
                  setReviewBubble(index);
                }}
                className={`${
                  index === reviewBubble ? "opacity-100" : "opacity-50"
                } cursor-pointer`}
                width="10px"
                height="10px"
                src={circleFillIcon}
              />
            );
          })}
        </section>
        {/* End -- Circle bubbles section */}
      </div>
      {/* Product Image */}
      <div>
        <img
          loading="lazy"
          className="sm:basis-1/2"
          src={productImage}
          width="500px"
          alt="book cover"
        />
      </div>
    </div>
  );
}
