export const SCREEN_NAMES = {
  Users: 'Users',
  Home: 'Home',
} as const;

export type screenNames = keyof typeof SCREEN_NAMES;
