import Color from 'color';

const baseTheme = {
  color: {
    primary: '#00A1FF',
    appBg: '#3C3C3C',
    containerBg: '#555555',
  },
  radius: {
    lg: '8px',
  }
}

const theme = {
  getTheme: () => {
    return baseTheme;
  },
};
export default theme;
