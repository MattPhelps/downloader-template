import { Feature } from "@/types/feature";
import siteConfig from '../../../../siteConfig';

const featuresData: Feature[] = [
  {
    id: 11,
    title: "Copy the Link",
    description: `1. Copy the link of the ${siteConfig.baseSiteName} video you want to download`,
    icon: "/images/how-to/link.png",
  },
  {
    id: 27,
    title: "Paste and Click",
    description: `2. Paste the video link into the input field at the top of this page and click the "Download" button`,
    icon: "/images/how-to/click.png",
  },
  {
    id: 21,
    title: "Enjoy!",
    description: `3. Your downloaded video will be found in your computer's downloads folder`,
    icon: "/images/how-to/screen.png",
  },
];

export default featuresData;
