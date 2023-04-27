// import React from 'react'
// import styled from 'styled-components'
// import { ButtonBase, ButtonBaseProps } from '@material-ui/core'
// // import { IconProp } from '@fortawesome/fontawesome-svg-core'
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { color } from 'src/core/Color'
// // import { fontWeight } from 'src/core/Typo'
// // import { shadow } from 'src/core/Util'
// // import { Size } from 'src/Types'
// // import { getIconSize, getFixedIconSize, getFontSize, getPadding, getTextMargin } from './pureFunctions'

// interface ButtonProps {
//   text?: string
//   color?: string
//   $stripShade?: boolean
//   size?: Size
// }

// export interface ActionButtonProps
//   extends ButtonBaseProps<
//     React.ElementType,
//     { component?: React.ElementType; to?: string | { pathname: string; state: unknown } }
//   > {
//   icon?: IconProp
//   $stripShade?: boolean
//   text?: string
//   color?: string
//   $backgroundColor?: string
//   size?: Size
//   className?: string
//   cy?: string
//   marginx?: string
// }

// function getRightMargin(marginx?: string) : string | undefined
// {
//   return marginx ? `-${marginx}` : undefined
// }

// export const ActionButton: React.FC<ActionButtonProps> = (props) => {
//   return (
//     <StyledButtonBase {...props}>
//       {props.icon &&
//         (props.text ? (
//           <FontAwesomeIcon icon={props.icon} size={getIconSize(props.size)} data-cy={props.cy} />
//         ) : (
//           <FontAwesomeIcon
//             icon={props.icon}
//             size={getFixedIconSize(props.size)}
//             fixedWidth
//             data-cy={props.cy}
//             style={{ marginLeft: props.marginx, marginRight: getRightMargin(props.marginx) }}
//           />
//         ))}
//       {props.text && (
//         <Text size={props.size} $stripMargin={!props.icon}>
//           {props.text}
//         </Text>
//       )}
//     </StyledButtonBase>
//   )
// }

// const StyledButtonBase = styled(ButtonBase)<ButtonProps>`
//   background-color: ${(props) => (props.color ? props.color : color.main.secondary)};
//   color: ${(props) => (props.color === color.white ? color.main.secondary : color.white)};
//   display: inline-flex;
//   border-radius: 0.625rem;
//   overflow: hidden;

//   ${fontWeight.ExtraBold};
//   ${(props) => !props.$stripShade && shadow.surface}
//   ${(props) => getFontSize(props.size)}
//   ${(props) => getPadding(props.size, props.text)}

//   &:focus,
//   &:hover {
//     &:after {
//       content: '';
//       position: absolute;
//       left: 0;
//       top: 0;
//       right: 0;
//       bottom: 0;
//       background-color: ${color.white};
//       opacity: 0.1;
//     }
//   }

//   &:disabled {
//     opacity: 0.2;
//   }
// `

// const Text = styled.span<ButtonProps & { $stripMargin?: boolean }>`
//   line-height: 1;
//   ${(props) => getTextMargin(props.size)}
//   ${(props) => props.$stripMargin && 'margin: 0;'}
// `

export const fake = 5
