import Moment from 'react-moment';
import Link from 'next/link';
import Badge from './Badge';

export default function Post({ post }) {
  const {
    title,
    summary: { summary },
    tags,
    slug,
    readingTime,
    date,
  } = post;

  return (
    <div className="border-b-2 border-gray-100 pb-8">
      <div>
        <Badge
          // href={post.category.href}
          color={tags.nodes[0].color.text}
          background={tags.nodes[0].color.background}
          name={tags.nodes[0].name}
        />
      </div>
      <Link href={`blog/${slug}`}>
        <a className="mt-2 block">
          <p className="text-2xl font-semibold text-gray-900">{title}</p>
          <p className="mt-3 text-base text-gray-500">{summary}</p>
        </a>
      </Link>
      <div className="mt-6">
        <div className="flex space-x-1 text-sm text-gray-500">
          <Moment format="LL">{post.date}</Moment>
          <span aria-hidden="true">&middot;</span>
          <span>{readingTime} minute read</span>
        </div>
      </div>
    </div>
  );
}
