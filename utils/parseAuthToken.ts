export const parseAuthToken = (str: string) => str.split(';')[0].split('=')[1];

