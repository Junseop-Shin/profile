interface H4Props extends React.HTMLProps<HTMLHeadingElement> {
  className?: string;
  children?: React.ReactNode;
}

const H4 = ({ className, children, ...props }: H4Props) => {
  return (
    <h4
      className={`mb-6 text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-500 opacity-50 ${className}`}
      {...props}
    >
      {children}
    </h4>
  );
};

export default H4;
