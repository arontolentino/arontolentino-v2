import Categories from '../components/Categories';
import Layout from '../components/Layout';
import Popular from '../components/Popular';
import Post from '../components/Post';
import { createApolloFetch } from 'apollo-fetch';

const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: {
      name: 'Article',
      href: '#',
      color: 'bg-indigo-100 text-indigo-800',
    },
    description:
      'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Paul York',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '6 min',
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#', color: 'bg-pink-100 text-pink-800' },
    description:
      'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    author: {
      name: 'Dessie Ryan',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '4 min',
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: {
      name: 'Case Study',
      href: '#',
      color: 'bg-green-100 text-green-800',
    },
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Easer Collins',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '11 min',
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: {
      name: 'Case Study',
      href: '#',
      color: 'bg-green-100 text-green-800',
    },
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Easer Collins',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '11 min',
  },
];

export default function Blog({ posts, tags }) {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-y-12 mt-12 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-0">
        <div className="col-span-2 space-y-8">
          {posts.map(({ node }) => (
            <Post key={node.slug} post={node} />
          ))}
        </div>
        <div className="space-y-6">
          <Categories />
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
					edges {
						node {
							title
							slug
							content
							summary {
								summary
							}
							date
							tags {
								edges {
									node {
										name
										slug
										color {
											text
											background
										}
									}
								}
							}
						}
					}
				}
				tags {
					edges {
						node {
							name
							slug
							color {
								text
								background
							}
						}
					}
				}
			}
		`;

    const apolloFetch = createApolloFetch({ uri });

    const res = await apolloFetch({ query });

    return {
      props: {
        posts: res.data.posts.edges,
        tags: res.data.tags.edges,
      },
    };
  } catch (err) {
    console.log(err.message);
  }
}
