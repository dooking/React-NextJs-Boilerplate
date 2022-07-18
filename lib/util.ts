export const getDday = () => {
  const d = new Date('2022-08-01');
  const now = new Date();
  const diff = d.getTime() - now.getTime();
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  return day;
};
