import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ArrowIcon(props) {
  return (
    <Svg
      width={19}
      height={21}
      viewBox="0 0 19 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1.668 15.007h13.618M5.764 19.085l-4.1-4.078 4.1-4.078M17.999 5.08H4.381M13.9 1L18 5.078l-4.1 4.078"
        stroke="#707482"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ArrowIcon;
