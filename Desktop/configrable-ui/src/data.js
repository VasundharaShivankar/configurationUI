import facebook from "./components/Footer/icons/facebook.png"
import twitter from "./components/Footer/icons/twitter.png"
import instagram from "./components/Footer/icons/instagram.png"

const birthdayCakes = [
    {
        id:"100",
        img: "https://www.fnp.com/images/pr/l/v200/butterscotch-birthday-cake-half-kg_1.jpg",
        title: "Butterscotch Birthday Cake- Half Kg",
        price: "₹ 799",
        description: "Indulge them in the decadent delight of our butterscotch cake, crafted to elevate celebrations with its rich, caramelised flavours. Perfect for those who savour life's sweetness, this cake is a symphony of buttery notes and golden caramel, making every bite an exquisite treat. Gift this to add a touch of joy to any occasion.",
        productDetails: {
            flavour: "Butter scotch",
            weight: "Half Kg",
            cakeVersion: "Contains egg",
            typeOfCake: "Cream cake",
            shape: "Round",
            serves: " 4-6 people",
            size: "6 inches (approx)",
            netQuantity: "1 Unit"
        }
    },
    {
        id:"200",
        img: "https://www.fnp.com/images/pr/l/v200/butterscotch-crunch-cake-half-kg_1.jpg",
        title: "Butterscotch Crunch Cake- Half Kg",
        price: "₹ 799",
        description: "Delight in the sweet sophistication of our Butterscotch cream cake, adorned with a heartfelt Happy Birthday. With its rich butterscotch flavour and creamy layers, it's a delectable gift for birthdays. Treat your loved ones to a moment of indulgence and joy with this special creation, a gesture that speaks volumes of love and appreciation. Perfect for anyone who deserves a slice of happiness on their special day.",
        productDetails: {
            flavour: "Butter scotch",
            weight: "Half Kg",
            cakeVersion: "Contains egg",
            typeOfCake: "Cream cake",
            shape: "Round",
            serves: " 4-6 people",
            size: "6 inches (approx)",
            netQuantity: "1 Unit"
        }
    },
    {
        id:"300",
        img: "https://www.fnp.com/images/pr/l/v200/birthday-bliss-red-velvet-cake-half-kg_1.jpg",
        title: "Birthday Bliss Red Velvet Cake- Half Kg",
        price: "₹ 899",
        description: "Celebrate in style with our exquisite Red Velvet cream cake, adorned with a heartfelt Happy Birthday.  Bursting with luxurious red velvet flavour and sumptuous cream layers, it's the perfect gift for birthdays. Indulge your loved ones with this decadent delight, a sweet reminder of love and joy on their special day. Ideal for anyone who deserves a taste of pure happiness.",
        productDetails: {
            flavour: "Red velvet",
            weight: "Half Kg",
            cakeVersion: "Contains egg",
            typeOfCake: "Cream cake",
            shape: "Round",
            serves: " 4-6 people",
            size: "6 inches (approx)",
            netQuantity: "1 Unit"
        }
    },
    {
        id:"400",
        img: "https://www.fnp.com/images/pr/l/v200/birthday-bliss-vanilla-dream-cake-half-kg_1.jpg",
        title: "Birthday Bliss Vanilla Dream Cake- Half Kg",
        price: "₹ 649",
        description: "Celebrate with simplicity and elegance with our vanilla cream cake, adorned with a heartfelt Happy Birthday. Its timeless vanilla flavour and creamy texture make it the perfect gift for any birthday celebration. Treat your loved ones to a taste of pure joy and nostalgia with this classic creation, a meaningful gesture that brings warmth and happiness to any occasion. Ideal for anyone who appreciates the simple pleasures of life.",
        productDetails: {
            flavour: "Vanilla",
            weight: "Half Kg",
            cakeVersion: "Contains egg",
            typeOfCake: "Cream cake",
            shape: "Round",
            serves: " 4-6 people",
            size: "6 inches (approx)",
            netQuantity: "1 Unit"
        }
    },
    {
        id:"500",
        img: "https://www.fnp.com/images/pr/l/v200/floral-fantasy-chocolate-cake-15-kg-eggless_1.jpg",
        title: "Floral Fantasy Chocolate Cake 1.5 Kg Eggless",
        price: "₹ 1525",
        description: "This designer cake is a delicious blend of rich chocolate cream and delicate floral flavours. The layers of fluffy vanilla sponge with a subtle floral essence perfectly complements the decadent chocolate cream filling. The cake adds a touch of elegance with its delicate piped roses in a range of pastel colours.",
           productDetails: {
            flavour: "Chocolate",
            weight: "1.5 Kg",
            cakeVersion: "Eggless",
            typeOfCake: "Cream cake",
            shape: "Round",
            serves: "14-18 people",
            size: "6 inches (approx)",
            netQuantity: "1 Unit"
        }
    },
    {
        id:"600",
        img: "https://www.fnp.com/images/pr/x/v20200901213927/teddy-bear-2-tier-truffle-cake-15-kg_1.jpg",
        title: "Teddy Bear 2 Tier Truffle Cake 15 Kg",
        price: "₹ 3025",
        description: "This designer cake is a delicious blend of rich chocolate cream and delicate fondant flavours. The cake stand, cutlery & accessories used in the image are only for representation purposes. They are not delivered with the cake. This cake is hand delivered in a good quality cardboard box The layers of fluffy vanilla sponge with a subtle floral essence perfectly complements the decadent chocolate cream filling. The cake adds a touch of elegance with its delicate piped roses in a range of pastel colours.",
           productDetails: {
            flavour: "Truffle",
            weight: "1.5 Kg",
            cakeVersion: "Eggless",
            typeOfCake: "Fondant",
            shape: "Round",
            serves: "15-18 people",
            size: "12 inches (approx)",
            netQuantity: "1 Unit"
        }
    }
]

const weddingCakes = [
    {
      id: "700",
      img: "https://www.fnp.com/images/pr/l/v200/rose-paradise-chocolate-cake-eggless-half-kg_2.jpg",
      title: "Rose Paradise Chocolate Cake Eggless Half Kg",
      price: "₹ 5675",
      description: "Make your wedding day even more special with our elegant tiered wedding cake. Crafted with love and attention to detail, this cake features delicate fondant decorations and layers of moist sponge. It's a symbol of love and celebration, perfect for sharing with family and friends.",
      productDetails: {
        flavour: "Chocolate",
        weight: "3-tiered",
        cakeVersion: "Eggless",
        typeOfCake: "Fondant cake",
        shape: "Round",
        serves: "50-60 guests",
        size: "10-8-6 inches",
        netQuantity: "1 Unit"
      }
    },
    {
      id: "800",
      img: "https://www.fnp.com/images/pr/l/v200/decorated-chocolate-truffle-cake-half-kg-eggless_1.jpg",
      title: "Decorated Chocolate Truffle Cake Half Kg Eggless",
      price: "₹ 575",
      description: "Indulge in the richness of our chocolate ganache wedding cake. Layers of velvety chocolate sponge are covered in glossy ganache, creating a heavenly dessert for your special day. Share this delightful treat with your loved ones as you celebrate love and commitment.",
      productDetails: {
        flavour: "Truffle",
        weight: "500 gm",
        cakeVersion: "Eggless",
        typeOfCake: "Cream Cake",
        shape: "Square",
        serves: "4-6 guests",
        size: "8 inches",
        netQuantity: "1 Unit"
      }
    },
        {
          id: "900",
          img: "https://www.fnp.com/images/pr/l/v200/fruit-overload-cake-half-kg-eggless_1.jpg",
          title: "Fruit Overload Cake Half Kg Eggless",
          price: "₹ 725",
          description: "Make your wedding day even more special with our elegant tiered wedding cake. Crafted with love and attention to detail, this cake features delicate fondant decorations and layers of moist sponge. It's a symbol of love and celebration, perfect for sharing with family and friends.",
          productDetails: {
            flavour: "Pineapple Fruit Cake",
            weight: "3-tiered",
            cakeVersion: "Eggless",
            typeOfCake: "Cream cake",
            shape: "Round",
            serves: "10-11 guests",
            size: "10-8-6 inches",
            netQuantity: "1 Unit"
          }
        },
        {
          id: "1000",
          img: "https://www.fnp.com/images/pr/l/v200/butterscotch-cake-half-kg-eggless_1.jpg",
          title: "Butterscotch Cake Half kg Eggless",
          price: "₹ 599",
          description: "Indulge in the richness of our chocolate ganache wedding cake. Layers of velvety chocolate sponge are covered in glossy ganache, creating a heavenly dessert for your special day. Share this delightful treat with your loved ones as you celebrate love and commitment.",
          productDetails: {
            flavour: "Butterscotch",
            weight: "2-tiered",
            cakeVersion: "Eggless",
            typeOfCake: "Cream cake",
            shape: "Square",
            serves: "4-6 guests",
            size: "8-6 inches",
            netQuantity: "1 Unit"
          }
        }, 
  ];
  
const theme={
  backgroundColor1:"#8da4ff",
  backgroundImage1: "linear-gradient(45deg, #8da4ff 0%, #f947ed 46%, #ffe24b 100%)",
  backgroundImage2: "linear-gradient( 135deg, #F761A1 10%, #8C1BAB 100%)"
}

const footerData = {
  address: {
    line1: "Pragati Colony",
    line2: "Sendurwafa",
    city: "Sakoli",
    state: "Maharashtra",
    zip: "441904"
  },
  contact: {
    phone: "9970059488",
    email: "vasundharashivankar179@gmail.com"
  },
  socialLinks: [
    {
      name: "Facebook",
      url: "https://www.instagram.com/vasundhara_shivankar/",
      icon:facebook
    },
    {
      name: "Twitter",
      url: "https://www.instagram.com/vasundhara_shivankar/",
      icon:twitter
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/vasundhara_shivankar/",
      icon:instagram
    }
  ],
  copyright: "© 2024 BumbbleBee Cake Shop. All Rights Reserved."
};


export { 
    birthdayCakes,
    weddingCakes,
    theme,
    footerData
 }