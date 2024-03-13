import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function LightModeIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_1_3776)">
        <Path
          d="M2.258 13.183v2.233c0 1.267 1.034 2.3 2.3 2.3h2.234L8.375 19.3a2.296 2.296 0 003.25 0l1.583-1.584h2.234c1.266 0 2.3-1.033 2.3-2.3v-2.233l1.583-1.583a2.296 2.296 0 000-3.25l-1.583-1.584V4.533c0-1.267-1.034-2.3-2.3-2.3h-2.234L11.625.65c-.867-.867-2.383-.867-3.25 0L6.792 2.233H4.558a2.305 2.305 0 00-2.3 2.3v2.233L.675 8.35a2.296 2.296 0 000 3.25l1.583 1.583zM10 4.975a.63.63 0 01.625.625v8.75a.63.63 0 01-.625.625c-2.9 0-5-2.1-5-5s2.1-5 5-5z"
          fill="#535763"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_3776">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default LightModeIcon;
