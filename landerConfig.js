import siteConfig from './siteConfig'; 

let landerScreenshotPath;
if (siteConfig.promotedBrand == "iTubeGo") {
    landerScreenshotPath = "images/lander/screenshots/itubego-lander-main.jpeg"; 
} else if (siteConfig.promotedBrand == "YTSaver") {
    landerScreenshotPath = "images/lander/screenshots/ytsaver-lander-main.webp"; 
}

let buttonColor;
if (siteConfig.promotedBrand == "iTubeGo") {
    buttonColor = "#ff7404"; 
} else if (siteConfig.promotedBrand == "YTSaver") {
    buttonColor = "#ff7404"; 
}

let secondaryColor;
if (siteConfig.promotedBrand == "iTubeGo") {
    secondaryColor = "#1894f4";
} else if (siteConfig.promotedBrand == "YTSaver") {
    secondaryColor = "#02b779"; 
}

let brandLogoPath;
if (siteConfig.promotedBrand == "iTubeGo") {
    brandLogoPath = "/images/lander/icons/itubego-logo.webp";
} else if (siteConfig.promotedBrand == "YTSaver") {
    brandLogoPath = "/images/lander/icons/ytsaver-logo.webp"; 
}

let iconPath1;
if (siteConfig.promotedBrand == "iTubeGo") {
    iconPath1 = "/images/lander/icons/blue-1.png";
} else if (siteConfig.promotedBrand == "YTSaver") {
    iconPath1 = "/images/lander/icons/green-1.png"; 
}

let iconPath2;
if (siteConfig.promotedBrand == "iTubeGo") {
    iconPath2 = "/images/lander/icons/blue-2.png";
} else if (siteConfig.promotedBrand == "YTSaver") {
    iconPath2 = "/images/lander/icons/green-2.png"; 
}

let iconPath3;
if (siteConfig.promotedBrand == "iTubeGo") {
    iconPath3 = "/images/lander/icons/blue-3.png";
} else if (siteConfig.promotedBrand == "YTSaver") {
    iconPath3 = "/images/lander/icons/green-3.png"; 
}

let iconPath4;
if (siteConfig.promotedBrand == "iTubeGo") {
    iconPath4 = "/images/lander/icons/blue-4.png";
} else if (siteConfig.promotedBrand == "YTSaver") {
    iconPath4 = "/images/lander/icons/green-4.png"; 
}

let siteList;
if (siteConfig.promotedBrand == "iTubeGo") {
    switch (true) {
        case siteConfig.baseSiteName == "PornHub":
            siteList = "SpankBang, XVIDEOS, XNXX";
            break;
            case siteConfig.baseSiteName == "XNXX":
                siteList = "PornHub, XVIDEOS, SpankBang";
            break;
            case siteConfig.baseSiteName == "XVIDEOS":
                siteList = "PornHub, XNXX, SpankBang";
            break;
            case siteConfig.baseSiteName == "SpankBang":
                siteList = "XNXX, PornHub, XVIDEOS";
            break;
            case siteConfig.baseSiteName == "xHamster":
                siteList = "PornHub, XNXX, SpankBang";
            break;
            case siteConfig.baseSiteNamee == "RedTube":
                siteList = "XNXX, PornHub, XVIDEOS";
            break;
            default:
                siteList = "PornHub, XNXX, xHamster";
            break;
    }
} else if (siteConfig.promotedBrand == "YTSaver") {
switch (true) {
        case siteConfig.baseSiteName == "YouTube":
            siteList = "Instagram, TikTok, Spotify";
            break;
            case siteConfig.baseSiteName == "TikTok":
                siteList = "YouTube, Instagram, Twitter";
            break;
            case siteConfig.baseSiteName == "Instagram":
                siteList = "YouTube, TikTok, Spotify";
            break;
            case siteConfig.baseSiteName == "Twitter":
                siteList = "YouTube, Instagram, TikTok";
            break;
            case siteConfig.baseSiteName == "Facebook":
                siteList = "YouTube, Instagram, Spotify";
            break;
            case siteConfig.baseSiteNamee == "Spotify":
                siteList = "YouTube, TikTok, Instagram";
            break;
            default:
                siteList = "YouTube, TikTok, Instagram";
            break;
    }
}

let reviewsData;
if (siteConfig.promotedBrand == "iTubeGo") {
    reviewsData = [
        {
            img: "/images/lander/reviews/itubego/trustpilot-review-1.png"
        },
        {
            img: "/images/lander/reviews/itubego/trustpilot-review-2.png"
        },
        {
            img: "/images/lander/reviews/itubego/trustpilot-review-3.png"
        },
        {
            img: "/images/lander/reviews/itubego/trustpilot-review-9.png"
        },
        {
            img: "/images/lander/reviews/itubego/trustpilot-review-7.png"
        },
        {
            img: "/images/lander/reviews/itubego/trustpilot-review-6.png"
        },
        {
            img: "/images/lander/reviews/itubego/trustpilot-review-4.png"
        },
        {
            img: "/images/lander/reviews/itubego/trustpilot-review-5.png"
        },
        {
            img: "/images/lander/reviews/itubego/trustpilot-review-8.png"
        },
        {
            img: "/images/lander/reviews/itubego/trustpilot-review-10.png"
        },
    ]
} else if (siteConfig.promotedBrand == "YTSaver") {
    reviewsData = [
        {
            img: "/images/lander/reviews/ytsaver/trustpilot-review-1.webp"
        },
        {
            img: "/images/lander/reviews/ytsaver/trustpilot-review-2.webp"
        },
        {
            img: "/images/lander/reviews/ytsaver/trustpilot-review-3.webp"
        },
        {
            img: "/images/lander/reviews/ytsaver/trustpilot-review-4.webp"
        },
        {
            img: "/images/lander/reviews/ytsaver/trustpilot-review-5.png"
        },
        {
            img: "/images/lander/reviews/ytsaver/trustpilot-review-6.png"
        },
        {
            img: "/images/lander/reviews/ytsaver/trustpilot-review-7.png"
        },
        {
            img: "/images/lander/reviews/ytsaver/trustpilot-review-10.png"
        },
        {
            img: "/images/lander/reviews/ytsaver/trustpilot-review-8.png"
        },
        {
            img: "/images/lander/reviews/ytsaver/trustpilot-review-9.png"
        },
    ]
}

let supportedSitesData;
if (siteConfig.promotedBrand == "iTubeGo") {
    supportedSitesData = [
        {
            name: "PornHub Downloader",
            img: "/images/lander/nsfw-sites/pornhub-logo.png"
        },
        {
            name: "XNXX Downloader",
            img: "/images/lander/nsfw-sites/xnxx-logo.jpeg"
        },
        {
            name: "Redtube Downloader",
            img: "/images/lander/nsfw-sites/redtube-logo.jpeg"
        },
        {
            name: "XVIDEOS Downloader",
            img: "/images/lander/nsfw-sites/xvideos-logo.png"
        },
        {
            name: "Spankbang Downloader",
            img: "/images/lander/nsfw-sites/spankbang-logo.jpeg"
        },
        {
            name: "xHamster Downloader",
            img: "/images/lander/nsfw-sites/xhamster-logo.jpeg"
        },
        {
            name: "Eporner Downloader",
            img: "/images/lander/nsfw-sites/eporner-logo.jpeg"
        },
        {
            name: "Motherless Downloader",
            img: "/images/lander/nsfw-sites/motherless-logo.jpeg"
        },
        {
            name: "YouPorn Downloader",
            img: "/images/lander/nsfw-sites/youporn-logo.png"
        },
        {
            name: "PornTrex Downloader",
            img: "/images/lander/nsfw-sites/porntrex-logo.png"
        },
        {
            name: "REDGIFS Downloader",
            img: "/images/lander/nsfw-sites/redgifs-logo.png"
        },
        {
            name: "JavHD Downloader",
            img: "/images/lander/nsfw-sites/javhd-logo.jpeg"
        },
        {
            name: "Tube8 Downloader",
            img: "/images/lander/nsfw-sites/tube8-logo.jpeg"
        },
        {
            name: "PornTube Downloader",
            img: "/images/lander/nsfw-sites/porntube-logo.jpeg"
        },
        {
            name: "YesPornPlease Downloader",
            img: "/images/lander/nsfw-sites/yespornplease-logo.jpeg"
        },
        {
            name: "PornZog Downloader",
            img: "/images/lander/nsfw-sites/pornzog-logo.png"
        },
        {
            name: "ModelHub Downloader",
            img: "/images/lander/nsfw-sites/modelhub-logo.jpeg"
        },
        {
            name: "YouJizz Downloader",
            img: "/images/lander/nsfw-sites/youjizz-logo.jpeg"
        },
        {
            name: "FapHouse Downloader",
            img: "/images/lander/nsfw-sites/faphouse-logo.jpeg"
        },
        {
            name: "YouTube Downloader",
            img: "/images/lander/nsfw-sites/youtube-logo.jpeg"
        },
    ]
} else if (siteConfig.promotedBrand == "YTSaver") {
    supportedSitesData = [
        {
            name: "YouTube Downloader",
            img: "/images/lander/sfw-sites/site1.png"
        },
        {
            name: "Spotify Downloader",
            img: "/images/lander/sfw-sites/site2.png"
        },
        {
            name: "Facebook Downloader",
            img: "/images/lander/sfw-sites/site3.png"
        },
        {
            name: "Apple Music Downloader",
            img: "/images/lander/sfw-sites/site4.png"
        },
        {
            name: "DailyMotion Downloader",
            img: "/images/lander/sfw-sites/site5.png"
        },
        {
            name: "TikTok Downloader",
            img: "/images/lander/sfw-sites/site6.png"
        },
        {
            name: "Eporner Downloader",
            img: "/images/lander/sfw-sites/site7.png"
        },
        {
            name: "Motherless Downloader",
            img: "/images/lander/sfw-sites/site8.png"
        },
        {
            name: "YouPorn Downloader",
            img: "/images/lander/sfw-sites/site9.png"
        },
        {
            name: "PornTrex Downloader",
            img: "/images/lander/sfw-sites/site10.png"
        },
        {
            name: "REDGIFS Downloader",
            img: "/images/lander/sfw-sites/site11.png"
        },
        {
            name: "JavHD Downloader",
            img: "/images/lander/sfw-sites/site12.png"
        },
        {
            name: "Tube8 Downloader",
            img: "/images/lander/sfw-sites/site13.png"
        },
        {
            name: "PornTube Downloader",
            img: "/images/lander/sfw-sites/site14.png"
        },
        {
            name: "YesPornPlease Downloader",
            img: "/images/lander/sfw-sites/site15.png"
        },
    ]
}

let siteImagePath;
if (siteConfig.promotedBrand == "iTubeGo") {
    switch (true) {
        case siteConfig.baseSiteName == "PornHub":
                siteImagePath = '/images/lander/site-urls/pornhub-url.jpeg';
            break;
            case siteConfig.baseSiteName == "XNXX":
                siteImagePath = '/images/lander/site-urls/xnxx-url.jpeg';
            break;
            case siteConfig.baseSiteName == "XVIDEOS":
                siteImagePath = '/images/lander/site-urls/xvideos-url.jpeg';
            break;
            case siteConfig.baseSiteName == "SpankBang":
                siteImagePath = '/images/lander/site-urls/spankbang-url.jpeg';
            break;
            case siteConfig.baseSiteName == "xHamster":
                siteImagePath = '/images/lander/site-urls/xhamster-url.jpeg';
            break;
            case siteConfig.baseSiteNamee == "RedTube":
                siteImagePath = '/images/lander/site-urls/redtube-url.jpeg';
            break;
            case siteConfig.baseSiteNamee == "YouPorn":
                siteImagePath = '/images/lander/site-urls/youporn-url.jpeg';
            break;
            default:
                siteImagePath = '/images/lander/site-urls/pornhub-url.jpeg';
            break;
    }
} else if (siteConfig.promotedBrand == "YTSaver") {
    switch (true) {
        case siteConfig.baseSiteName == "YouTube":
                siteImagePath = '/images/lander/site-urls/youtube-url.webp';
            break;
            default:
                siteImagePath = '/images/lander/site-urls/youtube-url.webp';
            break;
    }
}

let howToUse2;
if (siteConfig.promotedBrand == "iTubeGo") {
    howToUse2 = "images/lander/screenshots/how-to-use-2.jpeg";
} else if (siteConfig.promotedBrand == "YTSaver") {
    howToUse2 = "images/lander/screenshots/ytsaver-how-to-use-2.webp";
}

let howToUse3;
if (siteConfig.promotedBrand == "iTubeGo") {
    howToUse3 = "images/lander/screenshots/how-to-use-2.jpeg";
} else if (siteConfig.promotedBrand == "YTSaver") {
    howToUse3 = "images/lander/screenshots/ytsaver-how-to-use-3.webp";
}

let howToUse4;
if (siteConfig.promotedBrand == "iTubeGo") {
    howToUse4 = "images/lander/screenshots/how-to-use-2.jpeg";
} else if (siteConfig.promotedBrand == "YTSaver") {
    howToUse4 = "images/lander/screenshots/ytsaver-lander-main.webp";
}


const landerConfig = {

  landerScreenshotPath: landerScreenshotPath,
  buttonColor: buttonColor,
  secondaryColor: secondaryColor,
  brandLogoPath: brandLogoPath,
  siteList: siteList,
  supportedSitesData: supportedSitesData,
  iconPath1: iconPath1,
  iconPath2: iconPath2,
  iconPath3: iconPath3,
  iconPath4: iconPath4,
  siteImagePath: siteImagePath,
  howToUse2: howToUse2,
  howToUse3: howToUse3,
  howToUse4: howToUse4,
  reviewsData: reviewsData,

};

export default landerConfig;
