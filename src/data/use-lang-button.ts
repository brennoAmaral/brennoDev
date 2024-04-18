'use client'
import SvgBr from "@/presentation/svg/svg-br"
import SvgUsa from "@/presentation/svg/svg-usa"
import { useTranslations } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

interface IOptions{
  fullLang: string,
  acronymLang: 'pt' | 'en',
  svg: ()=>JSX.Element
}

export default function useLangButton(){
  const router = useRouter()
  const pathName = usePathname()
  const t = useTranslations('langs')
  const [langMenu, setLangMenu] = useState<boolean>(false)
  
  const options: IOptions[] = [
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

  function currentLang(): 'pt' | 'en'{ 
    if(pathName.includes('pt')){
      return 'pt'
    }
    return 'en'
  }

  function bgColorCurrentLang(acronymLang: 'pt' | 'en'){
    if(acronymLang === currentLang()){
      return 'bg-tertiary'
    }
  }

  function changeLang(acronymLang: 'pt' | 'en'){
    if(currentLang() === acronymLang) return

    const regex = /^(\/[^\/]+)(\/.*)?$/; // Regex para capturar '/pt' e '/en'
    let matches = pathName.match(regex)?.splice(1)
    if(matches === undefined) return
    
    matches[0] = `/${acronymLang}`

    const newUrl = matches.join('')
    setLangMenu(false)
    router.push(newUrl)
  }
  
  return{langMenu, setLangMenu, changeLang, options, bgColorCurrentLang}
}