import React, {useContext} from 'react'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core'
import { color } from '../Utilities/color'
import { Offsets } from './Offsets'
import { UnusedVariables } from './UnusedVariables'
import { ModelZooBrowserContext } from '../Context/ModelZooBrowserContextProvider'

interface InsightsProps {
  variablesWithColors: any
}

export const Insights: React.FC<InsightsProps> = ({variablesWithColors }) => {

    const { selectedModelTerms } = useContext(ModelZooBrowserContext)

    return (
        <>
          <HeaderContainer>
            <IconButton color="inherit" disableRipple>
            </IconButton>
            <StyledH6>Insights</StyledH6>
          </HeaderContainer>
          <Container>
            <Offsets variablesWithColors={variablesWithColors} />
            <UnusedVariables variablesWithColors={variablesWithColors} selectedModelTerms={selectedModelTerms} />
          </Container>
        </>
      )
}

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
