import { Box, Flex, Label, FlexProps, Atoms } from '@zoralabs/zord'
import { ImageElement, NavLink } from 'components'
import { FAVICON, APP_TITLE } from 'constants/env-vars'

export interface HeaderBrandingProps extends FlexProps {
  imgSrc?: string
  title?: string
  useImage?: boolean
  useTitle?: boolean
  imageWidth?: Atoms['width']
  imageHeight?: Atoms['height']
}

export function HeaderBranding({
  imgSrc,
  title,
  useImage = true,
  useTitle = true,
  imageHeight = 'x10',
  imageWidth = 'x10',
  ...props
}: HeaderBrandingProps) {
  return (
    <NavLink href="/" passHref>
      <Flex as="a" {...props} align="center" gap="x2">
        {useImage && (
          <Box w={imageWidth} h={imageHeight} position="relative">
            <ImageElement src={imgSrc ? imgSrc : FAVICON} />
          </Box>
        )}
        {useTitle && <Label>{title ? title : APP_TITLE}</Label>}
      </Flex>
    </NavLink>
  )
}
