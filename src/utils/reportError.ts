export const errorReporting = (error: unknown): void => {
  if (__DEV__) {
    console.error(error);
    return;
  }
};
