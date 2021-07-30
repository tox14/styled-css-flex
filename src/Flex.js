import styled from 'styled-components'
import PropTypes from 'prop-types'

const Flex = styled.div.withConfig({
  shouldForwardProp: (prop) => ['children'].includes(prop)
})`
  display: flex;

  ${({ flexDirection }) =>
    flexDirection && `flex-directions: ${flexDirection}`};

  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};

  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};

  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};

  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf}`};

  ${({ flexBasis }) => flexBasis && `flex-basis: ${flexBasis}`};

  ${({ flexGrow }) => flexGrow && `flex-grow: ${flexGrow}`};

  ${({ flexShrink }) => flexShrink && `flex-shrink: ${flexShrink}`};

  ${({ flex }) => flex && `flex: ${flex}`};

  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap}`};
`

const globalValues = ['inherit', 'initial', 'unset']

Flex.propTypes = {
  flexDirection: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
    ...globalValues
  ]),
  alignContent: PropTypes.oneOf([
    'stretch',
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    ...globalValues
  ]),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    ...globalValues
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
    ...globalValues
  ]),
  alignSelf: PropTypes.oneOf([
    'auto',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
    ...globalValues
  ]),
  flexWrap: PropTypes.oneOf([
    'nowrap',
    'wrap',
    'wrap-reverse',
    ...globalValues
  ]),
  flexBasis: PropTypes.string,
  flexGrow: PropTypes.string,
  flexShrink: PropTypes.string,
  flex: PropTypes.string
}

export default Flex
