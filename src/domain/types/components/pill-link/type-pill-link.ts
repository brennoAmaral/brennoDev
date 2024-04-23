
import('@/presentation/svg/svg-br')

type IPillLinkClassName = 'fill' | 'leaked' 


export interface IPillLink {
  text: string
  href: string
  type: IPillLinkClassName
  svg?: React.ReactNode
}