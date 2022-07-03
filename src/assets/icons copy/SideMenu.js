import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function SideMenu(props) {
  return (
    <Svg viewBox="0 0 100 80" width={20} height={20} {...props}>
      <Path d="M0 0H100V20H0z" />
      <Path d="M0 30H100V50H0z" />
      <Path d="M0 60H100V80H0z" />
    </Svg>
  )
}

