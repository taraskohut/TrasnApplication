import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MoveIcon(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.025 1.537c0-.573.464-1.037 1.037-1.037h4.4c.574 0 1.038.464 1.038 1.037v4.401a1.037 1.037 0 11-2.075 0V4.041L9.861 9.605a1.037 1.037 0 01-1.467-1.467l5.564-5.563h-1.896a1.037 1.037 0 01-1.037-1.038zm-7.413-.115A3.112 3.112 0 00.5 4.534v9.854A3.112 3.112 0 003.612 17.5h9.854a3.112 3.112 0 003.112-3.112V10.24a1.037 1.037 0 10-2.075 0v4.15c0 .572-.464 1.036-1.037 1.036H3.612a1.037 1.037 0 01-1.037-1.037V4.534c0-.573.464-1.037 1.037-1.037h4.149a1.037 1.037 0 000-2.075H3.612z"
        fill="#CED1DB"
      />
    </Svg>
  );
}

export default MoveIcon;
