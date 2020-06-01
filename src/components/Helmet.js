import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const Helmet = ({ theme = {} }) => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { id: { eq: "helmet" } }) {
          frontmatter {
            name
            description
          }
        }
        file(relativePath: { eq: "icons/logo-yellow.png" }) {
          childImageSharp {
            favicon16: fixed(width: 16, height: 16) {
              src
            }
            favicon32: fixed(width: 32, height: 32) {
              src
            }
            bigIcon: fixed(width: 192, height: 192) {
              src
            }
            appleIcon: fixed(width: 180, height: 180) {
              src
            }
          }
        }
      }
    `}
    render={(data) => {
      const { title, description } = data.markdownRemark.frontmatter;
      const childImageSharp = data.file.childImageSharp;

      return (
        <ReactHelmet htmlAttributes={{ lang: 'en' }}>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <link
            rel="shortcut icon"
            href={`https:${childImageSharp.favicon32.src}`}
          />
          <meta name="theme-color" content={theme.background} />
          <meta
            name="image"
            content={`https:${childImageSharp.favicon32.src}`}
          />
          <meta itemProp="name" content={title} />
          <meta itemProp="description" content={description} />
          <meta
            itemProp="image"
            content={`https:${childImageSharp.favicon32.src}`}
          />
          <meta name="og:title" content={title} />
          <meta name="og:description" content={description} />
          <meta
            name="og:image"
            content={`https:${childImageSharp.bigIcon.src}`}
          />
          <meta name="og:site_name" content={title} />
          <meta name="og:locale" content="en_US" />
          <meta name="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta
            name="twitter:image"
            content={`https:${childImageSharp.bigIcon.src}`}
          />
          <meta
            name="twitter:image:src"
            content={`https:${childImageSharp.bigIcon.src}`}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`https:${childImageSharp.appleIcon.src}`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`https:${childImageSharp.favicon32.src}`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`https:${childImageSharp.favicon16.src}`}
          />
        </ReactHelmet>
      );
    }}
  />
);

Helmet.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object,
};

export default withTheme(Helmet);
