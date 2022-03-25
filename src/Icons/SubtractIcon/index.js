import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function SubtractIcon(props) {
  return (
    <Svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16.5a8 8 0 100-16 8 8 0 000 16zm4.238-10.098a.889.889 0 00-1.365-1.138L7.675 9.102c-.309.37-.482.575-.62.7l-.006.005-.005-.004c-.15-.113-.34-.301-.68-.641l-1.291-1.29a.889.889 0 10-1.257 1.257l1.326 1.326c.29.29.57.57.83.766.29.22.672.427 1.16.405.488-.022.85-.263 1.119-.508.24-.22.494-.523.756-.838l3.231-3.878z"
        fill="#FF8600"
      />
    </Svg>
  )
}

