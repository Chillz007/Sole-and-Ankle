import Tech from "../assets/Images/tech-challenge.jpg";
import Metcon from "../assets/Images/metcon-5.jpg";
import Phantom from "../assets/Images/phantom.jpg";
import Pegasus from "../assets/Images/pegasus.jpg";
import Joyride from "../assets/Images/joyride.jpg";
import Legend from "../assets/Images/Legend.jpg";
import React from "../assets/Images/react-infinity.jpg";
import Phantfly from "../assets/Images/phantom-flyknit.jpg";
import Lebron from "../assets/Images/img2.jpg";

export const SHOES = [
  {
    id: 1,
    slug: "tech-challenge",
    name: "NikeCourt Tech Challenge 20",
    image: Tech,
    price: "$165",
    salePrice: null,
    // 1 hour ago! 🔥
    releaseDate: Date.now() - 1000 * 60 * 60 * 1,
    numOfColors: "2 Colors",
  },
  {
    id: 2,
    slug: "metcon-5",
    name: "Nike Metcon 5 AMP",
    image: Metcon,
    price: "$165",
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 2,
    numOfColors: "1 Color",
  },
  {
    id: 3,
    slug: "phantom",
    name: "Nike Phantom Vision",
    image: Phantom,
    price: "$165",
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 4,
    numOfColors: "4 Colors",
  },
  {
    id: 4,
    slug: "pegasus",
    name: "Nike Air Zoom Pegasus",
    image: Pegasus,
    price: "$165",
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 16,
    numOfColors: "1 Color",
  },
  {
    id: 5,
    slug: "joyride",
    name: "Nike Joyride Dual Run",
    image: Joyride,
    price: "$170",
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 40,
    numOfColors: "2 Colors",
  },
  {
    id: 6,
    slug: "legend-academy",
    name: "Nike Tiempo Legend 8",
    image: Legend,
    price: "$165",
    salePrice: 12500,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 50,
    numOfColors: "8 Colors",
  },
  {
    id: 7,
    slug: "react-infinity",
    name: "Nike React Infinity Pro",
    image: React,
    price: "$160",
    salePrice: 14500,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 75,
    numOfColors: "1 Color",
  },
  {
    id: 8,
    slug: "phantom-flyknit",
    name: "Nike React Phantom Run Flyknit 2",
    image: Phantfly,
    price: "$185",
    salePrice: 16000,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 100,
    numOfColors: "4 Colors",
  },
  {
    id: 9,
    slug: "lebron",
    name: "LeBron 17",
    image: Lebron,
    price: "$260",
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 120,
    numOfColors: "1 Color",
  },
];

export const COLORS = {
  white: "hsl(0deg, 0%, 100%)",
  gray: {
    100: "hsl(185deg, 5%, 95%)",
    300: "hsl(190deg, 5%, 80%)",
    500: "hsl(196deg, 4%, 60%)",
    700: "hsl(220deg, 5%, 40%)",
    900: "hsl(220deg, 3%, 20%)",
  },
  primary: "hsl(340deg, 65%, 47%)",
  secondary: "hsl(240deg, 60%, 63%)",
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const NavLink = [
  { id: 1, href: "#", navName: "sale" },
  { id: 2, href: "#", navName: "new releases" },
  { id: 3, href: "#", navName: "men" },
  { id: 4, href: "#", navName: "women" },
  { id: 5, href: "#", navName: "kids" },
  { id: 6, href: "#", navName: "collections" },
];

export const Category = [
  { id: 1, href: "#", name: "Lifestyle" },
  { id: 2, href: "#", name: "Jordan" },
  { id: 3, href: "#", name: "Running" },
  { id: 4, href: "#", name: "Basketball" },
  { id: 5, href: "#", name: "Training & Gym" },
  { id: 6, href: "#", name: "Football" },
  { id: 7, href: "#", name: "Skateboarding" },
  { id: 8, href: "#", name: "American Football" },
  { id: 9, href: "#", name: "Baseball" },
  { id: 10, href: "#", name: "Golf" },
  { id: 11, href: "#", name: "Tennis" },
  { id: 12, href: "#", name: "Athletics" },
];
