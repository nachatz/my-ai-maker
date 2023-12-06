export const get = (url: string) => fetch(url).then((res) => res.json());
