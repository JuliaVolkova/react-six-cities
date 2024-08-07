export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

export type UserPreview = Pick<User, 'name' | 'avatarUrl' | 'isPro'>;
