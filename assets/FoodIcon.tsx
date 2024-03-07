import * as React from 'react';
import Svg, {Circle, G, Path, Defs, ClipPath} from 'react-native-svg';

function FoodIcon(props) {
  const style = {...props};
  return (
    <Svg
      style={style}
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={24} cy={24} r={24} fill="#FE9F62" />
      <G clipPath="url(#clip0_1_3955)" fill="#fff">
        <Path d="M19.647 28.3a1.934 1.934 0 01-.975-1.679 5.377 5.377 0 015.371-5.371h2.213l.105-1.719H13.819l.9 14.863c.022.34.303.606.644.606h3.955a3.206 3.206 0 01-.646-1.934c0-.835.533-1.549 1.277-1.818a2.562 2.562 0 010-2.81c-.21-.047-.326-.093-.302-.139zm.442-10.058h6.446a.644.644 0 100-1.289H21.28l1.737-2.664h2.23a.645.645 0 000-1.289h-2.579a.645.645 0 00-.54.292l-2.387 3.661h-6.096a.645.645 0 000 1.29h6.444z" />
        <Path d="M19.96 26.621c0 .356.29.645.645.645h13.75A.644.644 0 0035 26.62a4.087 4.087 0 00-4.082-4.082h-6.875a4.087 4.087 0 00-4.082 4.082zm2.15 1.934a1.289 1.289 0 100 2.578h10.742a1.289 1.289 0 100-2.578H22.109zm12.245 3.867h-13.75a.645.645 0 00-.644.644c0 1.067.867 1.934 1.934 1.934h11.171A1.936 1.936 0 0035 33.066a.644.644 0 00-.645-.644z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1_3955">
          <Path fill="#fff" transform="translate(13 13)" d="M0 0H22V22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default FoodIcon;
