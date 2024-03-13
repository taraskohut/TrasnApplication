import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function TermsIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11.489 1.012H4.836A3.82 3.82 0 001 4.741v10.713a3.828 3.828 0 003.742 3.911h8.08a3.887 3.887 0 003.73-3.911V6.288l-5.064-5.276z"
        stroke="#535763"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.226 1v2.909a2.574 2.574 0 002.568 2.575h2.755M11.039 13.608h-5.4M8.994 9.856H5.638"
        stroke="#535763"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default TermsIcon;
