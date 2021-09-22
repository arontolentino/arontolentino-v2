function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Badge({ color, background, name, href, className }) {
  return (
    <a href={href} className="inline-block">
      <span
        // className={classNames(
        //   `${color} ${className}`,
        //   'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
        // )}
        className="inline-flex items-center px-3 py-1 mr-2 mb-2 rounded-full text-sm font-medium"
        style={{ color, background }}
      >
        {name}
      </span>
    </a>
  );
}
