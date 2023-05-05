interface review {
  userName: string;
  reviewMessage: string;
  image: string;
  pdtImg: string;
}
interface downloadDate {
  productName: string;
  downloadName: string;
  type: string;
  paymentUrl?: string;
}
interface Downloads {
  [key: string]: downloadDate;
}
export type { review, downloadDate, Downloads };
