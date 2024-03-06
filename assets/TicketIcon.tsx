import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function TicketIcon(props: any) {
  return (
    <Svg
      width={23}
      height={18}
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13.35 1.25V3.67"
        stroke="grey"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.35 14.76V16.784"
        stroke="grey"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.35 11.3241V6.50305"
        stroke="grey"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.2 17.0001C18.6306 17.0031 19.0576 16.9212 19.4565 16.7592C19.8554 16.5971 20.2185 16.358 20.525 16.0555C20.8315 15.753 21.0753 15.3931 21.2426 14.9963C21.4099 14.5995 21.4974 14.1737 21.5 13.7431V11.1511C20.9298 11.1511 20.3829 10.9246 19.9797 10.5214C19.5765 10.1182 19.35 9.5713 19.35 9.00108C19.35 8.43087 19.5765 7.884 19.9797 7.4808C20.3829 7.0776 20.9298 6.85108 21.5 6.85108V4.25708C21.4974 3.82648 21.4099 3.40062 21.2426 3.00384C21.0753 2.60706 20.8315 2.24715 20.525 1.94467C20.2185 1.64218 19.8554 1.40307 19.4565 1.24099C19.0576 1.07891 18.6306 0.997051 18.2 1.00008H4.8C4.3694 0.997051 3.94243 1.07891 3.54349 1.24099C3.14456 1.40307 2.78147 1.64218 2.475 1.94467C2.16852 2.24715 1.92467 2.60706 1.75737 3.00384C1.59007 3.40062 1.50262 3.82648 1.5 4.25708V6.93508C1.7796 6.92341 2.0587 6.96802 2.32074 7.06625C2.58278 7.16448 2.82243 7.31433 3.02546 7.50692C3.2285 7.69951 3.39079 7.93091 3.50271 8.1874C3.61463 8.4439 3.6739 8.72025 3.677 9.00008C3.67596 9.28445 3.61874 9.56582 3.50865 9.82801C3.39855 10.0902 3.23775 10.3281 3.03546 10.5279C2.83317 10.7278 2.59339 10.8858 2.32989 10.9927C2.06639 11.0996 1.78436 11.1535 1.5 11.1511V13.7441C1.50275 14.1746 1.5903 14.6003 1.75766 14.997C1.92501 15.3937 2.16889 15.7535 2.47535 16.0559C2.78181 16.3582 3.14485 16.5973 3.54372 16.7593C3.9426 16.9213 4.36949 17.0031 4.8 17.0001H18.2Z"
        stroke="grey"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default TicketIcon;
