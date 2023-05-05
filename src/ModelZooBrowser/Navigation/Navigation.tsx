import React, {useContext} from 'react'
import styled from 'styled-components'
import { ModelZooBrowserContext } from '../Context/ModelZooBrowserContextProvider'
import { color } from '../Utilities/color'
import { ModelSelector } from './ModelSelector'

const Header = () => {
  const {onSelectedModelIndexChange} = useContext(ModelZooBrowserContext)

  const handleClick = () => {
    onSelectedModelIndexChange(undefined)
  }

  return (
    <div>
        <h6 onClick={handleClick}>overview</h6>
    </div>
  )
}

export const Navigation: React.FC = () => (
  <div>
    <Header />
    <ModelSelector />
  </div>
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
