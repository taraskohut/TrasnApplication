import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function TranslateIocn(props: any) {
  const style = {...props};
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M21.5 12.226v7.655a1.12 1.12 0 01-1.121 1.12h-7.655a1.12 1.12 0 01-1.12-1.12v-6.987h.67a1.12 1.12 0 001.12-1.12v-.668h2.857c.807-2.04 2.775-2.24 2.775-2.24v2.24h1.354a1.12 1.12 0 011.12 1.12z"
        stroke={style.focused}
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.394 4.12v7.655a1.12 1.12 0 01-1.12 1.12H8.748c-.807 2.04-2.774 2.241-2.774 2.241v-2.24H4.619a1.12 1.12 0 01-1.12-1.12V4.12A1.12 1.12 0 014.619 3h7.655a1.12 1.12 0 011.12 1.12zM6.198 6.598h4.497M8.447 6.598V5.7M7.323 6.598c0 3.598 3.372 3.598 3.372 3.598M9.571 6.598c0 3.598-3.372 3.598-3.372 3.598M14.304 18.301l2.249-4.497 2.248 4.497"
        stroke={style.focused}
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.866 17.177h3.373"
        stroke={style.focused}
        strokeWidth={1.25}
        strokeLinejoin="round"
      />
      <Path
        d="M16.429 4.125h.562a4.497 4.497 0 014.497 4.497"
        stroke={style.focused}
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.99 5.25l-1.123-1.125L16.99 3M8.56 19.864h-.563A4.497 4.497 0 013.5 15.367"
        stroke={style.focused}
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.997 18.74l1.124 1.124-1.124 1.124"
        stroke={style.focused}
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default TranslateIocn;
