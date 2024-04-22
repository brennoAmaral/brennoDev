import { HtmlHTMLAttributes } from "react";

export type IClass<T> = HtmlHTMLAttributes<T>["className"];
export type IClassDiv = IClass<HTMLDivElement>;