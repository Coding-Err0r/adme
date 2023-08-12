import images from "./images";

const data = {
  navbar: [
    {
      title: "Features",
      href: "",
      subMenu: [],
    },
    {
      title: "Orders",
      href: "/tracking",
      subMenu: [],
    },
    {
      title: "Products",
      href: "/products",
      subMenu: [
        {
          title: "All Products",
          href: "/all-products",
        },
        {
          title: "Corporate",
          href: "/corporate",
        },
        {
          title: "Elegant",
          href: "/elegant",
        },
        {
          title: "Modern",
          href: "/modern",
        },
        {
          title: "Futuristic",
          href: "/futuristic",
        },
      ],
    },
  ],

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

  terms: {
    background: `
Welcome to Mobilo! We offer smart business cards that allow users to share their contact information and collect lead information through the use of physical and digital cards (“Cards”), with a corresponding software platform that allows you to customize your Cards, track leads, and track how your Cards are used (“Software”). Please read the following Terms of Use carefully.`,
    "AGREEMENT TO TERMS": `These Terms of Use (these “Terms” or these “Terms of Use”) constitute a legally binding agreement made between you (“you”) and Lulu Systems, Inc., (“Mobilo“, “we”, “us”, or “our”), concerning your access to and use of the https://www.mobilocard.com website as well as any other media form, media channel, mobile website, software, hardware (including Cards), web application, or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site or creating an account on the
Site, you (i) represent that you are eighteen (18) years of age or older and have the capacity to read and understand these Terms, (ii) represent and warrant that you have read and understood these Terms and our Privacy Policy and (iii) agree to be bound by all of these Terms. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY. If you are accessing the Site as part of a subscription held by your employer or affiliated organization (your “Employer”), any enterprise agreement or addendum executed by your Employer with Mobilo (an “Enterprise Agreement”) will override these Terms to the extent they conflict. If your Employer did not execute a separate Enterprise Agreement, you acknowledge and agree that you are executing these Terms on behalf of your Employer, and not yourself individually, and you represent and warrant that you have authority to do so. Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right.`,
    "INTELLECTUAL PROPERTY RIGHTS": `Unless otherwise indicated, the Site and all source code, databases, functionality, inventions, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, foreign jurisdictions, and international conventions. The Content and the Marks are provided on the Site “AS IS” for your information and personal use onlব.`,
  },
  payments: [
    { title: "Sslcommerz", image: images.paymentFour },
    { title: "Bkash", image: images.paymentThree },
    { title: "Nagad", image: images.paymentTwo },
    { title: "Cash on delivery", image: images.paymentOne },
  ],

  trackings: [
    {
      title:
        "Mandana Gold - Metal Business Card | QR Support |  NFC- enabled |  Premium Quality",
      image: images.cartImage,
      amount: 1,
      price: 2399.0,
      id: 1,
    },
    {
      title:
        "Mandana Gold - Metal Business Card | QR Support |  NFC- enabled |  Premium Quality",
      image: images.cartImage,
      amount: 1,
      price: 2399.0,
      id: 1,
    },
    {
      title:
        "Mandana Gold - Metal Business Card | QR Support |  NFC- enabled |  Premium Quality",
      image: images.cartImage,
      amount: 1,
      price: 2399.0,
      id: 1,
    },
    {
      title:
        "Mandana Gold - Metal Business Card | QR Support |  NFC- enabled |  Premium Quality",
      image: images.cartImage,
      amount: 1,
      price: 2399.0,
      id: 1,
    },
  ],
  profile: [
    {
      title: "isNotAuthorized",
      value: [
        {
          title: "Login",
          href: "/auth/login",
        },
        {
          title: "Sign Up",
          href: "/auth/signup",
        },
      ],
    },
    {
      title: "isAuthorized",
      value: [
        {
          title: "Your profile",
          href: "/editprofile",
        },
        {
          title: "Orders",
          href: "/tracking",
        },
        {
          title: "Logout",
          href: "/logout",
        },
      ],
    },
  ],
  currency: [
    {
      title: "BDT",
      value: "BDT ৳",
    },
    {
      title: "USD",
      value: "USD $",
    },
    {
      title: "EUR",
      value: "EUR €",
    },
  ],
};

export default data;
