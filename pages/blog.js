import Categories from '../components/Categories';
import Layout from '../components/Layout';
import Popular from '../components/Popular';
import Post from '../components/Post';
import { createApolloFetch } from 'apollo-fetch';

export default function Blog({ posts, tags }) {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-y-12 mt-12 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-0">
        <div className="col-span-2 space-y-8">
          {posts.map((post) => (
            <Post key={post.slug} post={post} />
          ))}
        </div>
        <div className="space-y-6">
          <Categories tags={tags} />
        </div>
      </div>
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
        tags: res.data.tags.nodes,
      },
    };
  } catch (err) {
    console.log(err.message);
  }
}
