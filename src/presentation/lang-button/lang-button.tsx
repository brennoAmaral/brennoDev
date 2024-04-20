'use client'
import useLangButton from "@/data/data-lang-button/use-lang-button"
import SvgTranslate from "../svg/svg-lang"
import styleLangButton from "./style-lang-button"
import LangMenu from "./lang-menu"
import { ILangMenu } from "@/domain/types/langa-button/type-lang-menu"

export default function LangButton() {

  const { 
    setLangMenu,
    langMenu,
    langMenuHooks
  } = useLangButton()

  const langMenuParams: ILangMenu = {
    ...langMenuHooks,
    styleLangButton
  }

  const {
    label,
    wrapper,
    labelWhenMenuIsUp,
  } = styleLangButton

  return (
    <div
      className={wrapper}
    >
      <div className={`${label} ${!langMenu ?? labelWhenMenuIsUp}`}
        onClick={() => setLangMenu(true)}
      >
        <SvgTranslate />
      </div>  
      <LangMenu
        {...langMenuParams}
      />
    </div>
  )
}