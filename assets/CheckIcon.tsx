import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from 'react-native-elements';

function CheckIcon(props) {
  const color = {...props};
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm4.055 6.305L7.72 10.638a.665.665 0 01-.942 0L4.612 8.47a.666.666 0 11.943-.942L7.25 9.224l3.862-3.862a.666.666 0 11.943.943z"
        fill={color.color}
      />
    </Svg>
  );
}

export default CheckIcon;
