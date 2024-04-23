import { ISvgColor } from "../../svg/type-svg-color-custom";
import { IClass } from "../../type-style";

export interface IStylePillLink{
  fill: IClass<HTMLLinkElement>
  leaked: IClass<HTMLLinkElement>
  defaultLink: IClass<HTMLLinkElement>
  label:{
    fill: IClass<HTMLLabelElement>
    leaked: IClass<HTMLLabelElement>
    defaultLabel: IClass<HTMLLabelElement>
  }
  svgColor:{
    fill: ISvgColor,
    leaked: ISvgColor
  } 
}