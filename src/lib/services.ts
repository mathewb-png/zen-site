export const CONTACT_EMAIL = "Upheldpsychic@yahoo.com";

export const sessionLengths = [
  { minutes: 20, price: 50 },
  { minutes: 40, price: 75 },
  { minutes: 60, price: 100 },
] as const;

export const featuredSession = {
  title: "Full Session",
  price: 150,
  duration: "90 min",
  followUp: "90 min follow-up in 4 weeks",
  note: "Best value — like two full readings.",
  highlighted: true,
};

export const bogoSpecial = {
  title: "BOGO Special",
  price: 200,
  description: "Two 90 min sessions, each with a follow-up in 4 weeks.",
};

export const readingServices = [
  {
    title: "Tarot / Oracle Readings",
    price: 150,
    duration: "90 min session",
    followUp: "Follow-up session in 4 weeks",
  },
  {
    title: "Couples Readings",
    price: 275,
    duration: "90 min session",
    followUp: "Follow-up session in 4 weeks",
  },
] as const;

export const counselingServices = [
  {
    title: "Spiritual Counseling",
    price: 150,
    duration: "90 min session",
    followUp: "Follow-up session in 2 weeks",
  },
  {
    title: "Couples Spiritual Counseling",
    price: 275,
    duration: "90 min session",
    followUp: "Follow-up session in 2 weeks",
  },
] as const;

export const clearingServices = [
  {
    title: "Personal Chakra / Aura Clearing",
    price: 100,
    duration: "30 min session",
  },
  {
    title: "Home Clearing",
    priceFrom: 80,
    priceTo: 300,
    duration: "Initial walk-through or blessing",
    note: "Up to $300 depending on location, distance, and extent of clearing.",
  },
] as const;

export const weddingService = {
  title: "Officiate Wedding",
  price: 200,
};

export const schedule = {
  regular: "Monday – Saturday, 11:00 AM – 7:00 PM",
  exceptions: [
    {
      dates: "Wednesday, June 10 & June 24",
      location: "Gem Goddess Emporium",
      hours: "12:00 – 4:00 PM",
    },
  ],
};
