import { style, globalStyle } from '@vanilla-extract/css'
import { atoms, color } from '@zoralabs/zord'
import { HEADER_HEIGHT } from 'styles/style-constants'

export const landingGridWrapper = style([
  {
    gridTemplateColumns: 'repeat(2, 1fr)',
    height: `calc(100vh - ${HEADER_HEIGHT * 2}px)`,
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
    position: 'sticky',
    top: 'x0',
    overflowY: 'scroll',
  }),
])

export const landingHeadline = style([
  {
    borderBottom: `1px dashed ${color.black50}`,
    zIndex: 100,
  },
  atoms({
    px: 'x4',
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
