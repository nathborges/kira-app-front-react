import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

export default function UserDefault(props) {
  return (
    <Svg
      width={46}
      height={46}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Mask
        id="a"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={46}
        height={46}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 45c12.15 0 22-9.85 22-22S35.15 1 23 1 1 10.85 1 23s9.85 22 22 22z"
          fill="#BFCCDD"
          stroke="#BFCCDD"
          strokeWidth={2}
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 45c12.15 0 22-9.85 22-22S35.15 1 23 1 1 10.85 1 23s9.85 22 22 22z"
          fill="#BFCCDD"
          stroke="#BFCCDD"
          strokeWidth={2}
        />
        <Path
          d="M23.717 26.109a8.248 8.248 0 008.25-8.25 8.248 8.248 0 00-8.25-8.25 8.248 8.248 0 00-8.25 8.25 8.248 8.248 0 008.25 8.25zm0 2.212c-7.173 0-16.5 7.546-16.5 13.032v4.125h33v-4.125c0-5.486-9.565-13.032-16.5-13.032z"
          fill="#76787A"
        />
      </G>
    </Svg>
  )
}