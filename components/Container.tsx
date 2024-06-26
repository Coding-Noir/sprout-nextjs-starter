import { cn } from "../lib/utils";

type ContainerProps = {
  as?: React.ElementType;
  size?: "base" | "contained" | "wide";
  className?: string;
  children: React.ReactNode;
};

const containerSizes = {
  base: "",
  contained: "",
  wide: "",
};

export default function Container({
  as: Comp = "div",
  className,
  size = "base",
  children,
  ...restProps
}: ContainerProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Comp className={cn("", containerSizes[size], className)} {...restProps}>
      {children}
    </Comp>
  );
}
