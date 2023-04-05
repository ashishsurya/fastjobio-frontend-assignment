export const getAuthToken = (str: string | undefined): string | undefined => {
  if (str === undefined) return str;
  return str.split('=')[1];
};
