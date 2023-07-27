import {
    Container,
    Heading,
    List,
    ListItem
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Publication from '../components/publication'
import publicationsData from '../data/publicationsData.json'

const Publications = () => (
    <Layout>
        <Container>
            <Section delay={0.1}>
                <Heading as="h2" variant="page-title">
                    Publications
                </Heading>
            </Section>

            {publicationsData.map((publication, index) => (
                <Section key={index} delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        {publication.year}
                    </Heading>

                    <List>
                        {publication.publications.map((pub, index) => (
                            <ListItem key={index}>
                                <Publication
                                    paperName={pub.paperName}
                                    authors={pub.authors}
                                    conferenceName={pub.conferenceName}
                                    time={pub.time}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Section>
            ))}
        </Container>
    </Layout>
)

export default Publications
export { getServerSideProps } from '../components/chakra'