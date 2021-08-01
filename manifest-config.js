const colors = require('./colors');

module.exports = {
  name: "Felix Wielander's Portfolio",
  short_name: 'FW Portfolio',
  start_url: '/',
  background_color: colors.background,
  theme_color: colors.primaryDark,
  display: 'minimal-ui',
  icon: 'src/assets/icons/logo-yellow.png',
  icon_options: {
    purpose: `any maskable`,
  },
};
