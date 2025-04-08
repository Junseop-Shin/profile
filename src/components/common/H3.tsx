interface H3Props extends React.HTMLProps<HTMLHeadingElement> {
  className?: string;
  children?: React.ReactNode;
}

const H3 = ({ className, children, ...props }: H3Props) => {
  return (
    <h3
      className={`text-2xl font-bold text-gray-800 dark:text-white mb-3 ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

export default H3;
