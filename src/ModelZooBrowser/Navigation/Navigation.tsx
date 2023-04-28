import React from 'react'
import styled from 'styled-components'

//These will be removed 99
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLevelDownAlt, faDownload } from '@fortawesome/pro-solid-svg-icons'
// import { ActionButton } from './ActionButton' //For now substituted with simple 'div' element
import { color } from '../color'

//Will be used later
// import { useDetectionModelDownload } from 'src/context/API'
// import { useWorkflow } from 'src/context/Workflow'
// import { useDetectionResults } from 'src/context/DetectionResults'

import { ModelSelector } from './ModelSelector'


const Header = () => {
//   const { activeExperiment } = useWorkflow()
//   const { selectedJob, selectModel } = useDetectionResults()
//   const downloadModel = useDetectionModelDownload(`${activeExperiment?.name ?? ''}-model-${selectedJob?.id ?? ''}`)

//   const showModel = () => selectModel(undefined)
//   const handleDownload = () => downloadModel(selectedJob?.id ?? '')

  return (
    <HeaderContainer>
      {/* <OverviewWrapper onClick={showModel}> */}
        {/* <StyledFontAwesomeIcon icon={faLevelDownAlt} /> */}
        <StyledH6>overview</StyledH6>
      {/* </OverviewWrapper> */}
      {/* <StyledActionButton size="sm" icon={faDownload} onClick={handleDownload} /> */}

      {/* <div style={{width: 30, height: 30, backgroundColor: 'red'}} onClick={handleDownload}></div>   Substitute for upper line will be used later */}
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

// const OverviewWrapper = styled.div`
//   display: flex;
//   cursor: pointer;
// `

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

// const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
//   margin-left: 0.5rem;
//   transform: rotate(0.5turn);
// `

// const StyledActionButton = styled(ActionButton)`
//   padding: 0.25rem;
//   margin-left: auto;
//   margin-right: 0.625rem;
//   border-radius: 0.25rem;
//   color: ${color.main.athens};
//   background-color: ${color.main.tertiary};

//   svg {
//     width: 0.75rem !important;
//     font-size: 0.75rem;
//   }
// `

const StyledH6 = styled.h6`
  margin: 0 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
`
