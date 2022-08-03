import { useMemo } from 'react'
import { PopoverMenu } from './PopoverMenu'
import { PopoutMenu } from './PopoutMenu'
import { BoxProps } from '@zoralabs/zord'

export interface CollectionMenuProps extends BoxProps {
  menuStyle?: 'popover' | 'popout'
}

export function CollectionMenu({ menuStyle = 'popover', ...props }: CollectionMenuProps) {
  const menuComponent = useMemo(() => {
    switch (menuStyle) {
      case 'popout':
        return <PopoutMenu {...props} />
      case 'popover':
        return <PopoverMenu {...props} />
      default:
        return <PopoverMenu {...props} />
    }
  }, [])

  return menuComponent
}
