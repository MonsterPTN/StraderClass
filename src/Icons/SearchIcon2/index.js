import React from "react";
import Svg, { Path,Circle } from 'react-native-svg'

export default function SearchIcon2({ color }) {
    return (
        <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx={11} cy={11} r={7} stroke="#fff" strokeWidth={2} />
        <Path
          d="M11 8a3 3 0 0 0-3 3M20 20l-3-3"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </Svg>
    )
}
