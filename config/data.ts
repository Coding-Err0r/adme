import images from "./images";

const data = {
  navbar: ["Overview", "Features", "Product"],

  swiper: [
    {
      id: 1,
      image: images.swiperOne,
      description: "PRICE STARTS FROM 999",
    },
    { id: 2, image: images.swiperTwo, description: "PRICE STARTS FROM 999" },
    { id: 3, image: images.swiperThree, description: "PRICE STARTS FROM 999" },
    { id: 4, image: images.swiperFour, description: "PRICE STARTS FROM 999" },
    { id: 5, image: images.swiperFive, description: "PRICE STARTS FROM 999" },
  ],

  infoCards: [
    {
      description:
        "Select Your Intro Product, Add to Cart & Complete Checkout process.",
      image: images.infoCardOne,
      link: "Order Now",
      title: "Order",
    },
    {
      description:
        "Select Your Intro Product, Add to Cart & Complete Checkout process.",
      image: images.infoCardTwo,
      link: "Design Team",
      title: "Design",
    },
    {
      description:
        "Select Your Intro Product, Add to Cart & Complete Checkout process.",
      image: images.infoCardThree,
      link: "Learn More",
      title: "Create Profile",
    },
    {
      description:
        "Select Your Intro Product, Add to Cart & Complete Checkout process.",
      image: images.infoCardFour,
      link: "Learn More",
      title: "Start Sharing",
    },
  ],

  features: [
    {
      imagefront: images.cardFour,
      imageback: images.cardFour,
      text: [
        "Stories and collections",
        "That inform, help, and Inspire.",
        "Update daily.",
      ],
      position: "bottom",
      size: "medium",
      plusicon: false,
      leftToRight: false,
      bottomToTop: true,
    },
    {
      imagefront: images.cardThree,
      imageback: images.cardThree,
      text: ["Curated by experts.", "Handpic ked for you."],
      position: "bottom",
      size: "small",
      plusicon: false,
      leftToRight: true,
      bottomToTop: false,
    },
    {
      imagefront: images.cardTwo,
      imageback: images.cardTwo,
      text: ["Curated by experts.", "Handpic ked for you."],
      position: "top",
      size: "small",
      plusicon: false,
      leftToRight: true,
      bottomToTop: false,
    },

    {
      imagefront: images.cardOne,
      imageback: images.cardOne,
      text: [
        "Stories and collections",
        "That inform, help, and Inspire.",
        "Update daily.",
      ],
      position: "top",
      size: "medium",
      plusicon: false,
      leftToRight: false,
      bottomToTop: true,
    },
  ],

  qrCodes: [
    {
      title: "Square",
      image: images.qrThree,
    },
    {
      title: "Circle",
      image: images.qrTwo,
    },
    {
      title: "Background",
      image: images.qrOne,
    },
  ],

  faqs: [
    {
      question: "Can I change my plan later?",
      answer:
        "Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries...",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries...",
    },
    {
      question: "Can other info be added to an invoice? ",
      answer:
        "Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries...",
    },
    {
      question: "How does billing work?",
      answer:
        "Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries...",
    },
    {
      question: "How do I change my account email?",
      answer:
        "Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries...",
    },
  ],

  reviews: [
    {
      name: "MH. Yash Sharma",
      rating: 5,
      review:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries mockups. 👌👌",

      image: images.reviewOne,
      designation: "Freelancer",
    },
    {
      name: "Marina Hashim",
      rating: 4,
      review:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries mockups. ✌️✌️",
      image: images.reviewTwo,
      designation: "Digital Marketer",
    },
    {
      name: "Jacky Joon",
      rating: 3,
      review:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries mockups. 😎😎",

      image: images.reviewThree,
      designation: "Graphics Designer",
    },
    {
      name: "Jacky Joon",
      rating: 3,
      review:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries mockups. 😎😎",

      image: images.reviewThree,
      designation: "Graphics Designer",
    },
  ],

  cart: [
    {
      title:
        "Mandana Gold - Metal Business Card | QR Support | NFC-enabled | Premium Quality Metal",
      image: images.cartImage,
      amount: 1,
      price: 2399.0,
      id: 1,
    },
    {
      title:
        "Mandana Gold - Metal Business Card | QR Support | NFC-enabled | Premium Quality Metal",
      image: images.cartImage,
      amount: 1,
      price: 2399.0,
      id: 1,
    },
    {
      title:
        "Mandana Gold - Metal Business Card | QR Support | NFC-enabled | Premium Quality Metal",
      image: images.cartImage,
      amount: 1,
      price: 2399.0,
      id: 1,
    },
    {
      title:
        "Mandana Gold - Metal Business Card | QR Support | NFC-enabled | Premium Quality Metal",
      image: images.cartImage,
      amount: 1,
      price: 2399.0,
      id: 1,
    },
    {
      title:
        "Mandana Gold - Metal Business Card | QR Support | NFC-enabled | Premium Quality Metal",
      image: images.cartImage,
      amount: 1,
      price: 2399.0,
      id: 1,
    },
    {
      title:
        "Mandana Gold - Metal Business Card | QR Support | NFC-enabled | Premium Quality Metal",
      image: images.cartImage,
      amount: 1,
      price: 2399.0,
      id: 1,
    },
    {
      title:
        "Mandana Gold - Metal Business Card | QR Support | NFC-enabled | Premium Quality Metal",
      image: images.cartImage,
      amount: 1,
      price: 2399.0,
      id: 1,
    },
    {
      title:
        "Mandana Gold - Metal Business Card | QR Support | NFC-enabled | Premium Quality Metal",
      image: images.cartImage,
      amount: 1,
      price: 2399.0,
      id: 1,
    },
  ],
  productPreview: [
    images.productOne,
    images.productTwo,
    images.productThree,
    images.productFour,
  ],

  productInfos: [
    {
      title: "Fast Delivery",
      image: images.productInfoSix,
    },
    {
      title: "24/7 Support",
      image: images.productInfoOne,
    },
    {
      title: "Quality Assured",
      image: images.productInfoTwo,
    },
    {
      title: "Secure Pay",
      image: images.productInfoThree,
    },
    {
      title: "Gifts / Offers",
      image: images.productInfoFour,
    },
    {
      title: "Free Shipping",
      image: images.productInfoFive,
    },
  ],

  relatedProducts: [
    {
      title: "black Material Golden Full Custom",
      image: images.productOne,
      price: "3500",
      discountedPrice: "2399",
    },
    {
      title: "black Material Golden Full Custom",
      image: images.productTwo,
      price: "3500",
      discountedPrice: "2399",
    },
    {
      title: "black Material Golden Full Custom",
      image: images.productThree,
      price: "3500",
      discountedPrice: "2399",
    },
    {
      title: "black Material Golden Full Custom",
      image: images.productFour,
      price: 3500,
      discountedPrice: 2399,
    },
  ],
};

export default data;
