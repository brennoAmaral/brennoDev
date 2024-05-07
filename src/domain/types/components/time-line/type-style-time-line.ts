import { IClass, IClassDiv } from "../../type-style";

export interface IStyleTimeLine{
  wrapper: IClassDiv
  dot: IClass<HTMLLabelElement>
  startLine: IClass<HTMLLabelElement> 
  endLine: IClass<HTMLLabelElement> 
}