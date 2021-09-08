function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Badge({ color, name, href, className }) {
  return (
    <a href={href} className="inline-block">
      <span
        className={classNames(
          `${color} ${className}`,
          'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
        )}
      >
        {name}
      </span>
    </a>
  );
}
