import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_673_212)">
        <Path transform="translate(.5 .5)" fill="#fff" d="M0 0H24V24H0z" />
        <Path
          d="M17.171 15.969l.532-3.469h-3.328v-2.25c0-.949.465-1.875 1.956-1.875h1.513V5.422s-1.373-.234-2.686-.234c-2.741 0-4.533 1.66-4.533 4.668V12.5H7.578v3.469h3.047v8.385a12.13 12.13 0 003.75 0V15.97h2.796z"
          fill="#2F79FE"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_673_212">
          <Path fill="#fff" transform="translate(.5 .5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
