interface SpanProps extends React.HTMLProps<HTMLSpanElement> {
  className?: string;
  children?: React.ReactNode;
}

const Span = ({ className, children, ...props }: SpanProps) => {
  return (
    <span
      className={`text-sm text-black dark:text-white truncate ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Span;
