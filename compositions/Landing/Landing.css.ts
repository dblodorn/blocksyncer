import { style, globalStyle } from '@vanilla-extract/css'
import { atoms, color, media } from '@zoralabs/zord'
import { HEADER_HEIGHT } from 'styles/style-constants'

export const landingGridWrapper = style([
  {
    gridTemplateColumns: '1fr',
    '@media': {
      [media.min1024]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
        height: `calc(100vh - ${HEADER_HEIGHT * 2}px)`,
      },
    },
  },
  atoms({
    w: '100%',
    position: 'relative',
  }),
])

export const landingGridPanel = style([
  {},
  atoms({
    w: '100%',
    h: '100%',
    position: {
      '@1024': 'sticky',
    },
    top: {
      '@1024': 'x0',
    },
    overflowY: {
      '@1024': 'scroll',
    },
  }),
])

export const landingHeadline = style([
  {
    borderBottom: 'var(--dashed-border)',
    zIndex: 100,
    fontSize: 30,
    '@media': {
      [media.min1024]: {
        fontSize: 55,
      },
    },
  },
  atoms({
    px: {
      '@initial': 'x4',
      '@1024': 'x4',
    },
    py: {
      '@initial': 'x3',
      '@1024': 'x0',
    },
    position: 'sticky',
    top: 'x0',
  }),
])

export const landingTokenGrid = style([
  {
    gridTemplateColumns: '1fr',
  },
  atoms({
    w: '100%',
  }),
])

globalStyle(`${landingGridWrapper} .nft-grid-wrapper`, {
  padding: '0px!important',
  gap: '0px!important',
})

export const nftRowEdition = style([
  {
    backgroundColor: '#e1c9b1',
    selectors: {
      '&:nth-of-type(even)': {
        backgroundColor: '#66c589',
      },
    },
  },
])

export const nftRowCollection = style([
  {
    backgroundColor: '#66c589',
    selectors: {
      '&:nth-of-type(even)': {
        backgroundColor: '#e1c9b1',
      },
    },
  },
])

export const landingNFTRow = style([
  {
    borderBottom: 'var(--dashed-border)',
    '@media': {
      [media.min1024]: {
        height: 350,
      },
    },
  },
])
