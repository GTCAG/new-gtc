const navData = [
  {
    title: "Help Ukraine",
    route: "/ukraine",
  },
  {
    sectionTitle: "Who We Are",
    links: [
      { title: "What We Believe", route: "/belief" },
      { title: "Our Story", route: "/story" },
      { title: "Leadership", route: "/leadership" },
    ],
  },
  {
    sectionTitle: "Our Ministries",
    links: [
      { title: "Youth", route: "/youth" },
      { title: "Kids", route: "/kids" },
      { title: "GTC Cafe", route: "/cafe" },
    ],
  },
  {
    sectionTitle: "Resources",
    links: [
      { title: "Media", route: "/Media" },
      { title: "Contact Us", route: "/contact" },
    ],
  },
  {
    title: "Give Back",
    isHref: true,
    route:
      "https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=YJCTP942P8MRY",
    normal: true,
  },
];

export default navData;
