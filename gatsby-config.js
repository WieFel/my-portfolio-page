const manifestConfig = require('./manifest-config');
require('dotenv').config();

const plugins = [
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Cabin', 'Open Sans'],
      },
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: manifestConfig,
  },
  'gatsby-transformer-remark',
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown`,
      path: `${__dirname}/src/content`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `assets`,
      path: `${__dirname}/src/assets`,
    },
  },
  'gatsby-plugin-styled-components',
  'gatsby-plugin-offline',
  'gatsby-plugin-sharp',
];

module.exports = {
  siteMetadata: {
    isMediumUserDefined: false,
    deterministicBehaviour: true,
  },
  plugins,
};
