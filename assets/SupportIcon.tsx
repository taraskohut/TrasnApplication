import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SupportIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        clipRule="evenodd"
        d="M11 20.167v0A9.166 9.166 0 011.833 11v0A9.166 9.166 0 0111 1.833v0A9.166 9.166 0 0120.167 11v0A9.166 9.166 0 0111 20.167z"
        stroke="#535763"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 11.917v-.212c0-.691.463-1.066.927-1.354.453-.282.906-.649.906-1.326 0-.934-.82-1.692-1.833-1.692s-1.833.758-1.833 1.692M11 14.667a.23.23 0 10.002.458.23.23 0 00-.003-.458"
        stroke="#535763"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SupportIcon;
