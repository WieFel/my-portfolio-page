import React from 'react';
import { Box, Image, Flex } from 'rebass/styled-components';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';

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
          allMarkdownRemark(filter: { frontmatter: { id: { eq: "about" } } }) {
            nodes {
              frontmatter {
                title
              }
              rawMarkdownBody
            }
          }
        }
      `}
      render={(data) => {
        const title = data.allMarkdownRemark.nodes[0].frontmatter.title;
        const content = data.allMarkdownRemark.nodes[0].rawMarkdownBody;
        return (
          <div>
            <Section.Header name={title} icon="🙋‍♂️" label="person" />
            <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
              <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
                <Fade bottom>
                  <ReactMarkdown
                    source={content}
                    renderers={markdownRenderer}
                  />
                </Fade>
              </Box>
            </Flex>
          </div>
        );
      }}
    />
  </Section.Container>
);

export default About;
