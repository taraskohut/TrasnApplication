import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function LocationIcon(props: any) {
  return (
    <Svg
      width={12}
      height={15}
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5.667 14.167a.906.906 0 01-.49-.165 14.342 14.342 0 01-3.693-3.427A6.923 6.923 0 010 6.379a5.445 5.445 0 011.667-3.923A5.687 5.687 0 015.662.834a5.615 5.615 0 015.671 5.545 6.926 6.926 0 01-1.486 4.196 14.613 14.613 0 01-3.694 3.427.88.88 0 01-.486.165zm-.005-9.482a1.867 1.867 0 00-1.726 2.574c.095.223.233.426.407.595a1.882 1.882 0 003.193-1.302 1.883 1.883 0 00-1.875-1.867h.001z"
        fill="#fff"
      />
    </Svg>
  );
}

export default LocationIcon;
