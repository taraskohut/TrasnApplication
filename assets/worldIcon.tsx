import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function WorldIcon(props: any) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7 0c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7zM2.044 3.415c.754.3 1.53.536 2.325.692a9.896 9.896 0 011.61-3.14 6.129 6.129 0 00-3.935 2.448zm2.975 5.493c1.315-.18 2.648-.18 3.963 0 .27-1.256.27-2.554.002-3.81-.653.09-1.313.152-1.984.152s-1.33-.062-1.983-.151a9.087 9.087 0 00.002 3.809zm.227-4.665c1.165.15 2.344.15 3.51 0A9.024 9.024 0 007 1.106a9.022 9.022 0 00-1.754 3.137zM8.022.967a9.894 9.894 0 011.61 3.14 13.18 13.18 0 002.324-.692A6.125 6.125 0 008.022.967zM13.125 7c0-1.02-.255-1.981-.697-2.828-.837.344-1.695.614-2.578.792a9.964 9.964 0 01-.001 4.08c.882.175 1.744.444 2.579.787A6.1 6.1 0 0013.125 7zm-1.169 3.585c-.754-.3-1.53-.537-2.324-.692a9.896 9.896 0 01-1.61 3.14 6.125 6.125 0 003.934-2.448zm-3.202-.828a13.691 13.691 0 00-3.508 0A9.035 9.035 0 007 12.894a9.021 9.021 0 001.754-3.137zM5.98 13.033a9.896 9.896 0 01-1.611-3.14c-.795.155-1.57.393-2.325.692a6.129 6.129 0 003.936 2.448zM4.152 9.041a9.945 9.945 0 01-.001-4.078 14.022 14.022 0 01-2.579-.792 6.093 6.093 0 000 5.658c.835-.342 1.697-.61 2.58-.788z"
        fill="#fff"
      />
    </Svg>
  );
}

export default WorldIcon;