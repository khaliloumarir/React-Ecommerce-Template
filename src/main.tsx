import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ReturnRefund from "./routes/Return&Refund";
import CookiePolicy from "./routes/CookiePolicy";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import TermsOfService from "./routes/TermsOfService";
import ContactUs from "./routes/ContactUs";
import ConfirmationPage from "./routes/ConfirmationPage";
import Foliage from "./routes/Foliage";
import Lorien from "./routes/Lorien";
import Fernanda from "./routes/Fernanda";
import Bundle from "./routes/Bundle";
import ScrollToTop from "./components/ScrollToTop";
import Patterns from "./routes/Patterns";
import Mermaid from "./routes/Mermaid";
import Blog from "./routes/Blog";
import DogPattern from "./routes/DogPattern";
import { ErrorPage } from "./routes/ErrorPage";
import SignIn from "./routes/Signin";
import VideosPage from "./components/VideosPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ScrollToTop>
        <App />
      </ScrollToTop>
    ),
  },
  {
    path: "/foliage",
    element: (
      <ScrollToTop>
        <Foliage />
      </ScrollToTop>
    ),
  },
  {
    path: "/lorien",
    element: (
      <ScrollToTop>
        <Lorien />
      </ScrollToTop>
    ),
  },
  {
    path: "/fernanda",
    element: (
      <ScrollToTop>
        <Fernanda />
      </ScrollToTop>
    ),
  },
  {
    path: "/bundle",
    element: (
      <ScrollToTop>
        <Bundle />
      </ScrollToTop>
    ),
  },
  {
    path: "return-refund",
    element: (
      <ScrollToTop>
        <ReturnRefund />
      </ScrollToTop>
    ),
  },
  {
    path: "cookie-policy",
    element: (
      <ScrollToTop>
        <CookiePolicy />
      </ScrollToTop>
    ),
  },
  {
    path: "privacy-policy",
    element: (
      <ScrollToTop>
        <PrivacyPolicy />
      </ScrollToTop>
    ),
  },
  {
    path: "terms-of-service",
    element: (
      <ScrollToTop>
        <TermsOfService />
      </ScrollToTop>
    ),
  },
  {
    path: "patterns",
    element: (
      <ScrollToTop>
        <Patterns />
      </ScrollToTop>
    ),
  },
  {
    path: "merbabies",
    element: (
      <ScrollToTop>
        <Mermaid />
      </ScrollToTop>
    ),
  },
  {
    path: "contact-us",
    element: (
      <ScrollToTop>
        <ContactUs />
      </ScrollToTop>
    ),
  },
  {
    path: "confirmation/:product/:downloadName/:type",
    element: (
      <ScrollToTop>
        <ConfirmationPage />
      </ScrollToTop>
    ),
  },
  {
    path: "blog/asteria-crochet-pattern",
    element: (
      <ScrollToTop>
        <Blog />
      </ScrollToTop>
    ),
  },
  {
    path: "crochet-dog-sweater-pattern",
    element: (
      <ScrollToTop>
        <DogPattern />
      </ScrollToTop>
    ),
  },
  // {
  //   path: "sign-in",
  //   element: (
  //     <ScrollToTop>
  //       <SignIn />
  //     </ScrollToTop>
  //   ),
  // },

  // {
  //   path: "videos",
  //   element: (
  //     <ScrollToTop>
  //       <VideosPage />
  //     </ScrollToTop>
  //   ),
  // },
  {
    path: "*",
    element: (
      <ScrollToTop>
        <ErrorPage />
      </ScrollToTop>
    ),
  },
  // {
  //   path: "confirmation/:product",
  //   element: <ConfirmationPage />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
