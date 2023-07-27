// import NextLink from 'next/link'
import {
    Container,
    Heading
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Publications = () => (
    <Layout>
        <Container>
            <Section delay={0.1}>
                <Heading as="h2" variant="page-title">
                    Publications
                </Heading>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    2023
                </Heading>

            </Section>
        </Container>
    </Layout>
)

export default Publications
export { getServerSideProps } from '../components/chakra'
