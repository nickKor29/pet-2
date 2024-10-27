export type Review = {
  rating: number;
  comment: string;
  tourId: number | string;
  userId?: number;
};
