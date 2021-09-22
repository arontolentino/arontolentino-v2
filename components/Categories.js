import Badge from './Badge';

export default function Tags({ tags }) {
  return (
    <div className="space-y-6">
      <p className="text-lg font-semibold">Tags</p>
      <div className="flex flex-wrap">
        {tags.map(({ name, color, href }) => (
          <Badge
            key={name}
            color={color.text}
            background={color.background}
            name={name}
            href={href}
            className="mb-2 mr-2"
          />
        ))}
      </div>
    </div>
  );
}
