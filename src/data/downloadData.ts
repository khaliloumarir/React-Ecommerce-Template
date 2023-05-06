import { downloadDate, Downloads } from "../interfaces";
const fernandaDownload: downloadDate = {
  productName: "Fernanda",
  downloadName: "Marion Wares - Fernanda pattern",
  type: "pdf",
  paymentUrl: "https://buy.stripe.com/dR64hP4zQbEe2bu4gi",
};
const asteriaDownload: downloadDate = {
  productName: "Asteria",
  downloadName: "Marion Wares - Asteria pattern",
  type: "pdf",
  paymentUrl: "https://buy.stripe.com/6oE29Hfeu23E2buaEE",
};
const foliageDownload: downloadDate = {
  productName: "Foliage",
  downloadName: "Marion Wares - Foliage pattern",
  type: "pdf",
};
const lorienDownload: downloadDate = {
  productName: "Lorien",
  downloadName: "Marion Wares - Lorien pattern",
  type: "pdf",
  paymentUrl: "https://buy.stripe.com/aEU7u1aYe7nY5nGeUX",
};
const bundleDownload: downloadDate = {
  productName: "Crochet Bundle",
  downloadName:
    "Marion Wares - Bundle of Asteria & Fernanda & Foliage & Lorien",
  type: "zip",
  paymentUrl: "https://buy.stripe.com/fZecOleaq4bMbM4dQR",
};
const asteriaDeal: downloadDate = {
  productName: "Asteria And Foliage",
  downloadName: "Marion Wares Asteria And Foliage pattern",
  type: "zip",
};
const asteriaAndUltiaDownload: downloadDate = {
  productName: "Asteria And Ultia",
  downloadName: "Marion Wares Asteria And Ultia Pattern",
  type: "zip",
};
const asteriaAndUltiaAndWashclothDownload: downloadDate = {
  productName: "Asteria, Ultia And Washcloth crochet",
  downloadName: "Marion Wares Asteria and Ulita and Washcloth",
  type: "zip",
};

const downloads: Downloads = {
  "595246ff-fc12-4108-890f-dfb16fa2389b": fernandaDownload,
  "cb93191c-b4c9-414d-915e-f246b4d42ed1": asteriaDownload,
  "3dcea280-9264-475d-8112-02da87a43d40": foliageDownload,
  "1ed3dc63-f20d-4aa2-b39c-0839f988b7d6": lorienDownload,
  "df04759b-5080-4488-b6a5-8a55d2f395cf": bundleDownload,
  "3b16e004-2015-4eef-a151-37a5328932e1": asteriaDeal,
  "cb63e41d-4d10-4f78-ad23-77712b1ba1dd": asteriaAndUltiaDownload,
  "a1c3aee0-3237-4c70-b497-a7197cf4ae49": asteriaAndUltiaAndWashclothDownload,
};
export {
  fernandaDownload,
  asteriaDownload,
  foliageDownload,
  lorienDownload,
  bundleDownload,
  asteriaDeal,
  asteriaAndUltiaDownload,
  asteriaAndUltiaAndWashclothDownload,
  downloads,
};
