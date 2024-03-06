import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function FlagIcon(props) {
  return (
    <Svg
      width={18}
      height={20}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1.312 1a.562.562 0 00-.562.563v16.875a.562.562 0 101.125 0v-7.464c.61-.473 2.867-1.93 6.4-.86 4.842 1.47 8.718-4.245 8.88-4.489a.562.562 0 00-.616-.854c-.04.012-3.911 1.029-7.405-1.418-2.668-1.87-5.878-1.709-7.26-1.526v-.264A.563.563 0 001.313 1zM8.49 4.273c2.557 1.792 5.25 1.94 6.87 1.812-1.297 1.47-3.902 3.817-6.76 2.951-3.21-.973-5.52-.116-6.725.585V2.964c1.124-.16 4.188-.39 6.615 1.309z"
        fill="#707482"
        stroke="#707482"
        strokeWidth={0.25}
      />
    </Svg>
  );
}

export default FlagIcon;
