// @flow
import styled, { css } from 'styled-components'
import * as React from 'react'

type Props = {|
  onClick: () => any,
  primary: boolean,
  children: React.Node,
|}

const Button = styled.button`
  height: 60px;
  width: 225px;
  border-radius: 6px;
  background-color: papayawhip;

  outline: none;
  cursor: pointer;

  ${(props: Props) =>
    props.primary &&
    css`
      background-color: palevioletred;
    `};
`

export default (props: Props) => <Button {...props} />
