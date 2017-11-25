// @flow
import { css } from 'styled-components'

type SizesType = {|
  desktop: number,
  tablet: number,
  mobile: number,
|}

const sizes: SizesType = {
  desktop: 992,
  tablet: 768,
  mobile: 376,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args: any) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `

  return acc
}, {})

export const truncate = (width: string) => `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
