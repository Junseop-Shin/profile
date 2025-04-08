import { IconBaseProps, IconType } from "react-icons";

interface IconProps extends IconBaseProps {
  iconName: IconType;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  iconName: IconComponent,
  className,
  ...props
}) => {
  return (
    <IconComponent
      className={`size-6 flex-shrink-0 text-black dark:text-white ${className}`}
      {...props}
    />
  );
};

export default Icon;
