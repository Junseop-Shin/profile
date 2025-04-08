interface H2Props extends React.HTMLProps<HTMLHeadingElement> {
  className?: string;
  children?: React.ReactNode;
}

const H2 = ({ className, children, ...props }: H2Props) => {
  return (
    <h2
      className={`text-3xl font-bold text-gray-800 dark:text-white mb-6 ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default H2;
