declare module "lucide-react" {
  import { ComponentType } from "react";

  interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    absoluteStrokeWidth?: boolean;
  }

  type Icon = ComponentType<IconProps>;

  export const ChevronRight: Icon;
  export const MapPin: Icon;
  export const ArrowDown: Icon;
  
}
