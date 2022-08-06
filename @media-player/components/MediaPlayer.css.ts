import { globalStyle, style } from '@vanilla-extract/css'
import { atoms, media } from '@zoralabs/zord'
import { recipe } from '@vanilla-extract/recipes'

export const buttonStyleShared = style([
  {
    zIndex: '1000',
    transition: 'opacity 250ms ease',
    willChange: 'opacity',
    cursor: 'pointer',
    WebkitTapHighlightColor: 'rgba(255,255,255,0)',
    WebkitAppearance: 'none',
    border: 0,
    backgroundColor: 'rgba(255,255,255,0)',
    textDecoration: 'none!important',
  },
  atoms({
    pos: 'absolute',
    inset: 'x0',
  }),
])

globalStyle(`${buttonStyleShared} svg`, {
  position: 'absolute',
  inset: '0px',
  objectFit: 'contain',
  width: '100%',
  height: '100%',
})
