import { style, globalStyle } from '@vanilla-extract/css'
import { atoms, media, typography, fontWeight, color, space } from '@zoralabs/zord'
import {
  FOOTER_HEIGHT,
  FOOTER_HEIGHT_MOBILE,
  HEADER_HEIGHT,
  HEADER_HEIGHT_MOBILE,
  MAX_WIDTH,
} from './style-constants'
import { recipe } from '@vanilla-extract/recipes'

globalStyle('html, body', {
  backgroundColor: 'var(--background-color)',
})

globalStyle('html, body', {
  margin: 0,
  padding: 0,
})

globalStyle('a', {
  color: color.black100,
  textDecoration: 'none',
})

globalStyle('*', {
  fontFamily: 'SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace!important',
})

globalStyle('h1, h2, h3', {
  fontFamily: "'display', monospace!important",
})

globalStyle('light-font', {
  fontWeight: 300,
  fontFamily: 'SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace!important',
})

export const lightFont = style({
  fontWeight: 300,
  fontFamily: 'SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace!important',
})

export const noTextWrap = style({
  whiteSpace: 'nowrap',
})

export const textCenter = style({
  textAlign: 'center',
})

export const leadingTight = style({
  lineHeight: 1.125,
})

export const lightGreyType = style({
  color: 'var(--dk-grey)',
})

export const buttonStyle = style([
  {
    backgroundColor: 'var(--light-grey)',
  },
  atoms({
    borderRadius: 'round',
    px: 'x2',
    py: 'x2',
    justifyContent: 'center',
  }),
])

export const fullSizeImage = style([
  atoms({
    inset: 'x0',
    position: 'absolute',
    w: '100%',
    h: '100%',
    objectFit: 'cover',
  }),
])

export const pageWrapper = style([
  {
    minHeight: `calc(100vh - ${HEADER_HEIGHT_MOBILE + FOOTER_HEIGHT_MOBILE}px)`,
    '@media': {
      [media.min1024]: {
        minHeight: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)`,
      },
    },
  },
])

export const maxWidthSm = style([
  {
    maxWidth: MAX_WIDTH.SM,
  },
  atoms({
    width: '100%',
    margin: 'auto',
  }),
])

/**
 * Ovveride styles for filter
 */
globalStyle('.zord-acccordionTrigger > span', {
  fontFamily: "'display', monospace!important",
  fontSize: typography.size[8],
  paddingBottom: 10,
})

globalStyle('.zord-attributesHeading', {
  fontFamily: "'display', monospace!important",
  fontSize: typography.size[8],
  paddingTop: 10,
})

globalStyle('.zord-accordionContent', {
  backgroundColor: 'var(--background-color)!important',
})

globalStyle('.zord-accordion', {
  borderBottom: `1px dashed ${color.black30}`,
})

globalStyle('.blocksyncer-traits-wrapper', {
  paddingTop: space.x4,
})

globalStyle('.zord-attributesHeading', {
  borderBottom: `1px dashed ${color.black30}`,
})

globalStyle('.zord-accordionHeader', {
  marginBottom: `${space.x1}!important`,
})

export const clickAnimation = style({
  transition:
    'border 0.1s ease-in-out, background 0.1s ease-in-out, transform 0.1s ease-out',
  userSelect: 'none',
  selectors: {
    '&:focus-visible': {
      outline: '2px solid rgb(32, 103, 243)',
      outlineStyle: 'auto',
    },
    '&:active': {
      transform: 'scale(0.95)',
    },
    '&[disabled]': {
      cursor: 'not-allowed',
      pointerEvents: 'none',
      opacity: 0.6,
    },
    '&[disabled]:active': {
      transform: 'unset',
    },
  },
})

/* PAGE HEADER */
export const pageHeadline = [
  {
    fontWeight: fontWeight.display,
    lineHeight: '40px',
    '@media': {
      [media.min1024]: {
        lineHeight: '50px',
      },
    },
  },
  atoms({
    fontSize: {
      '@initial': '48px',
      '@1024': typography.size[1],
    },
  }),
]

export const pageHeaderVariants = {
  variant: {
    topBorder: [
      {
        // borderTop: `2px solid ${color.black10}`,
        '@media': {
          [media.min1024]: {
            borderTop: 0,
          },
        },
      },
      atoms({
        pt: {
          '@initial': 'x6',
          '@1024': 'x0',
        },
      }),
    ],
  },
}

export const pageHeaderWrapper = recipe({
  variants: pageHeaderVariants,
  base: style([
    {
      maxWidth: MAX_WIDTH.SM,
    },
    atoms({
      width: '100%',
      margin: 'auto',
      pt: {
        '@initial': 'x4',
        '@1024': 'x0',
      },
    }),
  ]),
})

export const hideMobile = style({
  '@media': {
    '(max-width: 500px)': {
      display: 'none',
    },
  },
})

export const collectionHeaderWrapper = style([
  {
    maxWidth: MAX_WIDTH.LG,
  },
  atoms({
    w: '100vw',
    overflowX: 'hidden',
    m: 'auto',
  }),
])
