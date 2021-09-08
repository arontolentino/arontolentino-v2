import Badge from './Badge';

const categories = [
  {
    name: 'Next.js',
    color: 'bg-indigo-100 text-indigo-800',
    href: '#',
  },
  {
    name: 'JavaScript',
    color: 'bg-indigo-100 text-indigo-800',
    href: '#',
  },
  {
    name: 'Testing',
    color: 'bg-indigo-100 text-indigo-800',
    href: '#',
  },
  {
    name: 'Career',
    color: 'bg-indigo-100 text-indigo-800',
    href: '#',
  },
  {
    name: 'AWS',
    color: 'bg-indigo-100 text-indigo-800',
    href: '#',
  },
  {
    name: 'Docker',
    color: 'bg-indigo-100 text-indigo-800',
    href: '#',
  },
  {
    name: 'React',
    color: 'bg-indigo-100 text-indigo-800',
    href: '#',
  },
  {
    name: 'Redux',
    color: 'bg-indigo-100 text-indigo-800',
    href: '#',
  },
];

export default function Categories() {
  return (
    <div className="space-y-6">
      <p className="text-lg font-semibold">Categories</p>
      <div className="flex flex-wrap">
        {categories.map(({ name, color, href }) => (
          <Badge
            key={name}
            color={color}
            name={name}
            href={href}
            className="mb-2 mr-2"
          />
        ))}
      </div>
    </div>
  );
}
