import Badge from './Badge';

export default function Post({ post }) {
  return (
    <div key={post.title} className="border-b-2 border-gray-100 pb-8">
      <div>
        <Badge
          href={post.category.href}
          color={post.category.color}
          name={post.category.name}
        />
      </div>
      <a href={post.href} className="block mt-4">
        <p className="text-2xl font-semibold text-gray-900">{post.title}</p>
        <p className="mt-3 text-base text-gray-500">{post.description}</p>
      </a>
      <div className="mt-6">
        <div className="flex space-x-1 text-sm text-gray-500">
          <time dateTime={post.datetime}>{post.date}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readingTime} read</span>
        </div>
      </div>
    </div>
  );
}
