import { SVGAttributes } from 'react';
import styleSvgs from './style-svgs';

export default function SvgMobile() {
  
  const st0: SVGAttributes<SVGPathElement>['style'] = {
    fill: 'none',
    stroke: '#000000',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  };
  return (
    <svg
      version="1.1"
      id="Icons"
      className={styleSvgs.default}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
    >
      <path
        style={st0}
        d="M19,23v4c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h10c1.1,0,2,0.9,2,2v2"
      />
      <line style={st0} x1="5" y1="7" x2="19" y2="7" />
      <line style={st0} x1="5" y1="23" x2="19" y2="23" />
      <line style={st0} x1="11" y1="26" x2="13" y2="26" />
      <polyline
        className="st0"
        points="14,12 11,15 14,18 "
      />
      <polyline
        className="st0"
        points="24,12 27,15 24,18 "
      />
      <line
        className="st0"
        x1="21"
        y1="11"
        x2="17"
        y2="19"
      />
    </svg>
  );
}
