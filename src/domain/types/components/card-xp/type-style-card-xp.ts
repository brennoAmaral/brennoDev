import { IClass } from '../../type-style';

export interface IStyleCardXp {
  h3: IClass<HTMLElement>;
  wrapper: IClass<HTMLElement>;
  card: IClass<HTMLElement>;
  cardOverlay: {
    wrapper: IClass<HTMLElement>;
    description: IClass<HTMLElement>;
  };
  styleImg: IClass<HTMLElement>;
}
