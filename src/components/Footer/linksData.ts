import { FooterLink } from "@/types/footerLink";
import siteConfig from '../../../siteConfig';

export const downloadsLink: FooterLink[] = [
  {
    id: 1,
    title: "All Downloaders",
    href: "downloaders",
    newTab: false,
  }
];

export const supportsLink: FooterLink[] = [
  {
    id: 7,
    title: "Contact",
    href: "contact",
    newTab: false,
  },
  {
    id: 3,
    title: "Terms of Service",
    href: "terms",
    newTab: false,
  },
  {
    id: 4,
    title: "Privacy Policy",
    href: "privacy",
    newTab: false,
  },
  {
    id: 5,
    title: "Disclaimer",
    href: "disclaimer",
    newTab: false,
  },
  
];

export const toolsLink: FooterLink[] = [
  

];

if (siteConfig.downloaderList == "nsfw") {
  toolsLink.push({
    id: 10,
    title: siteConfig.nudifyAnchorText,
    href: siteConfig.nudifyURL,
    newTab: true,
  },
  {
    id: 11,
    title: "Watermark Remover",
    href: "https://watermarkremover.co/",
    newTab: true,
  },);
}

if (siteConfig.downloaderList == "sfw") {
  toolsLink.push({
    id: 9,
    title: "Watermark Remover",
    href: "https://watermarkremover.co/",
    newTab: true,
  },);
}

