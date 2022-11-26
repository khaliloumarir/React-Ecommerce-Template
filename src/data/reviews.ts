//Asteria
import asteria_one from "../assets/profiles/profile-1.webp";
import asteria_two from "../assets/profiles/profile-2.webp";
import asteria_three from "../assets/profiles/profile-3.webp";
import asteria_four from "../assets/profiles/profile-4.webp";
import asteria_five from "../assets/profiles/profile-5.webp";
//Foliage
import foliage_one from "../assets/foliage-profiles/profile-1.webp";
import foliage_two from "../assets/foliage-profiles/profile-2.webp";
import foliage_three from "../assets/foliage-profiles/profile-3.webp";
import foliage_four from "../assets/foliage-profiles/profile-4.webp";
import foliage_five from "../assets/foliage-profiles/profile-5.webp";
// Lorien
import lorien_one from "../assets/lorien-profiles/profile-1.webp";
import lorien_two from "../assets/lorien-profiles/profile-2.webp";
import lorien_three from "../assets/lorien-profiles/profile-3.webp";
import lorien_four from "../assets/lorien-profiles/profile-4.webp";
import lorien_five from "../assets/lorien-profiles/profile-5.webp";
//Fernanda
import fernanda_one from "../assets/fernanda-profiles/profile-1.webp";
import fernanda_two from "../assets/fernanda-profiles/profile-2.webp";
import fernanda_three from "../assets/fernanda-profiles/profile-3.webp";
import fernanda_four from "../assets/fernanda-profiles/profile-4.webp";
import fernanda_five from "../assets/fernanda-profiles/profile-5.webp";

interface review {
  userName: string;
  reviewMessage: string;
  image: string;
}

const asteriaReviews: review[] = [
  {
    userName: "Ana Walford",
    reviewMessage: "Great pattern, easy to follow and end result was lovely",
    image: asteria_one,
  },
  {
    userName: "Caitlyn Jones",
    reviewMessage:
      "I absolutely love Asteria’s patterns. They are so well-written and utterly beautiful.",
    image: asteria_two,
  },
  {
    userName: "Maria Fernanda",
    reviewMessage:
      "Beautiful pattern! Easy to follow and works up fairly quickly.",
    image: asteria_three,
  },
  {
    userName: "Rosenda Williams",
    reviewMessage:
      "Just what I needed! Easy to follow pattern, with detailed instructions.... very nice!! Not the first time I've ordered from here, always pleased!",
    image: asteria_four,
  },
  {
    userName: "Vienna Creech",
    reviewMessage:
      "It’s so easy to follow and I had really fun when I was crocheting ❣️ absolutely beautiful thank you!",
    image: asteria_five,
  },
];
const foliageReviews: review[] = [
  {
    userName: "Sharon Jackson",
    reviewMessage:
      "Instructions were easy to follow. The many popcorns were tedious but the doily turned out beautifully",
    image: foliage_one,
  },
  {
    userName: "Rosemary Jedel Graff",
    reviewMessage:
      "Working on this beauty now Love but she is not done yet will post picture after she is finished.",
    image: foliage_two,
  },
  {
    userName: "Janice Kerr Pickup",
    reviewMessage: "Very beautiful doily turned out.",
    image: foliage_three,
  },
  {
    userName: "Rose Bonetto",
    reviewMessage:
      "Well written and easy to follow pattern. I'm currently making this doily and enjoying the progress along the way!",
    image: foliage_four,
  },
  {
    userName: "Taylor Renee Kleckner",
    reviewMessage: "Beautiful pattern! Can't wait to make it! ",
    image: foliage_five,
  },
];
const lorienReviews: review[] = [
  {
    userName: "Ginger Hall",
    reviewMessage: "Very Easy to follow along with!",
    image: lorien_one,
  },
  {
    userName: "Kelsey Mindemann",
    reviewMessage: "Beautiful pattern! I have made it already",
    image: lorien_two,
  },
  {
    userName: "Paula Hallman",
    reviewMessage: "Good easy pattern to follow, i love it ",
    image: lorien_three,
  },
  {
    userName: "Tiffany Starnes",
    reviewMessage: "Great pattern, easy to follow and end result was lovely",
    image: lorien_four,
  },
  {
    userName: "Vicky Patterson",
    reviewMessage: "This is not only a beautiful pattern, very well written!",
    image: lorien_five,
  },
];
const fernandaReviews: review[] = [
  {
    userName: "Amparo Ramirez Villanueva",
    reviewMessage: "Great pattern, easy to follow and end result was lovely",
    image: fernanda_one,
  },
  {
    userName: "Anna Reyna",
    reviewMessage:
      "This is not only a beautiful design, but it’s very well written! Thank you!",
    image: fernanda_two,
  },
  {
    userName: "Gabyy García",
    reviewMessage:
      "Beautiful pattern! I can't wait to make this lovely doily. Thank you :)",
    image: fernanda_three,
  },
  {
    userName: "Helem Segura",
    reviewMessage: "excellent seller great pattern thank you",
    image: fernanda_four,
  },
  {
    userName: "Maria Elsa Santa Cruz Padilla",
    reviewMessage:
      "Instructions were easy to follow. The many popcorns were tedious but the doily turned out beautifully.",
    image: fernanda_five,
  },
];

export { asteriaReviews, foliageReviews, lorienReviews, fernandaReviews };
