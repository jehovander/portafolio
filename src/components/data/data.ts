// This file contains the data for the projects and navbarbar items.
import { TypeMyData, TypeNavbar } from "./Models";
import ecommerce from "../assets/Ecommerce.png";
import botsito from "../assets/Botsito.png";
export const data: TypeMyData[] = [
  {
    id: 1,
    title: "E-commerce",
    img_url: `${ecommerce}`,
    link: "https://fullstackstore.vercel.app",
    gitHub: "https://github.com/jehovander",
  },
  {
    id: 2,
    title:"Freelancer",
    img_url: `${botsito}`,
    link:"",
    gitHub:"https://github.com/jehovander",


  },

];



export const listNavBar: TypeNavbar[] = [
  {
    id: 1,
    item: "Home",
    icon: "uil uil-home",
    href: "home",
  },
  {
    id: 2,
    item: "About",
    icon: "uil uil-user",
    href: "about",
  },
  {
    id: 3,
    item: "Skills",
    icon: "uil uil-file-alt",
    href: "skills",
  },
  {
    id: 4,
    item: "Qualifications",
    icon: "uil uil-graduation-cap",
    href: "qualification",
  },
  {
    id: 5,
    item: "Projects",
    icon: "uil uil-briefcase-alt",
    href: "projects",
  },
  {
    id: 6,
    item: "Contact",
    icon: "uil uil-envelope",
    href: "contact",
  },
];
