import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HistoryIcon(props: any) {
  return (
    <Svg
      width={19}
      height={21}
      viewBox="0 0 19 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13.48 14.481H6.26M13.48 10.295H6.26M9.015 6.118H6.26M13.674 1.008h-7.69a4.251 4.251 0 00-4.469 4.607v9.2a4.254 4.254 0 004.506 4.603h7.69a4.25 4.25 0 004.47-4.6v-9.2a4.255 4.255 0 00-4.508-4.61z"
        stroke="white"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default HistoryIcon;
