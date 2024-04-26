import { ISvgLink } from '../../svg/type-svg-color-custom'

import('@/presentation/svg/svg-br')

type IPillLinkClassName = 'fill' | 'leaked' 


export interface IPillLink {
  text: string
  href: string
  type: IPillLinkClassName
  Svg?: ISvgLink
}