import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PrivacyIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11.488 1.012H4.836A3.819 3.819 0 001 4.741V15.59a3.714 3.714 0 003.65 3.777h8.172a3.77 3.77 0 003.73-3.775v-9.3l-5.066-5.28z"
        stroke="#535763"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.223 1v2.909a2.575 2.575 0 002.57 2.575h2.754M11.044 11.997h-4.9"
        stroke="#535763"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PrivacyIcon;
