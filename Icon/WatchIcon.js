import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={9}
      height={10}
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.14.383a1 1 0 00-1.536.844v7.546a1 1 0 001.537.844l5.93-3.773a1 1 0 000-1.688L2.14.383z"
        fill="#171921"
      />
    </Svg>
  )
}

export default SvgComponent