import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={17}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20 8.805a1 1 0 01-1 1H3.17l4.59 5.35a1 1 0 11-1.52 1.3l-6-7a.83.83 0 01-.09-.16.83.83 0 01-.08-.12 1.16 1.16 0 01-.07-.37 1.16 1.16 0 01.07-.37.83.83 0 01.08-.12.83.83 0 01.09-.16l6-7a1 1 0 011.52 1.3l-4.59 5.35H19a1 1 0 011 1z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
