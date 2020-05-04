// Definitions

const dimensions = {
  width: '800px',
  height: '720px',
};

const monochromes = {
  black: '#000',
  blueLight: '#3fc1ff',
  cyanLight: '#6afff4',
  gray: '#d5d5d5',
  grayLight: '#f7f7f7',
  lime: '#33ffa7',
  magenta: '#f0f',
  magentaPale: '#f3c2ff',
  pink: '#ff0062',
  red: '#f00',
  violet: '#ba00ff',
  white: '#fff',
  yellow: '#ff0',
};

const colors = {
  ...monochromes,
};

// Typography

const typography = {
  family: 'Montserrat Regular',
  familyAccessible: 'Myriad Pro Regular',
  familyHeading: 'Data70 Regular',
  lineHeight: 1.15,
  size: '1.4em',
  style: 'normal',
  weight: 400,
  weightBold: 900,
};

// Base

const layout = {
  borderRadius: '1rem',
  spacing: '2rem',
  width: dimensions.width,
  height: dimensions.height,
};

const links = {
  color: colors.black,
  fontWeight: typography.weight,
};

// Components

const components = {};

// Media-query

const media = {
  desktop: `(min-width: ${dimensions.width})`,
};

// Z-index

const layers = {
  Navigation: 9000,
  ThreeInterfaceElement: 10000,
};

// Variables

export default {
  colors,
  components,
  layers,
  layout,
  links,
  media,
  typography,
};
