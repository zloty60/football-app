const mainTheme = {
  color: {
    bodyBg: "#E1E2E1",
    navbar: "#00695c",
  },
  font: {
    main: "'Roboto', sans-serif",
  },
  breakpoints: [0, 600, 960, 1280],
  zIndex: {
    leagueMenu: 10,
  },
};

const MEDIA_SM = `@media(min-width: ${mainTheme.breakpoints[1]}px)`;
const MEDIA_MD = `@media(min-width: ${mainTheme.breakpoints[2]}px)`;
const MEDIA_LG = `@media(min-width: ${mainTheme.breakpoints[3]}px)`;

export { mainTheme, MEDIA_SM, MEDIA_MD, MEDIA_LG };
