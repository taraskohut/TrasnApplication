import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function OpenArrow(props) {
  const style = {...props};
  return (
    <Svg
      style={style}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        x={0.5}
        y={23.5}
        width={23}
        height={23}
        rx={11.5}
        transform="rotate(-90 .5 23.5)"
        stroke={style.borderColor}
      />
      <Path
        d="M7 13.5L11.5 9l4.5 4.5"
        stroke={style.borderColor}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export default OpenArrow;
