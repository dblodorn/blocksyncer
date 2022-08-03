import { Grid, GridProps } from '@zoralabs/zord'
import { CollectionMenu, CollectionMenuProps } from './../Menu'
import { headerBrandingWrapper, headerWrapper } from './Header.css'
import { ManageLink } from './ManageLink'
import { ConnectButton } from './ConnectButton'
import { HeaderBranding } from './HeaderBranding'

export interface HeaderCompositionProps extends CollectionMenuProps {}

export function HeaderComposition({
  menuStyle = 'popover',
  ...props
}: HeaderCompositionProps) {
  return (
    <Grid as="header" className={headerWrapper} {...props}>
      <HeaderBranding
        className={headerBrandingWrapper}
        imageHeight="x14"
        imageWidth="x14"
      />
      <CollectionMenu menuStyle={menuStyle} />
      <ManageLink />
      <ConnectButton />
    </Grid>
  )
}
