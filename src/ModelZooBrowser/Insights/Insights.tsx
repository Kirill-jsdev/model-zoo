import React from 'react'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleDoubleRight } from '@fortawesome/pro-solid-svg-icons'
import { color } from '../Utilities/color'
// import { Offsets } from './Offsets'
import { UnusedVariables } from './UnusedVariables'

interface DrawerProps {
  open: boolean
}

interface InsightsProps extends DrawerProps {
  close: () => void
}

export const Insights: React.FC<InsightsProps> = ({ open, close }) => (
  <Drawer open={open} onTransitionEnd={() => window.dispatchEvent(new Event('resize'))}>
    <HeaderContainer onClick={close}>
      <IconButton color="inherit" disableRipple onClick={close}>
        {/* <FixedWidthFontAwesomeIcon size="xs" icon={faAngleDoubleRight} /> */}
      </IconButton>
      <StyledH6>Insights</StyledH6>
    </HeaderContainer>
    <Container>
      {/* <Offsets /> */}
      <UnusedVariables />
    </Container>
  </Drawer>
)

const Drawer = styled.div<DrawerProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${(props) => (props.open ? '20rem' : 0)};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  transition: width 300ms;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
`

const HeaderContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  line-height: 1.2;
  color: ${color.main.tertiary};
  background-color: ${color.shades.athens.d};
  cursor: pointer;
`

// const FixedWidthFontAwesomeIcon = styled(FontAwesomeIcon)`
//   &.svg-inline--fa.fa-w-8 {
//     width: 1.125rem;
//   }
// `

const StyledH6 = styled.h6`
  font-size: 1rem;
  font-weight: 700;
`

const Container = styled.div`
  flex: 1;
  padding: 1.25rem 1.5rem 1.25rem 1rem;
  overflow-y: auto;
`
