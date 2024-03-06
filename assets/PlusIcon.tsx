import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PlusIcon(props) {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.286 4.929a.214.214 0 01-.215-.215V0H4.93v4.714a.214.214 0 01-.215.215H0V7.07h4.714a.214.214 0 01.215.215V12H7.07V7.286a.214.214 0 01.215-.215H12V4.93H7.286z"
        fill="#007AFD"
      />
    </Svg>
  );
}

export default PlusIcon;
