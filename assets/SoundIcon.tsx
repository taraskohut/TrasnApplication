import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SoundIcon(props) {
  const style = {...props};
  return (
    <Svg
      width={21}
      height={16}
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1.001 8c0 1.23-.058 2.907.7 3.534.71.585 1.209.434 2.5.529 1.291.095 4.033 3.907 6.142 2.7 1.097-.854 1.178-2.648 1.178-6.763s-.081-5.91-1.169-6.764C8.243.029 5.507 3.84 4.21 3.936c-1.297.097-1.794-.054-2.509.53-.756.627-.7 2.304-.7 3.534zM18.085 1.904a10.656 10.656 0 010 12.192M15.582 4.314a7.4 7.4 0 010 7.372"
        stroke="#707482"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SoundIcon;
