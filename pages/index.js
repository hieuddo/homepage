// import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  // SimpleGrid,
  Button,
  List,
  ListItem,
  // useColorModeValue,
  chakra
} from '@chakra-ui/react'
// import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { NewsTable, NewsRow, NewsData } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoFacebook, IoMail, IoLogoGithub } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jaime Hieu Do
          </Heading>
          <p>PhD Candidate in Computer Science</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          Xin chào (Hello)!
          I am currently a PhD candidate and a member of Preferred.AI research group,
          advised by Prof. Hady W. Lauw at SMU School of Computing and Information Systems.
          Previously, I obtained my B.Sc. degree in Computer Science
          at University of Engineering and Technology, Vietnam National University, Hanoi,
          under the supervision of Dr. Mai-Vu Tran and Dr. Duc-Trong Le.

          My primary area of research revolves around the formulation and solution
          of real-world recommender systems.
          I am particularly interested in topics such as
          continual learning for recommender systems
          and streaming session-based recommendation systems.
        </Paragraph>

      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          News
        </Heading>
        <NewsTable>
          <NewsRow>
            <NewsData><strong>2023.07.22</strong></NewsData>
            <NewsData>Paper accepted at RecSys-23, Late-Breaking Results (LBR) track, titled “Continual Collaborative Filtering Through Gradient Alignment”</NewsData>
          </NewsRow>
          <NewsRow>
            <NewsData><strong>2021.11.19</strong></NewsData>
            <NewsData>Passed Qualifying Exam</NewsData>
          </NewsRow>
          <NewsRow>
            <NewsData><strong>2020.08.14</strong></NewsData>
            <NewsData>Joined Ph.D. program at SMU School of Computing and Information Systems</NewsData>
          </NewsRow>
          <NewsRow>
            <NewsData><strong>2020.07.28</strong></NewsData>
            <NewsData>Graduated from VNU-UET (Summa Cum Laude) with Excellent Thesis Award</NewsData>
          </NewsRow>
        </NewsTable>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Teaching Assistant
        </Heading>
        <NewsTable>
          <NewsRow>
            <NewsData><strong>AY2022/2023 Term 3</strong></NewsData>
            <NewsData>CS608 Recommender Systems</NewsData>
          </NewsRow>
          <NewsRow>
            <NewsData><strong>AY2022/2023 Term 1</strong></NewsData>
            <NewsData>IS712 Machine Learning</NewsData>
          </NewsRow>
        </NewsTable>

      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/hieuddo" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @hieuddo
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:dinhhieu.do.2020@smu.edu.sg" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMail />}
              >
                dinhhieu.do.2020@smu.edu.sg
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/hieeudd" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @hieeudd
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/hieeudd/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                @hieeudd
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://preferred.ai/"
            title="Preferred.AI"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;150k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
