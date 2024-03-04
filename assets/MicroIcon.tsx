import * as React from 'react';
import Svg, {G, Rect, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function MicroIocn(props: any) {
  const {style} = props;
  return (
    <Svg
      style={style}
      width={101}
      height={101}
      viewBox="0 0 101 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_d_1_5056)">
        <Rect
          x={20}
          y={16}
          width={61}
          height={61}
          rx={30.5}
          fill="#007AFD"
          shapeRendering="crispEdges"
        />
        <Path
          d="M50.5 59.807v-4.215M50.5 50.271a5.426 5.426 0 01-5.416-5.44v-6.249a5.415 5.415 0 1110.83 0v6.25a5.425 5.425 0 01-5.414 5.44z"
          stroke="#fff"
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M61.167 44.875A10.692 10.692 0 0150.5 55.593a10.694 10.694 0 01-10.667-10.718M53.259 39.48h2.653M51.927 43.931h3.986"
          stroke="#fff"
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs />
    </Svg>
  );
}

export default MicroIocn;
