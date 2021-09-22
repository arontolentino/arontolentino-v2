import Post from './Post';

export default function Blog({ posts }) {
  return (
    <div className="pt-16 lg:pt-24">
      <div className="relative divide-y-2 divide-gray-200">
        <div>
          <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Latest from the blog
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Tip and tricks on Javascript development and random things in life
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-8">
          {posts.map((post) => (
            <Post key={post.title} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
