import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function LogOutIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M14.244 7.618v-.933A3.685 3.685 0 0010.559 3H5.684A3.685 3.685 0 002 6.685v11.13A3.685 3.685 0 005.684 21.5h4.885a3.675 3.675 0 003.675-3.674v-.943M21.037 12.25H8.996M18.109 9.335l2.928 2.915-2.928 2.916"
        stroke="#535763"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default LogOutIcon;
