type LiType = "main" | "sub";

interface LItemProps extends React.HTMLProps<HTMLLIElement> {
  type?: LiType;
  className?: string;
  children?: React.ReactNode;
}

const LItemClasses = {
  main: "text-base md:text-lg lg:text-xl leading-snug md:leading-normal",
  sub: "text-sm md:text-base leading-snug ml-8 md:ml-10",
};

const LItem = ({ type = "sub", className, children, ...props }: LItemProps) => {
  return (
    <li
      className={`
        text-gray-700 dark:text-dark-text-default transition-colors duration-500 leading-relaxed
        ${LItemClasses[type]}
        ${className}
      `}
      {...props}
    >
      {children}
    </li>
  );
};

export default LItem;
