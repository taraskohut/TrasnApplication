import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PhotoIcon(props) {
  return (
    <Svg
      width={21}
      height={19}
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13.29 1.302c1.01.4 1.319 1.8 1.732 2.252.348.365.826.58 1.331.6A3.146 3.146 0 0119.5 7.3v5.8a4.221 4.221 0 01-4.22 4.22H5.22A4.22 4.22 0 011 13.102v-5.8a3.147 3.147 0 013.147-3.143c.505-.019.982-.234 1.331-.6.413-.456.722-1.856 1.731-2.256a15.482 15.482 0 016.081 0z"
        stroke="#707482"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.429 10.38a3.179 3.179 0 10-6.358 0 3.179 3.179 0 006.358 0zM15.046 7H15"
        stroke="#707482"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PhotoIcon;
