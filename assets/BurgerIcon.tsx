import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BurgerIcon(props) {
  const styles = {...props};
  return (
    <Svg
      width={18}
      height={12}
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path stroke={styles.color} strokeWidth={2} d="M0 1L18 1" />
      <Path stroke={styles.color} strokeWidth={2} d="M0 6L18 6" />
      <Path stroke={styles.color} strokeWidth={2} d="M0 11L18 11" />
    </Svg>
  );
}

export default BurgerIcon;
