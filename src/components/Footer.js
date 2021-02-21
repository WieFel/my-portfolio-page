import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Text, Box, Link, Flex } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import SocialLink from './SocialLink';

const FooterContainer = styled.div`
  max-width: 1366px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media (max-width: 400px) {
    flex-direction: column-reverse;

    & > * {
      margin-bottom: 10px;
    }
  }
`;

const TextFooter = styled(Text)`
  color: ${(props) => props.theme.colors.background};

  & a {
    color: ${(props) => props.theme.colors.background};
    transition: color ease 0.5s;

    &:hover {
      color: ${(props) => props.theme.colors.primaryLight};
    }
  }
`;

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        markdownRemark(frontmatter: { id: { eq: "landing" } }) {
          frontmatter {
            name
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
        }
      }
    `}
    render={(data) => {
      const { name, socialLinks } = data.markdownRemark.frontmatter;

      return (
        <Box p={[2, 3]} backgroundColor="primaryDark" as="footer">
          <FooterContainer>
            <Fade left>
              <TextFooter>
                <p>{`2021 Felix Wielander`}</p>
                <div>
                  Powered by{' '}
                  <Link href="https://www.gatsbyjs.org/">Gatsby</Link>
                </div>
                <div>
                  Some icons made by{' '}
                  <a
                    href="https://www.flaticon.com/authors/eucalyp"
                    title="Eucalyp"
                  >
                    Eucalyp
                  </a>
                  .
                </div>
              </TextFooter>
            </Fade>
            <Flex>
              <Fade right>
                {socialLinks.map(({ id, url, name, fontAwesomeIcon }) => (
                  <Box mx={[2, 3]} fontSize={[4, 5]} key={id}>
                    <SocialLink
                      color="background"
                      name={name}
                      url={url}
                      fontAwesomeIcon={fontAwesomeIcon}
                    />
                  </Box>
                ))}
              </Fade>
            </Flex>
          </FooterContainer>
        </Box>
      );
    }}
  />
);

export default Footer;
