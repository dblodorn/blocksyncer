import Link from 'next/link'
import { Button } from '@zoralabs/zord'
import { useAccount } from 'wagmi'
import { manageButton } from './Header.css'
import { MANAGE_CTA } from 'constants/strings'

export function ManageLink() {
  const { address } = useAccount()

  if (!address) return null

  return (
    <Link href={`/manage/${address}`} passHref>
      <Button
        as="a"
        size="md"
        variant="secondary"
        borderRadius="round"
        className={[manageButton, 'zora-popover-menu__manage-link']}
        style={{
          height: 42,
        }}
      >
        {MANAGE_CTA}
      </Button>
    </Link>
  )
}
