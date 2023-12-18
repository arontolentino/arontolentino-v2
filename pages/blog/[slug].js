import Head from 'next/head';
import Categories from '../../components/Categories';
import Layout from '../../components/Layout';
import { createApolloFetch } from 'apollo-fetch';
import Moment from 'react-moment';

export default function Blog({ post, tags }) {
  const {
    title,
    content,
    summary: { summary },
    featuredImage,
    date,
  } = post;

  return (
    <>
      <Head>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={summary} />
        <meta property="og:image" content={featuredImage?.node?.sourceUrl} />
      </Head>
      <Layout>
        <div className="grid grid-cols-1 gap-y-12 mt-12 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-0">
          <div className="col-span-2">
            <div className="text-lg border-b-2 border-gray-100 pb-6">
              {/* Title */}
              <h1 className="mt-2 block text-4  xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </h1>

              {/* Summary */}
              {summary && (
                <p className="mt-4 text-2xl text-gray-500 leading-8">
                  {summary}
                </p>
              )}

              {/* Meta Description */}
              <div className="mt-6">
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-02-12">
                    <Moment format="ll">{date}</Moment>
                  </time>
                  <span aria-hidden="true">&middot;</span>
                  <span>11 min read</span>
                </div>
              </div>
            </div>
            {/* Content Body */}
            <div
              className="blog-content mt-6 text-gray-500 space-y-6"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
          <div className="col-span-1 space-y-8">
            <Categories tags={tags} />
            {/* <Popular /> */}
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  try {
    const uri = 'https://cms.arontolentino.com/graphql';

    const query = `
      query PostSlugs {
        posts {
          edges {
            node {
              slug
            }
          }
        }
      }
		`;

    const apolloFetch = createApolloFetch({ uri });

    const res = await apolloFetch({ query });

    const posts = await res.data.posts.edges;

    const paths = posts.map((post) => {
      return `/blog/${post.node.slug}`;
    });

    return { paths, fallback: false };
  } catch (err) {
    console.log(err.message);
  }
}

export async function getStaticProps({ params }) {
  try {
    const uri = 'https://cms.arontolentino.com/graphql';

    const query = `
      query Post {
        postBy(slug: "${params.slug}") {
          id
          title
          content
          summary {
            summary
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          date
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
        post: res.data.postBy,
        tags: res.data.tags.nodes,
      },
    };
  } catch (err) {
    console.log(err.message);
  }
}
