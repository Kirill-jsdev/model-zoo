import React from 'react'
import styled from 'styled-components'
import { color } from '../Utilities/color'
import { ModelSelector } from './ModelSelector'

const Header = () => {
  return (
    <HeaderContainer>
        <StyledH6>overview</StyledH6>
    </HeaderContainer>
  )
}

export const Navigation: React.FC = () => (
  <NavigationContainer>
    <Header />
    <ModelSelector />
  </NavigationContainer>
)

const NavigationContainer = styled.div`
  width: 15.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${color.main.athens};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
`

const HeaderContainer = styled.div`
  min-height: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  line-height: 1.2;
  color: ${color.main.tertiary};
  background-color: ${color.shades.athens.d};
`

const StyledH6 = styled.h6`
  margin: 0 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
`
