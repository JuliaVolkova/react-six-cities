import { UserPreview } from './user.ts';

export type OfferReview = {
  id: string;
  date: string;
  user: UserPreview;
  comment: string;
  rating: number;
};

export type OfferReviews = OfferReview[];
