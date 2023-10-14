/* eslint-disable no-useless-escape */
export const regexName = (name) => {
  const regex = name
    .replaceAll(/[\/\s()]/g, "-")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  return regex;
};
