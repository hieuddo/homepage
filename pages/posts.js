import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/contents/pepefrog.png'
import thumbHowToUseInkdrop from '../public/images/contents/pepefrog.png'
import thumbFishWorkflow from '../public/images/contents/pepefrog.png'
import thumbMyDeskSetup from '../public/images/contents/pepefrog.png'
import thumb500PaidUsers from '../public/images/contents/pepefrog.png'
import thumbFinancialGoal from '../public/images/contents/pepefrog.png'
import thumbHowToPriceYourself from '../public/images/contents/pepefrog.png'
import thumb50xFaster from '../public/images/contents/pepefrog.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to build a portfolio website"
            thumbnail={thumbPortfolio}
            href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
          />
          <GridItem
            title="How to take notes in Markdown efficiently with Inkdrop"
            thumbnail={thumbHowToUseInkdrop}
            href="https://www.youtube.com/watch?v=-qBavwqc_mY"
          />
          <GridItem
            title="My Fish workflow"
            thumbnail={thumbFishWorkflow}
            href="https://www.youtube.com/watch?v=KKxhf50FIPI"
          />
        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
