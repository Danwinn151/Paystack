//navLinks
//features
//feedback
//stats
//footerLinks
//socialMedia
//clients
import star from "../assets/Star.svg"
import shield from "../assets/Shield.svg"
import send from "../assets/Send.svg"
import Binance from "../assets/binance.png"
import Airbnb from "../assets/airbnb.png"
import coinBase from "../assets/coinbase.png"
import instagram from "../assets/instagram.svg"
import facebook from "../assets/facebook.svg"
import linkedin from "../assets/linkedin.svg"
import twitter from "../assets/twitter.svg"
export const NavLinks = [
    {
        id:1,
        name: " Home",
        link: '#home'
    },
    {
        id:2,
        name: "About Us",
        link: '#AboutUs'
    },
    {
        id:3,
        name: "Contact Us",
        link: '#Contact Us'
    },
    { 
        id:4,
        name: "Our Sponsors",
        link: '#clients'
    }
]

export const stats = [
    {
        id:1,
        number: "2800+",
        message: "USER ACTIVE"
    },
    {
        id:2,
        number: "230+",
        message: "TRUSTED BY COMPANY"
    },
    {
        id:3,
        number: "230M+",
        message: "TRANSACTION"
    }    
]

export const Features = [
    {
        id: 1,
        icon: star,
        name: "Rewards",
        message: "The best credit cards offer some tantalizing combinations of promotions and prizes"
    },
    {
      id: 2,
      name: "100 Secured",
      icon: shield,
      message: "We take proactive steps make sure your information and transactions are secure"
    },
    {
     id: 3,
        name: "Balance Transfer",
        icon: send,
        message: "A balance transfer credit card can save you a lot of money in interest charges"
     }
]

export const clients =  [
    {
        id: 1,
        icon: Airbnb,
    },
    {
        id: 2,
        icon: Binance
    },
    {
        id: 3,
        icon: coinBase
    }
]

export const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Content",
          link: "https://www.hoobank.com/content/",
        },
        {
          name: "How it Works",
          link: "https://www.hoobank.com/how-it-works/",
        },
        {
          name: "Create",
          link: "https://www.hoobank.com/create/",
        },
        {
          name: "Explore",
          link: "https://www.hoobank.com/explore/",
        },
        {
          name: "Terms & Services",
          link: "https://www.hoobank.com/terms-and-services/",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          name: "Help Center",
          link: "https://www.hoobank.com/help-center/",
        },
        {
          name: "Partners",
          link: "https://www.hoobank.com/partners/",
        },
        {
          name: "Suggestions",
          link: "https://www.hoobank.com/suggestions/",
        },
        {
          name: "Blog",
          link: "https://www.hoobank.com/blog/",
        },
        {
          name: "Newsletters",
          link: "https://www.hoobank.com/newsletters/",
        },
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
          link: "https://www.hoobank.com/our-partner/",
        },
        {
          name: "Become a Partner",
          link: "https://www.hoobank.com/become-a-partner/",
        },
      ],
    },
  ];
  
  export const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
  ];
