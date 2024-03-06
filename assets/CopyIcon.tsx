import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function CopyIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G
        clipPath="url(#clip0_1_2412)"
        stroke="#707482"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M16.667 7.5h-7.5c-.92 0-1.667.746-1.667 1.667v7.5c0 .92.746 1.666 1.667 1.666h7.5c.92 0 1.666-.746 1.666-1.666v-7.5c0-.92-.746-1.667-1.666-1.667z" />
        <Path d="M4.167 12.5h-.834a1.667 1.667 0 01-1.666-1.667v-7.5a1.667 1.667 0 011.666-1.666h7.5A1.667 1.667 0 0112.5 3.333v.834" />
      </G>
      <Defs>
        <ClipPath id="clip0_1_2412">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CopyIcon;
