export const products = [
  {
    id: 1,
    name: "Echo Dot",
    price: 279.0,
    image:
      "https://images.kabum.com.br/produtos/fotos/129093/smart-speaker-home-echo-dot-amazon-alexa-4-geracao-preto-b084dwczy6_1601639273_original.jpg",
  },
  {
    id: 2,
    name: "Kindle Paperwhite",
    price: 499.0,
    image:
      "https://teleread.files.wordpress.com/2016/06/kindle__white__front-0.jpg",
  },
  {
    id: 3,
    name: "Necronomicon",
    price: 6.66,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMSYgLGHWn1WaMM3eEOr5OccdjqaF7iAGDVg5xDwtY4VgK6S7xo315uGk444tG5km9Wds&usqp=CAU",
  },
];

export const prodReducer = (state = products, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
