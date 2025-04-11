interface H3Props extends React.HTMLProps<HTMLHeadingElement> {
  className?: string;
  children?: React.ReactNode;
}

const H3 = ({ className, children, ...props }: H3Props) => {
  return (
    <h3
      className={`
      mb-3 text-2xl sm:text-3xl md:text-[32px] lg:text-[34px] xl:text-[36px]
      font-bold text-gray-800 dark:text-dark-text-default
      leading-snug tracking-tight transition-colors duration-500
      ${className}
    `}
      {...props}
    >
      {children}
    </h3>
  );
};

export default H3;
