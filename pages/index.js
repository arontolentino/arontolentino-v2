import { createApolloFetch } from 'apollo-fetch';
import Layout from '../components/Layout';
import Blog from '../components/Blog';
import Hero from '../components/Hero';

export default function Home({ posts }) {
  return (
    <Layout>
      <Hero />
      <Blog posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const uri = 'https://cms.arontolentino.com/graphql';

    const query = `
      query Posts {
        posts {
          nodes {
            title
            slug
            content
            summary {
              summary
            }
            date
            readingTime
            tags {
              nodes {
                name
                slug
                color {
                  background
                  text
                }
              }
            }
          }
        }
        tags {
          nodes {
            name
            slug
            color {
              text
              background
            }
          }
        }
      }
		`;

    const apolloFetch = createApolloFetch({ uri });

    const res = await apolloFetch({ query });

    return {
      props: {
        posts: res.data.posts.nodes,
      },
    };
  } catch (err) {
    console.log(err.message);
  }
}
