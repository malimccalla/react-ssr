// @flow
import styled, { css } from 'styled-components'
import * as React from 'react'

type Props = {|
  onClick: () => any,
  primary?: boolean,
  children: React.Node,
|}

const Button = styled.button`
  height: 60px;
  width: 225px;
  border-radius: 6px;
  background-color: papayawhip;
  color: white;
  font-size: 1em;
  transition: all 0.3s ease;

  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: pink;
  }

  /* === PRIMARY === */
  ${(props: Props) =>
    props.primary &&
    css`
      background-color: palevioletred;

      &:hover {
        background-color: green;
      }
    `};
`

export default (props: Props) => <Button {...props} />
