'use client'
import useLangButton from "@/data/use-lang-button"
import SvgTranslate from "../svg/svg-lang"
import styleLangButton from "./style-lang-button"
import SvgClose from "../svg/svg-close"
export default function LangButton() {
  const { setLangMenu, options, changeLang, bgColorCurrentLang, langMenu, pathName } = useLangButton()

  return (
    <div
      className={styleLangButton.wrapper}
    >
      <div className={`${styleLangButton.label} ${!langMenu ? 'z-20': 'z-0'}`}
        onClick={() => setLangMenu(true)}

      >
        <SvgTranslate />
      </div>  
      <div
        onMouseLeave={() => setLangMenu(false)}
        className={`h-${langMenu ? 'auto' : '0'} w-${langMenu ? 'auto' : '0'} ${langMenu ? 'border-2 p-2 opacity-100' : ''} ${!langMenu ? 'z-0': 'z-20'}  ${styleLangButton.divMenu}`}>
        <div onClick={()=>setLangMenu(false)} className="w-100 flex justify-end"><SvgClose/></div>
        {
          options.map((value, key) => {
            if(pathName.includes(value.acronymLang)) return
            return(
            <button key={key}
              className={`${bgColorCurrentLang(value.acronymLang)} ${styleLangButton.options}`}
              onClick={() => changeLang(value.acronymLang)}
              disabled={!langMenu}
            >
              <value.svg />
              {value.fullLang}
            </button>
          )})
        }
      </div>
    </div>
  )
}