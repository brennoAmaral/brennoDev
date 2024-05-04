import { SVGAttributes } from "react";

type ISvgDefaults = SVGAttributes<SVGPathElement>['className']
export interface IStyleSvgs {
  default: ISvgDefaults;
  mysql: ISvgDefaults
}
