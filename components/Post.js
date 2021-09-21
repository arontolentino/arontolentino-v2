import Badge from './Badge';
import Link from 'next/link';

export default function Post({ post }) {
  const {
    title,
    summary: { summary },
    tags,
    slug,
  } = post;

  return (
    <div className="border-b-2 border-gray-100 pb-8">
      <div>
        <Badge
          // href={post.category.href}
          // color={post.category.color}
          name={tags.edges[0].node.name}
        />
      </div>
      <Link href={`blog/${slug}`} className="block mt-4">
        <a>
          <p className="text-2xl font-semibold text-gray-900">{title}</p>
          <p className="mt-3 text-base text-gray-500">{summary}</p>
        </a>
      </Link>
      <div className="mt-6">
        <div className="flex space-x-1 text-sm text-gray-500">
          {/* <time dateTime={post.datetime}>{post.date}</time> */}
          <span aria-hidden="true">&middot;</span>
          {/* <span>{post.readingTime} read</span> */}
        </div>
      </div>
    </div>
  );
}
