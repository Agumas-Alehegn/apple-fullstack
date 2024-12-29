import visionProLogo from "./image/home/hero_logo_apple_vision_pro_enhanced__co9clx0e4afm_large.png";
import bgdVideo from "./video/visionPro-animation-video.mp4";
import appleCard from "./image/home/apple-card.png";

const mainProductsData = [
  {
    sectionClassName: "main-sec-a",
    productLink: "visionPro-link-top",
    productLinkClassName: "animation-video-wrap ratio ratio-16x9",
    WrapClassName: "",
    unitWrapClassName: "visionPro-img-top-wrap",
    titleClassName: "",
    titleContent: visionProLogo,
    subHeadClassName: "visionPro-subhead-top",
    description: "You've never seen everything like this before",
    btnWrapClassName: "btn-visionPro-top-wrap",
    btnLearnClassName: "btn-learn-more-visionPro-top",
    btnLearnContent: "Learn more",
    btnBuyClassName: "btn-buy-visionPro-top",
    btnBuyContent: "Buy",
    bgdVideo: bgdVideo,
    isImage: true,
  },

  {
    sectionClassName: "main-sec-b pt-3",
    productLink: "/iphone15Pro",
    productLinkClassName: "iphone-15pro-link",
    WrapClassName: "iphone-15pro-promo-wrap",
    unitWrapClassName: "iphone-15pro-promo-unitwrap",
    titleClassName: "iphone-15pro",
    titleContent: "iPhone 15 Pro",
    subHeadClassName: "",
    description: "Titanium. So strong. So light. So Pro.",
    btnWrapClassName: "iphone-15pro-btn-wrap",
    btnLearnClassName: "btn-learn-more-i15pro",
    btnLearnContent: "Learn more",
    btnBuyClassName: "btn-buy-i15pro",
    btnBuyContent: "   Buy",
    bgdVideo: "",
    isImage: false,
  },
  {
    sectionClassName: "main-sec-b pt-3",
    productLink: "/iphone15",
    productLinkClassName: "iphone-15-link",
    WrapClassName: "iphone-15-promo-wrap",
    unitWrapClassName: "iphone-15-promo-unitwrap",
    titleClassName: "iphone-15",
    titleContent: "iPhone 15",
    subHeadClassName: "",
    description: "New Camera. New design. Newphoria",
    btnWrapClassName: "iphone-15-btn-wrap",
    btnLearnClassName: "btn-learn-more-i15",
    btnLearnContent: "Learn more",
    btnBuyClassName: "btn-buy-i15",
    btnBuyContent: "   Buy",
    bgdVideo: "",
    isImage: false,
  },
];
// data from the iconsData.js

import watchLogo from "./image/home/promo_logo_apple_watch_series_9__ckz0hbex0yeu_large.png";
import visionLogo from "./image/home/promo_logo_apple_vision_pro__90zi46p7dc2y_large.png";
import tradInImg from "./image/home/logo_tradein__d1fpktgipvki_large.png";

const productsData = [
  {
    classNameWrap: "apple-dev-conf-wrap col-md-6 pb-3 pb-md-2",
    classNameLink: "apple-dev-conf-link",
    classNameImageWrap: "dev-conf-img-wrap",
    classNameOverlay: "dev-conf-promo-overlay",
    classNamePromoWrap: "dev-conf-promo",
    classNamePromoHead: "dev-conf-promo-head",
    promoContentHead: "",
    classNamePromoSubhead: "dev-conf-promo-subhead ",
    promoContentOne: "Apple Worldwide Developers Conference.",
    promoContentTwo: "Join us online June 10-14.",
    classNameBtnWrap: "btn-wrap-dev-conf",
    classNameBtnLearn: "btn-learn-more-dev-conf",
    btnLearnContent: "Learn more",
    isImage: false,
  },
  {
    classNameWrap: "m-bookair-promo-wrap col-md-6 pb-3 pb-md-2",
    classNameLink: "m-bookair-promo-link",
    classNameImageWrap: "m-bookair-img-wrap",
    classNameOverlay: " m-bookair-promo-overlay",
    classNamePromoWrap: "m-bookair-promo-head",
    classNamePromoHead: " ",
    promoContentHead: "MacBook Air",
    classNamePromoSubhead: "m-bookair-promo-subhead ",
    promoContentOne: "Lean. Mean. M3machine.",
    promoContentTwo: "",
    classNameBtnWrap: "btn-wrap-m-bookair",
    classNameBtnLearn: "btn-learn-more-m-bookair",
    btnLearnContent: "Learn more",
    isImage: false,
    classNameBuyBtn: "btn-buy-m-bookair",
    buyBtnContent: "Buy",
  },
  {
    classNameWrap: "apple-watch-wrap  col-md-6 pb-3 pb-md-2",
    classNameLink: "apple-watch-link",
    classNameImageWrap: "watch-series-img-wrap",
    classNameOverlay: " watch-promo-overlay",
    classNamePromoWrap: "watch-promo-img",
    classNamePromoHead: "",
    promoContentHead: watchLogo,
    classNamePromoSubhead: "watch-promo-subhead ",
    promoContentOne: "Smarter. Brighter. Mightier",
    promoContentTwo: "",
    classNameBtnWrap: "btn-wrap-watch",
    classNameBtnLearn: "btn-learn-more-watch",
    btnLearnContent: "Learn more",
    classNameBuyBtn: "btn-buy-watch",
    buyBtnContent: "Buy",
    isImage: true,
  },
  {
    classNameWrap: "ipad-promo-wrap col-md-6 pb-3 pb-md-0",
    classNameLink: "ipad-promo-link",
    classNameImageWrap: "ipad-img-wrap",
    classNameOverlay: "ipad-promo-overlay",
    classNamePromoWrap: "ipad-promo-head",
    classNamePromoHead: "",
    promoContentHead: "iPad",
    classNamePromoSubhead: "ipad-promo-subhead ",
    promoContentOne: "Lovable.Drawable.Magical.",
    promoContentTwo: "",
    classNameBtnWrap: "btn-wrap-ipad",
    classNameBtnLearn: "btn-learn-more-ipad",
    btnLearnContent: "Learn more",
    isImage: false,
    classNameBuyBtn: "btn-buy-ipad",
    buyBtnContent: "Buy",
  },
  {
    classNameWrap: "airpods-pro-wrap col-md-6 pb-3 pb-md-0",
    classNameLink: "airpods-pro-link",
    classNameImageWrap: "airpods-pro-img-wrap",
    classNameOverlay: "airpods-promo-overlay",
    classNamePromoWrap: "airpods-promo-head-wrap",
    classNamePromoHead: "",
    promoContentHead: "AirPods Pro",
    classNamePromoSubhead: "airpods-promo-subhead",
    promoContentOne: "Adaptive audio. Now playing.",
    promoContentTwo: "",
    classNameBtnWrap: "btn-wrap-airpods",
    classNameBtnLearn: "btn-learn-more-airpods",
    btnLearnContent: "Learn more",
    isImage: false,
    classNameBuyBtn: "btn-buy-airpods",
    buyBtnContent: "Buy",
  },
  {
    classNameWrap: "visionPro-wrap col-md-6 pb-3 pb-md-0",
    classNameLink: "visionPro-link",
    classNameImageWrap: "visionPro-img-wrap",
    classNameOverlay: " visionPro-promo-overlay",
    classNamePromoWrap: "visionPro-promo-img-wrap",
    classNamePromoHead: "",
    promoContentHead: visionLogo,
    classNamePromoSubhead: "visionPro-promo-subhead ",
    promoContentOne: "You have never seen everything like this before.",
    promoContentTwo: "",
    classNameBtnWrap: "btn-wrap-visionpro",
    classNameBtnLearn: "btn-learn-more-visionpro",
    btnLearnContent: "Learn more",
    classNameBuyBtn: "btn-buy-visionPro",
    buyBtnContent: "Buy",
    isImage: true,
  },
  {
    classNameWrap: "apple-card-wrap col-md pb-3 pb-md-0",
    classNameLink: "apple-card-link",
    classNameImageWrap: "card-img-wrap",
    classNameOverlay: " card-promo-overlay",
    classNamePromoWrap: "card-promo-img",
    classNamePromoHead: "",
    promoContentHead: appleCard,
    classNamePromoSubhead: "card-promo-subhead ",
    promoContentOne: "Get up to 3% Daily Cash back with every Purchase",
    promoContentTwo: "",
    classNameBtnWrap: "btn-wrap-card",
    classNameBtnLearn: "btn-learn-more-card",
    btnLearnContent: "Learn more",
    classNameBuyBtn: "btn-apply-card",
    buyBtnContent: " Apply Now",
    isImage: true,
  },
  {
    classNameWrap: "tradin-promo-wrap col-md pb-3 pb-md-0",
    classNameLink: "tradein-promo-link",
    classNameImageWrap: "tradein-img-wrap",
    classNameOverlay: " tradein-promo-overlay",
    classNamePromoWrap: "tradein-promo-img",
    classNamePromoHead: "",
    promoContentHead: tradInImg,
    classNamePromoSubhead: "tradein-promo-subhead ",
    promoContentOne: `Get $180-$630 in credit when you trade in iPhone 11 or higher.1`,
    promoContentTwo: "",
    classNameBtnWrap: "btn-wrap-tradein",
    classNameBtnLearn: "btn-tradein",
    btnLearnContent: "Get your estimate",
    classNameBuyBtn: " ",
    buyBtnContent: " ",
    isImage: true,
  },
];
const sliderAInputData = [
  {
    imageInput: "slide-img1",
    isChecked: true,
  },
  {
    imageInput: "slide-img2",
    isChecked: false,
  },
  {
    imageInput: "slide-img3",
    isChecked: false,
  },
  {
    imageInput: "slide-img4",
    isChecked: false,
  },
  {
    imageInput: "slide-img5",
    isChecked: false,
  },
  {
    imageInput: "slide-img6",
    isChecked: false,
  },
  {
    imageInput: "slide-img7",
    isChecked: false,
  },
  {
    imageInput: "slide-img9",
    isChecked: false,
  },
  {
    imageInput: "slide-img9",
    isChecked: false,
  },
];
import carouselArgylie from "./image/Carousel/1-Argylie.jpg";
import carouselFranklin from "./image/Carousel/2-Franklin.jpg";
import carouselSugar from "./image/Carousel/3-sugar.jpg";
import carouselMessi from "./image/Carousel/4-Messi-1.jpg";
import carouselPalmroyale from "./image/Carousel/5-palm-royale.jpg";
import carouselMasterOfTheAir from "./image/Carousel/6-masters of the air.jpg";
import carouselBaseBall from "./image/Carousel/7-Base-ball.jpg";
import carouselTedlasso from "./image/Carousel/8-ted-lasso.jpg";
import carouselTheMorning from "./image/Carousel/9-The-morning-show.jpg";

const sliderASliderData = [
  {
    slide: "slide img1",
    slideLink: "#",
    imgPath: carouselArgylie,
    slideBtnClass: "stream-btn btn btn-light col-3 col-md-2",
    btnContent: " Stream now",
    genre_title: "genre col-md-10 d-none d-md-block",
    genre: "m-info",
    genreContent: "Action.",
    titleContent: " The Greater the spy,the bigger the lie.",
  },
  {
    slide: "slide img2",
    slideLink: "#",
    imgPath: carouselFranklin,
    slideBtnClass: "stream-btn btn btn-light col-3 col-md-2",
    btnContent: " Stream now",
    genre_title: "genre col-md-10 d-none d-md-block",
    genre: "m-info p-0",
    genreContent: "Drama.",
    titleContent:
      " Michael Douglas stars as An American founding father on a secret mission",
  },
  {
    slide: "slide img3",
    slideLink: "#",
    imgPath: carouselSugar,
    slideBtnClass: "stream-btn btn btn-light col-3 col-md-2",
    btnContent: " Stream now",
    genre_title: "genre col-md-10 d-none d-md-block",
    genre: "m-info",
    genreContent: "Comedy.",
    titleContent: " A couple and their dog are out for a weekend getaway.",
  },
  {
    slide: "slide img4",
    slideLink: "#",
    imgPath: carouselMessi,
    slideBtnClass: "stream-btn btn btn-light col-3 col-md-3",
    btnContent: "See The schedule",
    genre_title: "genre col-md-10 d-none d-md-block",
    genre: "",
    genreContent: "",
    titleContent: "Watch Messi, every club, and every match-;live.",
  },
  {
    slide: "slide img5",
    slideLink: "#",
    imgPath: carouselPalmroyale,
    slideBtnClass: "stream-btn btn btn-light col-3 col-md-3",
    btnContent: "  See The schedule",
    genre_title: "genre col-md-10 d-none d-md-block",
    genre: "",
    genreContent: "",
    titleContent: "Watch the latest Baseball game, live from Pittsburgh.",
  },
  {
    slide: "slide img6",
    slideLink: "#",
    imgPath: carouselMasterOfTheAir,
    slideBtnClass: "stream-btn btn btn-light col-3 col-md-2",
    btnContent: " Stream now",
    genre_title: "genre col-md-10 d-none d-md-block",
    genre: "m-info",
    genreContent: "Drama.",
    titleContent: "From Steven Spielberg, Tom Hanks and Gary Goetzman.",
  },
  {
    slide: "slide img7",
    slideLink: "#",
    imgPath: carouselBaseBall,
    slideBtnClass: "stream-btn btn btn-light col-3 col-md-3",
    btnContent: "See The schedule",
    genre_title: "genre col-md-10 d-none d-md-block",
    genre: "m-info",
    genreContent: "Drama.",
    titleContent: "Watch the latest MLB game, live from New York..",
  },
  {
    slide: "slide img8",
    slideLink: "#",
    imgPath: carouselTedlasso,
    slideBtnClass: "stream-btn btn btn-light col-3 col-md-3",
    btnContent: "See The schedule",
    genre_title: "genre col-md-10 d-none d-md-block",
    genre: "",
    genreContent: "",
    titleContent: "    Watch the latest Talk Radio Show, live from New York.",
  },
  {
    slide: "slide img9",
    slideLink: "#",
    imgPath: carouselTheMorning,
    slideBtnClass: "stream-btn btn btn-light col-3 col-md-3",
    btnContent: "See The schedule",
    genre_title: "genre col-md-10 d-none d-md-block",
    genre: "",
    genreContent: "",
    titleContent: "  Watch the latest Morning Show, live from New York.",
  },
];
const sliderALabelData = [
  {
    forImageInput: "slide-img1",
  },
  {
    forImageInput: "slide-img2",
  },
  {
    forImageInput: "slide-img3",
  },
  {
    forImageInput: "slide-img4",
  },
  {
    forImageInput: "slide-img5",
  },
  {
    forImageInput: "slide-img6",
  },
  {
    forImageInput: "slide-img7",
  },
  {
    forImageInput: "slide-img8",
  },
  {
    forImageInput: "slide-img9",
  },
];
import sliderBAppleLogoSvg from "./image/icons/logo.svg";
import sliderBAppleLogoPng from "./image/icons/logo.png";

const sliderBData = [
  {
    sliderBWrapperClassName: "slide-b img1",
    sliderBLinkClassName: "slide-overlay",
    sliderBOverlayClassName: "overlay-info-wrap",
    sliderBOverlayContent: "NBA 2K24 Arcade Edition",
    overlayLogoPath: sliderBAppleLogoSvg,
    overLayContent: "Arcade",
    overlayBtnContent: "Play now",
  },
  {
    sliderBWrapperClassName: "slide-b img2",
    sliderBLinkClassName: "overlay-wrap-img2",
    sliderBOverlayClassName: "overlay-bg-img2",
    sliderBOverlayContent: "R&B Now",
    overlayLogoPath: sliderBAppleLogoPng,
    overLayContent: "Music",
    overlayBtnContent: " Listen now",
  },
  {
    sliderBWrapperClassName: "slide-b img3",
    sliderBLinkClassName: "slide-overlay",
    sliderBOverlayClassName: "overlay-info-wrap",
    sliderBOverlayContent: "30-Day core challenge.",
    overlayLogoPath: sliderBAppleLogoSvg,
    overLayContent: "Fitness+",
    overlayBtnContent: "Watch now",
  },
  {
    sliderBWrapperClassName: "slide-b img4",
    sliderBLinkClassName: "slide-overlay",
    sliderBOverlayClassName: "overlay-info-wrap",
    sliderBOverlayContent: "Hello Kittty Island Adventure.",
    overlayLogoPath: sliderBAppleLogoSvg,
    overLayContent: "Arcade",
    overlayBtnContent: "Play now",
  },
  {
    sliderBWrapperClassName: "slide-b img5",
    sliderBLinkClassName: "overlay-wrap-img5",
    sliderBOverlayClassName: "overlay-bg-img5",
    sliderBOverlayContent: "Rap life",
    overlayLogoPath: sliderBAppleLogoPng,
    overLayContent: "Music",
    overlayBtnContent: "Listen now",
  },
  {
    sliderBWrapperClassName: "slide-b img6",
    sliderBLinkClassName: "slide-overlay",
    sliderBOverlayClassName: "overlay-info-wrap",
    sliderBOverlayContent: "Perfect your Yoga balance poses.",
    overlayLogoPath: sliderBAppleLogoSvg,
    overLayContent: "Fitness+",
    overlayBtnContent: "Watch now",
  },
];

const footerInfoContent = [
  {
    beforeLinkText:
      " 1. Trade-in values will vary based on the condition, year, andconfiguration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate  was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo  ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online  trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply afterLinkText",
    hasLink: false,
  },
  {
    beforeLinkText: " Available in the U.S. on",
    hasLink: true,
    linkUrl: "apple.com",
    linkText: "apple.com",
    afterLinkText: "apple.com, in the Apple Store app,and at Apple Stores.",
  },
  {
    beforeLinkText:
      "To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.",
    hasLink: false,
  },
  {
    beforeLinkText:
      "If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.",
    hasLink: false,
  },
  {
    beforeLinkText:
      " Learn more about how Apple Card applications are evaluated at",
    hasLink: true,
    linkUrl: "support.apple.com/kb/HT209218.",
    linkText: "support.apple.com/kb/HT209218.",
    afterLinkText: "",
  },
  {
    beforeLinkText: "A subscription is required for Apple TV+.",
    hasLink: false,
  },
  {
    beforeLinkText: "",
    hasLink: false,
  },
  {
    beforeLinkText:
      "A subscription is required for Apple Arcade, Apple Fitness+, and Apple Music.",
    hasLink: false,
  },
];
const footerData = [
  {
    heading: "Shop and Learn",
    ulClass: "js-shopLearn",
    chevronClass: "js-chevronBtn",
    links: [
      { linkText: "Store", linkUrl: "/Store" },
      { linkText: "Mac", linkUrl: "/Mac" },
      { linkText: "iPad", linkUrl: "/iPad" },
      { linkText: "iPhone", linkUrl: "/iPhone" },
      { linkText: "Watch", linkUrl: "/Watch" },
      { linkText: "Vision", linkUrl: "/Vision" },
      { linkText: "AirPods", linkUrl: "/AirPods" },
      { linkText: "TV & Home", linkUrl: "/TV & Home" },
      { linkText: "AirTag", linkUrl: "/AirTag" },
      { linkText: "Accessories", linkUrl: "/Accessories" },
      { linkText: "Gift Cards", linkUrl: "/Gift Cards" },
    ],
  },
  {
    heading: "Apple Wallet",
    ulClass: "js-appleWallet",
    chevronClass: "js-chevronBtn1",
    links: [
      { linkText: "Wallet", linkUrl: "/Wallet" },
      { linkText: "Apple Card", linkUrl: "/Apple Card" },
      { linkText: "Apple Pay", linkUrl: "/Apple Pay" },
      { linkText: "Apple Cash", linkUrl: "#" },
    ],
  },
];
const footerData1 = [
  {
    heading: "Account",
    ulClass: "js-account",
    chevronClass: "js-chevronBtn2",
    links: [
      { linkText: "Manage Your Apple ID", linkUrl: "#" },
      { linkText: "Apple Store Account", linkUrl: "#" },
      { linkText: "iCloud.com", linkUrl: "#" },
    ],
  },
  {
    heading: "Entertainment",
    ulClass: "js-entertainment",
    chevronClass: "js-chevronBtn3",
    links: [
      { linkText: "Apple One", linkUrl: "/Apple One" },
      { linkText: "Apple TV+", linkUrl: "/Apple TV+" },
      { linkText: "Apple Music", linkUrl: "/Apple Music" },
      { linkText: "Apple Arcade", linkUrl: "/Apple Arcade" },
      { linkText: "Apple Fitness+", linkUrl: "/Apple Fitness+" },
      { linkText: "Apple News+", linkUrl: "/Apple News+" },
      { linkText: "Apple Podcasts", linkUrl: "/Apple Podcasts" },
      { linkText: "Apple Books", linkUrl: "/Apple Books" },
      { linkText: "App Store", linkUrl: "/" },
    ],
  },
];
const footerData2 = [
  {
    heading: "Apple store",
    ulClass: "js-appleStore",
    chevronClass: "js-chevronBtn4",
    links: [
      { linkText: "Find a Store", linkUrl: "/Find a Store" },
      { linkText: "Genius Bar", linkUrl: "/Genius Bar" },
      { linkText: "Today at Apple", linkUrl: "/Today at Apple" },
      { linkText: "Group Reservations", linkUrl: "/Group Reservations" },
      { linkText: "Apple Camp", linkUrl: "/Apple Camp" },
      { linkText: "Apple Store App", linkUrl: "/Apple Store App" },
      { linkText: "Certified Refurbished", linkUrl: "/Certified Refurbished" },
      { linkText: "Apple Trade In", linkUrl: "/Apple Trade In" },
      { linkText: "Financing", linkUrl: "/Financing" },
      {
        linkText: "Carrier Deals at Apple",
        linkUrl: "/Carrier Deals at Apple",
      },
      { linkText: "Order Status", linkUrl: "/Order Status" },
      { linkText: "Shopping Help", linkUrl: "/Shopping Help" },
    ],
  },
];
const footerData3 = [
  {
    heading: "For Business",
    ulClass: "js-forbBusiness",
    chevronClass: "js-chevronBtn5",
    links: [
      { linkText: "Apple and Business", linkUrl: "/Apple and Business" },
      { linkText: "Shop for Business", linkUrl: "/Shop for Business" },
      { linkText: "", linkUrl: "/" },
    ],
  },
  {
    heading: "For Education",
    ulClass: "js-forEducation",
    chevronClass: "js-chevronBtn6",
    links: [
      { linkText: "Apple and Education", linkUrl: "/Apple and Education" },
      { linkText: "Shop for K-12", linkUrl: "/Shop for K-12" },
      { linkText: "Shop for College", linkUrl: "/Shop for College" },
    ],
  },
  {
    heading: " For Healthcare",
    ulClass: "js-forHealth",
    chevronClass: "js-chevronBtn7",
    links: [
      { linkText: "Apple in Healthcare", linkUrl: "/Apple in Healthcare" },
      { linkText: "Health on Apple Watch", linkUrl: "/Health on Apple Watch" },
      {
        linkText: "Health Records on iPhone",
        linkUrl: "/Health Records on iPhone",
      },
    ],
  },
  {
    heading: "For Government",
    ulClass: "js-forGovernment",
    chevronClass: "js-chevronBtn8",
    links: [
      { linkText: "Shop for Government", linkUrl: "/Shop for Government" },
      {
        linkText: "Shop for Veterans and Military",
        linkUrl: "/Shop for Veterans and Military",
      },
    ],
  },
];
const footerData4 = [
  {
    heading: "Apple Values",
    ulClass: "js-appleValues",
    chevronClass: "js-chevronBtn9",
    links: [
      { linkText: "Apple Values", linkUrl: "/Apple Values" },
      { linkText: "Education", linkUrl: "/Education" },
      { linkText: "Environment", linkUrl: "/Environment" },
      {
        linkText: "Inclusion and Diversity",
        linkUrl: "/Inclusion and Diversity",
      },
      { linkText: "Privacy", linkUrl: "/Privacy" },
      {
        linkText: "Social Equity and Justice",
        linkUrl: "/Social Equity and Justice",
      },
      { linkText: "Supply Chain", linkUrl: "/Supply Chain" },
      { linkText: "", linkUrl: "/" },
      { linkText: "", linkUrl: "/" },
      { linkText: "", linkUrl: "/" },
    ],
  },
  {
    heading: "About Apple",
    ulClass: "js-aboutApple",
    chevronClass: "js-chevronBtn10",
    links: [
      { linkText: "Newsroom", linkUrl: "/Newsroom" },
      { linkText: "Apple Leadership", linkUrl: "/Apple Leadership" },
      { linkText: "Career Opportunities", linkUrl: "/Career Opportunities" },
      { linkText: "Investors", linkUrl: "/Investors" },
      { linkText: "Ethics & Compliance", linkUrl: "/Ethics & Compliance" },
      { linkText: "Events", linkUrl: "/Events" },
      { linkText: "Contact Apple", linkUrl: "/Contact Apple" },
    ],
  },
];
const footerLegalNavData = [
  {
    linkUrl: "/Privacy",
    linkContent: "Privacy policy",
    hasSpan: false,
    spanClass: "",
  },
  {
    linkUrl: "/Term",
    linkContent: "Term of Use",
    hasSpan: true,
    spanClass: "vertical-divider",
  },
  {
    linkUrl: "/Sales ",
    linkContent: "Sales and Refunds",
    hasSpan: true,
    spanClass: "vertical-divider",
  },
  {
    linkUrl: "/Legal",
    linkContent: "Legal",
    hasSpan: true,
    spanClass: "vertical-divider",
  },
  {
    linkUrl: "/Map",
    linkContent: "Map",
    hasSpan: true,
    spanClass: "vertical-divider",
  },
];

export {
  mainProductsData,
  productsData,
  sliderAInputData,
  sliderASliderData,
  sliderALabelData,
  sliderBData,
  footerInfoContent,
  footerData,
  footerData1,
  footerData2,
  footerData3,
  footerData4,
  footerLegalNavData,
};
