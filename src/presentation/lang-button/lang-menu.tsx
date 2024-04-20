import { ILangMenu } from "@/domain/types/type-lang-menu";
import SvgClose from "../svg/svg-close";

export default function LangMenu(
  {
    changeLang,
    langMenu,
    langListOptions,
    pathName,
    setLangMenu,
    styleLangButton: {
      divCloseButton,
      divMenu,
      menuClose,
      menuOpen,
      styleOptions
    },
  }: ILangMenu
) {

  return (
    <div
      onMouseLeave={() => setLangMenu(false)}
      className={`${langMenu ? menuOpen : menuClose}  ${divMenu}`}
    >
      <div onClick={() => setLangMenu(false)} className={divCloseButton}>
        <SvgClose />
      </div>
      {
        langListOptions.map((value, key) => {
          if (pathName.includes(value.acronymLang)) return
          return (
            <button key={key}
              className={`${styleOptions}`}
              onClick={() => changeLang(value.acronymLang)}
              disabled={!langMenu}
            >
              <value.svg />
              {value.fullLang}
            </button>
          )
        })
      }
    </div>
  );
}