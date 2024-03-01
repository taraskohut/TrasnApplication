import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MarkDownIcon(props: any) {
  return (
    <Svg
      width={12}
      height={13}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8.96 4.59H3.04c-.48 0-.72.58-.38.92L5.25 8.1c.415.415 1.09.415 1.505 0l.985-.985L9.345 5.51a.541.541 0 00-.385-.92z"
        fill="#fff"
      />
    </Svg>
  );
}

export default MarkDownIcon;
