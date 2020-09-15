import React from "react"

import styled from "styled-components"
import colors from "../style/colors"

const WaveContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  column-gap: 0px;
  gap: 0px;
  width: 100%;
  height: auto;
  overflow: hidden;
`

const WaveContent = styled.div`
  margin-top: -1px;
  display: flex;
  flex: 1;
  background-color: ${colors.primary};
`

const Wave = props => {
  const { children } = props

  return (
    <WaveContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1921.281 145.82"
        data-v-13ffadbc=""
      >
        <path
          d="M4221-1918.177s334.258-105.245,817.4-13.84,1103.883-108.889,1103.883-108.889v145.82H4221Z"
          transform="translate(-4221 2040.906)"
          fill={colors.primary}
          data-v-13ffadbc=""
        ></path>
      </svg>
      <WaveContent>{children}</WaveContent>
    </WaveContainer>
  )
}

export default Wave
