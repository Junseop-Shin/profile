interface PProps extends React.HTMLProps<HTMLParagraphElement> {
  className?: string;
  children?: React.ReactNode;
}

const P = ({ className, children, ...props }: PProps) => {
  return (
    <p
      className={`text-lg text-ellipsis text-gray-700 dark:text-dark-text-default transition-colors duration-500 leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default P;
