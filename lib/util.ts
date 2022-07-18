export const getDday = () => {
  const today = new Date();
  const dday = new Date(2022, 8, 1);
  const diff = dday.getTime() - today.getTime();
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  return day;
};
