import { Stack } from '@zoralabs/zord'
import { PageWrapper, Seo } from 'components'
import { allAddresses } from 'constants/collection-addresses'

/* @ts-ignore */
const Home = () => {
  // console.log('allAddresses', allAddresses)
  return (
    <PageWrapper direction="column" gap="x6">
      <Seo />
      <Stack></Stack>
    </PageWrapper>
  )
}

export default Home
