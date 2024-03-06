import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HeartIcon(props) {
  return (
    <Svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1.371 9.6C.3 6.246 1.552 2.417 5.07 1.284a6.007 6.007 0 015.43.914 6.052 6.052 0 015.42-.914c3.517 1.133 4.78 4.962 3.707 8.314C17.956 14.907 10.5 19 10.5 19s-7.4-4.03-9.128-9.4zM14.5 4.7a2.781 2.781 0 011.916 2.421"
        stroke="#707482"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default HeartIcon;
