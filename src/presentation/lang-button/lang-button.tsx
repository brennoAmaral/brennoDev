'use client'
import useLangButton from "@/data/use-lang-button"
import SvgTranslate from "../svg/svg-lang"
import styleLangButton from "./style-lang-button"
import LangMenu from "./lang-menu"

export default function LangButton() {

  const { 
    setLangMenu,
    listOptions,
    changeLang,
    bgColorCurrentLang,
    langMenu,
    pathName 
  } = useLangButton()

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
        bgColorCurrentLang={bgColorCurrentLang}
        changeLang={changeLang}
        langMenu={langMenu}
        listOptions={listOptions}
        pathName={pathName}
        setLangMenu={setLangMenu}
        styleLangButton={styleLangButton}
      />
    </div>
  )
}