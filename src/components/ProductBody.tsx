import React, { useState, useEffect, useRef } from "react";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import circleFillIcon from "../assets/icons/circle-fill.svg";
import ReviewBubble from "./ReviewBubble";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import spinner from "../assets/icons/arrow-repeat.svg";
import PositionedSnackbar from "./SnackBar";
//data

import { review, downloadDate } from "../interfaces";
import { mainData } from "../data/mainData";
export default function ProductBody({
  productTitle,
  priceToCompare,
  productPrice,
  productDescription,
  reviews,
  productImage,
  downloadFile,
  paymentUrl,
  productImages,
  productSmallImage,
  deal,
}: {
  productTitle: string;
  productSmallImage?: string;
  priceToCompare: number;
  productPrice: number;
  productDescription: string;
  reviews: review[];
  productImage: string;
  downloadFile: string;
  productImages?: string[];
  deal?: boolean;
  paymentUrl?: string;
}) {
  const [showPaypal, setShowPaypal]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false);
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
  const [openBundle, setOpenBundle] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/bundle") {
      setOpenBundle(false);
    } else {
      setOpenBundle(true);
    }
  }, [location]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowPaypal(true);
  //   }, 3000);
  // }, []);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setReviewBubble(reviewBubble + 1 > 2 ? 0 : reviewBubble + 1);
    }, 3000);
    return () => {
      resetTimeout();
    };
  }, [reviewBubble]);
  // const [seconds, setSeconds] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const currentTimestamp = Math.floor(Date.now() / 1000);
  //     const targetTimestamp = Math.floor(
  //       new Date("2023-04-01").getTime() / 1000
  //     );
  //     setSeconds(targetTimestamp - currentTimestamp);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  // const days = Math.floor(seconds / 86400);
  // const hours = Math.floor((seconds % 86400) / 3600);
  // const minutes = Math.floor((seconds % 3600) / 60);
  // const remainingSeconds = seconds % 60;
  //AUasW91YfQIZDvWONOkRjMBFR99cR9F9lqK1mbHnstD_RIMUhT4_K2csZ2SxNta4dsEmXn7I9rQ3bpfQ
  //AS5Yyek_YeG8f9c_nsqQZ2uYyjyHGJJyUUcPrjHUdPavOMAdTP7ajGvFDqMb7FJTDFkdbtG60sSUuFon
  const initialOptions = {
    "client-id":
      "AUasW91YfQIZDvWONOkRjMBFR99cR9F9lqK1mbHnstD_RIMUhT4_K2csZ2SxNta4dsEmXn7I9rQ3bpfQ",
    currency: "USD",
    intent: "capture",
  };
  return (
    <div className="flex justify-between sm:flex-row flex-col space-y-4 md:space-x-4 lg:space-x-0">
      <Helmet>
        <title>{productTitle}</title>
        <meta name="description" content={productDescription} />
        <meta name="author" content={mainData.companyName} />
      </Helmet>
      {/* Product Details */}
      <div>
        {productSmallImage ? (
          <img
            className="sm:basis-1/2"
            srcSet={`${productSmallImage} 640w, ${productImage} 1024w`}
            width={500}
            height={388}
            alt="book cover"
          />
        ) : (
          <img
            className="sm:basis-1/2"
            src={productImage}
            width={500}
            height={388}
            alt="book cover"
          />
        )}
      </div>
      <div className="sm:basis-1/2 sm:space-y-6 space-y-2">
        <h1 className="text-4xl font-bold text-header ">{productTitle}</h1>
        <section>
          <p className="line-through text-[#8A0000]">{priceToCompare}$</p>
          {/* {deal && (
            <p className="text-[#8A0000]">
              {days} day, {hours} hours, {minutes} minutes, {remainingSeconds}{" "}
              seconds left
            </p>
          )} */}

          {/* <p className="text-[#8A0000] font-medium">
            Sale could End any minute! Get your PDF Now before it is too late
          </p> */}
          <p className="text-greenColor font-bold">
            {productPrice}$ - In stock (213 Sold)
          </p>
        </section>

        <p>{productDescription}</p>
        {/* className={`${!showPaypal && "grid grid-cols-2 gap-6"} min-h-[100px]`} */}
        <div className="min-h-[100px] flex flex-col ">
          {showPaypal == false ? (
            // https://buy.stripe.com/test_eVa161fYK9501IA000
            //https://buy.stripe.com/6oE29Hfeu23E2buaEE
            <>
              <a
                href={paymentUrl}
                className="bg-[#223628] drop-shadow-md text-[#FFFFFF] flex justify-center py-[14px] px-[40px] items-center  rounded-[3px] font-bold"
              >
                Buy Now
              </a>
              {/* <button
                onClick={() => {
                  setShowPaypal(!showPaypal);
                }}
                className="text-[#223628] border-2 border-greenColor py-[14px] px-[40px] rounded-sm font-bold"
              >
                Buy with Paypal
              </button> */}
            </>
          ) : null}
          {/* {showPaypal == false ? (
            <div className="flex justify-center ">
              <img className="animate-spin" width="48px" src={spinner} />
            </div>
          ) : null} */}

          {/* ShowPaypal if set to true, then deferLoading is set to False to load Paypal SDK */}
          {/*  */}
          {/* <PayPalScriptProvider
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
                  const name = details.payer.name.given_name;
                  const lastName = details.payer.name.surname;
                  console.log(details.payer, "is the buyer");
                  const password = name + lastName;
                  createUserWithEmailAndPassword(
                    auth,
                    details.payer.email_address,
                    password
                  );
                  navigate(`/confirmation/${downloadFile}`);
                });
              }}
              style={{ layout: "vertical" }}
            />
          </PayPalScriptProvider> */}
        </div>
        <ReviewBubble review={reviews[reviewBubble]} />

        {/* Circle bubbles section */}
        <section className="flex justify-center space-x-2 ">
          {new Array(3).fill("").map((data: string, index: number) => {
            return (
              <img
                loading="lazy"
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
      <PositionedSnackbar setOpen={setOpenBundle} open={openBundle} />
      {/* Product Image */}
    </div>
  );
}
