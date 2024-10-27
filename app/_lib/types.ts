export type Review = {
  rating: number;
  comment: string;
  tourId: number | string;
  userId?: number;
};
export type User = {
  userId: number;
  name: string;
  email: string;
  image: string;
  toursIds: number[];
};
export type Session = {
  user: User;
};
