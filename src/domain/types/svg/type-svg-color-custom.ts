export type ISvgColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'dark';
export interface ISvgLinks {
  color?: ISvgColor;
}
export type ISvgLink = (
  color: ISvgColor,
) => React.ReactNode;
