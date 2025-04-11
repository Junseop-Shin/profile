interface H2Props extends React.HTMLProps<HTMLHeadingElement> {
  className?: string;
  children?: React.ReactNode;
}

const H2 = ({ className, children, ...props }: H2Props) => {
  return (
    <h2
      className={`
      mb-6 text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] xl:text-[48px]
      font-bold text-gray-800 dark:text-dark-text-default
      leading-tight tracking-tight transition-colors duration-500
      ${className}
    `}
      {...props}
    >
      {children}
    </h2>
  );
};

export default H2;
