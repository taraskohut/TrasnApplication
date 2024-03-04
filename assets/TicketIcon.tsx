import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function TicketIcon(props: any) {
  return (
    <Svg
      width={23}
      height={18}
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13.35 1.25v2.42M13.35 14.76v2.024M13.35 11.324v-4.82M18.2 17a3.279 3.279 0 003.3-3.257v-2.592a2.15 2.15 0 110-4.3V4.257A3.277 3.277 0 0018.2 1H4.8a3.277 3.277 0 00-3.3 3.257v2.678A2.09 2.09 0 013.677 9 2.159 2.159 0 011.5 11.151v2.593A3.277 3.277 0 004.8 17h13.4z"
        stroke="white"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default TicketIcon;
