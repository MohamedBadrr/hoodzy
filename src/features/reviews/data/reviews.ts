export type Review = {
  id: number;
  name: string;
  rating: number;
  verified?: boolean;
  quote: string;
};

export const customerReviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    verified: true,
    quote:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    name: "Alex K.",
    rating: 5,
    verified: true,
    quote:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable.",
  },
  {
    id: 3,
    name: "James L.",
    rating: 5,
    verified: true,
    quote:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection is both on-point and diverse.",
  },
  {
    id: 4,
    name: "Moody A.",
    rating: 5,
    verified: true,
    quote:
      "The site makes shopping simple, and every order has arrived looking just like the photos. It has quickly become my go-to store.",
  },
  {
    id: 5,
    name: "Dina R.",
    rating: 5,
    verified: true,
    quote:
      "Great fabrics, clean fits, and fast delivery. I like that the collection covers everyday outfits and sharper looks in one place.",
  },
];
