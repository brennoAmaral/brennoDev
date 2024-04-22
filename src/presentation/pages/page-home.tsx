import styleBaseLayout from "../base-layout/style-base-layout";
import Avatar from "./avatar";
import stylePageHome from "./style-page-home";

export default function PageHome() {
  
  return (
      <div className={`${stylePageHome.wrapper} ${styleBaseLayout.div}`}>
          <Avatar />
      </div>
  )
}