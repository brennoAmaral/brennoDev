'use client'
import useLangButton from "@/data/use-lang-button"
import SvgTranslate from "../svg/svg-lang"

export default function LangButton() {
  const {setLangMenu, options, changeLang, bgColorCurrentLang, langMenu} =  useLangButton()

  return (
    <label className="w-10 h-10 rounded-full bg-tertiary bg-opacity-30 flex justify-center items-center required relative"
      onClick={() => setLangMenu(true)}
    >
      <SvgTranslate />
      <div style={{transform: langMenu? 'scaleX(1)' : 'scaleX(0)'}} className=" border-2 p-2 overflow-hidden flex flex-col bg-background-dark border-tertiary  rounded-lg gap-2 absolute right-0 top-0">
      {
        options.map((value, key) => (
          <div key={key} 
            className={`${bgColorCurrentLang(value.acronymLang)} text-tertiary bg-opacity-10 flex flex-row gap-3 items-center rounded-md ps-1 py-2 pe-3 hover:bg-tertiary hover:bg-opacity-25`}
            onClick={()=> changeLang(value.acronymLang)}
            >
            <value.svg/>
            {value.fullLang}
          </div>
        ))
      }
    </div>
    </label>
  )
}