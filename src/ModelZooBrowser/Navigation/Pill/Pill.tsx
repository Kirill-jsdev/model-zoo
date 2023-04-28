import React from 'react'
import styled from 'styled-components'
import { ButtonBase, ButtonBaseProps } from '@material-ui/core'
// import { IconProp } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { color, COLOR_TO_TEXT_COLOR_MAP, loadingAnimation } from '../../Utilities/color'

type ButtonProps = {
  color?: string
  $textColor?: string
  $stripShade?: boolean
}

export interface PillButtonProps extends ButtonBaseProps<React.ElementType, { component?: React.ElementType }> {
//   icon?: IconProp
  text?: React.ReactNode
  spin?: boolean
  fixedWidth?: boolean
  $stripShade?: boolean
  color?: string
  textColor?: string
  className?: string
  disabled?: boolean
}

const getTextColorBasedOnBgColor = (textColor: string | undefined, bgColor: string | undefined): string => {
  const mappedColor = COLOR_TO_TEXT_COLOR_MAP[bgColor ?? '']
  if (bgColor && mappedColor) return mappedColor
  if (textColor) return textColor
  return color.main.athens
}

export const PillButton = React.forwardRef<HTMLButtonElement, PillButtonProps>(
  ({ icon, text, textColor, spin, fixedWidth, ...props }, ref) => (
    <ButtonBaseStyled {...props} ref={ref} $textColor={textColor}>
      {icon ? (
        <>
          {/* <FontAwesomeIcon icon={icon} spin={spin} fixedWidth={fixedWidth} /> */}
          {text && <Text>{text}</Text>}
        </>
      ) : (
        <>{text}</>
      )}
    </ButtonBaseStyled>
  ),
)
PillButton.displayName = 'PillButton'

const ButtonBaseStyled = styled(ButtonBase)<ButtonProps>`
  background-color: ${(props) => (props.color ? props.color : color.shades.tertiary.lll)};
  color: ${(props) => getTextColorBasedOnBgColor(props.$textColor, props.color)};
  border-radius: 0.3125rem;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1.5;
  padding: 0.1875rem 0.5rem 0.1875rem 0.4rem;
  ${(props) => !props.$stripShade && 'box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);'}

  &:hover {
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
      opacity: 0.1;
    }
  }
`

const Text = styled.span`
  margin-left: 0.4rem;
  text-align: left;
`

export const PillLoading = styled.div`
  border-radius: 0.3125rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  width: 6rem;
  height: 1.375rem;
  margin-right: 0.5rem;
  ${loadingAnimation}
`

export const NoLinkPillButton = styled(PillButton)`
  cursor: default;
`