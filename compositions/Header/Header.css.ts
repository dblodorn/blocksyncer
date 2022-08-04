import { style } from '@vanilla-extract/css'
import { atoms, media, color } from '@zoralabs/zord'
import { HEADER_HEIGHT, HEADER_HEIGHT_MOBILE, HEADER_Z } from 'styles/style-constants'

export const headerWrapper = style([
  {
    height: HEADER_HEIGHT_MOBILE,
    zIndex: HEADER_Z,
    alignItems: 'center',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'auto',
    justifyContent: 'start',
    borderBottom: `2px solid ${color.black10}`,
    '@media': {
      [media.min1024]: {
        height: HEADER_HEIGHT,
        gridTemplateColumns: 'repeat(24, 1fr)',
        borderBottom: 'none',
      },
    },
  },
  atoms({
    w: '100%',
    p: {
      '@initial': 'x4',
      '@1024': 'x4',
    },
    pos: 'relative',
    gap: 'x4',
  }),
])

/* ELEMENT WRAPPERS FOR GRID PLACEMENT */
export const headerBrandingWrapper = style([
  {
    gridColumn: '1',
    gridRow: '1',
  },
  atoms({
    cursor: 'pointer',
    pos: 'relative',
  }),
])

export const manageButton = style([
  {
    gridColumn: '2',
    gridRow: '2',
    '@media': {
      [media.min1024]: {
        gridColumn: '23',
        gridRow: '1',
      },
    },
  },
  atoms({
    w: '100%',
    justifyContent: {
      '@initial': 'center',
      '@1024': 'center',
    },
  }),
])

export const connectButtonWrapper = style([
  {
    gridColumn: '2',
    gridRow: '1',
    '@media': {
      [media.min1024]: {
        gridColumn: '24',
        gridRow: '1',
      },
    },
  },
  atoms({
    w: '100%',
    justifyContent: {
      '@initial': 'flex-end',
      '@1024': 'flex-start',
    },
  }),
])
