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
interface CrochetPattern {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  english?: boolean;
}
export type { review, downloadDate, Downloads, CrochetPattern };
