import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={26}
      height={20}
      viewBox="0 0 26 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2 10l-.707-.707L.586 10l.707.707L2 10zm22.5 1a1 1 0 100-2v2zM10.293.293l-9 9 1.414 1.414 9-9L10.293.293zm-9 10.414l9 9 1.414-1.414-9-9-1.414 1.414zM2 11h22.5V9H2v2z"
        fill="#FF8600"
      />
    </Svg>
  )
}

export default SvgComponent
