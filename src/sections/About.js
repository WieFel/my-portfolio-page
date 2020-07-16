import React from 'react';
import { Box, Image, Flex } from 'rebass/styled-components';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

const About = () => (
  <Section.Container id="about" Background={Background}>
    <StaticQuery
      query={graphql`
        query AboutQuery {
          markdownRemark(frontmatter: { id: { eq: "about" } }) {
            frontmatter {
              title
            }
            rawMarkdownBody
          }
        }
      `}
      render={(data) => {
        const title = data.markdownRemark.frontmatter.title;
        const content = data.markdownRemark.rawMarkdownBody;
        return (
          <>
            <Section.Header name={title} icon="user" label="about" />
            <Flex
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              style={{ 'font-size': '1.1em' }}
            >
              <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
                <Fade bottom>
                  <ReactMarkdown source={content} />
                </Fade>
              </Box>
            </Flex>
          </>
        );
      }}
    />
  </Section.Container>
);

export default About;
