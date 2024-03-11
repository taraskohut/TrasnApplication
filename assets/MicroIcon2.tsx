import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MicroIcon2(props) {
  return (
    <Svg
      width={18}
      height={22}
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9 20.98v-3.16M9 13.829a4.068 4.068 0 01-4.062-4.08V5.06a4.061 4.061 0 018.123 0V9.75A4.07 4.07 0 019 13.829z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 9.781a8.019 8.019 0 01-8 8.039A8.02 8.02 0 011 9.78M11.069 5.736h1.99M10.07 9.073h2.99"
        stroke="#fff"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default MicroIcon2;
