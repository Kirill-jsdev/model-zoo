import React, {useContext} from 'react'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core'
import { color } from '../Utilities/color'
import { Offsets } from './Offsets'
import { UnusedVariables } from './UnusedVariables'
import { ModelZooBrowserContext } from '../Context/ModelZooBrowserContextProvider'

interface DrawerProps {
  open: boolean
}

interface InsightsProps extends DrawerProps {
  close: () => void
  variablesWithColors: any
}

export const Insights: React.FC<InsightsProps> = ({ open, close, variablesWithColors }) => {

    const { selectedModelTerms } = useContext(ModelZooBrowserContext)

    return (
        <Drawer open={open} onTransitionEnd={() => window.dispatchEvent(new Event('resize'))}>
          <HeaderContainer onClick={close}>
            <IconButton color="inherit" disableRipple onClick={close}>
            </IconButton>
            <StyledH6>Insights</StyledH6>
          </HeaderContainer>
          <Container>
            <Offsets variablesWithColors={variablesWithColors} />
            <UnusedVariables variablesWithColors={variablesWithColors} selectedModelTerms={selectedModelTerms} />
          </Container>
        </Drawer>
      )
}

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

const StyledH6 = styled.h6`
  font-size: 1rem;
  font-weight: 700;
`

const Container = styled.div`
  flex: 1;
  padding: 1.25rem 1.5rem 1.25rem 1rem;
  overflow-y: auto;
`
