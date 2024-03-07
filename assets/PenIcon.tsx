import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PenIcon(props) {
  return (
    <Svg
      width={18}
      height={17}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10.458 16.037h6.044M9.652 2.164a1.87 1.87 0 012.6-.253l1.444 1.123a1.785 1.785 0 01.6 2.487c-.028.045-7.947 9.951-7.947 9.951a1.418 1.418 0 01-1.097.53l-3.032.038-.684-2.893a1.358 1.358 0 01.266-1.165l7.85-9.818zM8.186 4.002l4.543 3.49"
        stroke="#707482"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PenIcon;
