declare module "lucide-react" {
  import { ComponentType } from "react";

  interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    absoluteStrokeWidth?: boolean;
  }

  type Icon = ComponentType<IconProps>;

  export const ChevronRight: Icon;
  export const ChevronLeft: Icon;
  export const ChevronDown: Icon;
  export const ChevronUp: Icon;
  export const MapPin: Icon;
  export const ArrowDown: Icon;
  export const ArrowUp: Icon;
  export const Mail: Icon;
  export const Phone: Icon;
  export const Clock: Icon;
  export const Send: Icon;
  export const Shield: Icon;
  export const Users: Icon;
  export const Target: Icon;
  export const Award: Icon;
  export const Fuel: Icon;
  export const Truck: Icon;
  export const CreditCard: Icon;
  export const Store: Icon;
  export const Wrench: Icon;
  export const Recycle: Icon;
  export const ArrowRight: Icon;
  export const Sun: Icon;
  export const Star: Icon;
  export const Quote: Icon;
  export const Leaf: Icon;
  export const Facebook: Icon;
  export const Twitter: Icon;
  export const Instagram: Icon;
  export const Menu: Icon;
  export const Check: Icon;
  export const X: Icon;

}
