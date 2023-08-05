import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/blog/pepefrog.png'
import thumbWalknote from '../public/images/blog/pepefrog.png'
import thumbFourPainters from '../public/images/blog/pepefrog.png'
import thumbMenkiki from '../public/images/blog/pepefrog.png'
import thumbMargelo from '../public/images/blog/pepefrog.png'
import thumbModeTokyo from '../public/images/blog/pepefrog.png'
import thumbStyly from '../public/images/blog/pepefrog.png'
import thumbPichu2 from '../public/images/blog/pepefrog.png'
import thumbFreeDBTagger from '../public/images/blog/pepefrog.png'
import thumbAmembo from '../public/images/blog/pepefrog.png'

const blog = () => (
  <Layout title="blog">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Blog
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail={thumbWalknote}
          >
            Music recommendation app for iOS
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default blog
export { getServerSideProps } from '../components/chakra'
