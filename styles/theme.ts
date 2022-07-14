export const theme = {
  color: {
    white: '#fff',
    black: 'black',
    purple: '#8661de',
    blue: '#00bac7',
    gray: '#f6f6f6',
    green: '#07b495',
    lightGreen: '#99ecdd',
    darkGray: '#54595d',
  },
  boxShadow: {
    normal: '0 3px 8px 0 rgb(0 0 0 / 10%)',
    purple: '0 3px 8px 0 #d6c9ff',
    blue: '0 3px 8px 0 #b3e2e6',
  },
};

export const fonts = {
  family: {
    base: `'Noto Sans KR', sans-serif`,
    bibbidi: `'Courgette', cursive;`,
    ibmPlex: `'IBM Plex Sans Thai', sans-serif;`,
    GmarketSansLight: `'GmarketSansLight', sans-serif;`,
    GmarketSansMedium: `'GmarketSansMedium', sans-serif;`,
    GmarketSansBold: `'GmarketSansBold', sans-serif;`,
  },
  size: {
    title: '3rem',
    subTitle: '1.3rem',
  },
  color: {
    lightGray: '#78797A',
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
