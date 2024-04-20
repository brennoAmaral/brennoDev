'use client'
import { ILangOptions, ILangsAcronymAvailable } from "@/domain/types/type-use-lang-button"
import SvgBr from "@/presentation/svg/svg-br"
import SvgUsa from "@/presentation/svg/svg-usa"
import { useTranslations } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"



export default function useLangButton(){
  const router = useRouter()
  const pathName = usePathname()
  const t = useTranslations('langs')
  const [langMenu, setLangMenu] = useState<boolean>(false)
  
  const listOptions: ILangOptions[] = [
    {
      fullLang: t('pt'),
      acronymLang: 'pt',
      svg: SvgBr
    },
    {
      fullLang: t('en'),
      acronymLang: 'en',
      svg: SvgUsa
    }
  ]

  function currentLang(): ILangsAcronymAvailable{ 
    if(pathName.includes('pt')){
      return 'pt'
    }
    return 'en'
  }

  function changeSizeMenu(){
    if(langMenu)return 'w-auto h-auto border-2 p-2 opacity-100 z-20'
    return'w-0 h-0 z-0'
  }

  function bgColorCurrentLang(acronymLang: ILangsAcronymAvailable){
    if(acronymLang === currentLang()){
      return 'bg-tertiary'
    }
  }

  function changeLang(acronymLang: ILangsAcronymAvailable){
    if(currentLang() === acronymLang) return

    const regex = /^(\/[^\/]+)(\/.*)?$/; // Regex para capturar '/pt' e '/en'
    let matches = pathName.match(regex)?.splice(1)
    if(matches === undefined) return
    
    matches[0] = `/${acronymLang}`

    const newUrl = matches.join('')
    setLangMenu(false)
    router.push(newUrl)
  }

  
  return{langMenu, setLangMenu, changeLang, listOptions, bgColorCurrentLang, changeSizeMenu, pathName}
}