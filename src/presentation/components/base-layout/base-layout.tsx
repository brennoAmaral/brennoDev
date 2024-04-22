import { IBaseLayout } from "@/domain/types/components/lang-button/type-base-layout";
import styleBaseLayout from "./style-base-layout";

export default function BaseLayout({children}:IBaseLayout) {
  return (
      <div className={styleBaseLayout.div}>
        {children}
      </div>
  );
}