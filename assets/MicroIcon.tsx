import * as React from 'react';
import Svg, {G, Rect, Path, Defs} from 'react-native-svg';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function MicroIcon(props: any) {
  const {style} = props;
  return (
    <View
      style={{
        backgroundColor: '#007AFD',
        borderRadius: 40,
        padding: 10,
        borderWidth: 7,
        borderColor: props.borderColor,
        marginBottom: 20,
      }}>
      <Svg
        width={24}
        height={30}
        viewBox="0 0 24 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M12 28.3073V24.0926"
          stroke="white"
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.9999 18.7715C11.287 18.7701 10.5814 18.6282 9.92338 18.3541C9.26534 18.0799 8.66778 17.6787 8.16482 17.1736C7.66187 16.6684 7.26337 16.069 6.99211 15.4098C6.72084 14.7506 6.58213 14.0443 6.58388 13.3315V7.08214C6.58388 5.64591 7.15442 4.2685 8.16999 3.25292C9.18557 2.23735 10.563 1.66681 11.9992 1.66681C13.4354 1.66681 14.8129 2.23735 15.8284 3.25292C16.844 4.2685 17.4145 5.64591 17.4145 7.08214V13.3315C17.4163 14.0442 17.2776 14.7503 17.0064 15.4095C16.7353 16.0686 16.3369 16.6679 15.8341 17.1731C15.3313 17.6783 14.7339 18.0794 14.076 18.3537C13.4181 18.6279 12.7126 18.7699 11.9999 18.7715Z"
          stroke="white"
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M22.6667 13.3752C22.67 14.7792 22.3968 16.1702 21.8625 17.4687C21.3283 18.7672 20.5435 19.9478 19.553 20.943C18.5625 21.9382 17.3857 22.7285 16.0898 23.2689C14.7938 23.8093 13.4041 24.0892 12 24.0925C10.5959 24.0892 9.20625 23.8093 7.91031 23.2689C6.61437 22.7285 5.43756 21.9382 4.44707 20.943C3.45657 19.9478 2.6718 18.7672 2.13755 17.4687C1.6033 16.1702 1.33004 14.7792 1.33337 13.3752"
          stroke="white"
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.7586 7.98062H17.4119"
          stroke="white"
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.4265 12.4312H17.4132"
          stroke="white"
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

export default MicroIcon;
