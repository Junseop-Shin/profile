type PSize = "sm" | "md" | "lg" | "xl";

interface PProps extends React.HTMLProps<HTMLParagraphElement> {
  pSize?: PSize;
  className?: string;
  children?: React.ReactNode;
}

const sizeClasses = {
  sm: "text-sm leading-snug tracking-tight truncate lg:text-base",
  md: "text-base md:text-lg leading-relaxed tracking-normal text-black",
  lg: "text-lg md:text-xl lg:text-[22px] xl:text-[24px] leading-relaxed md:leading-tight lg:leading-tight text-gray-700 tracking-wide",
  xl: "text-xl md:text-2xl lg:text-[26px] xl:text-[28px] font-semibold leading-tight text-gray-800 tracking-wide",
};

const P = ({ className = "", pSize = "lg", children, ...props }: PProps) => {
  return (
    <p
      className={`text-ellipsis dark:text-dark-text-default transition-colors duration-500 ${sizeClasses[pSize]} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default P;
