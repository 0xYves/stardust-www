import { Container } from '@nextui-org/react'
import OffersTable from '../components/OffersTable'

export default function Lend() {
  return (
    <Container
      css={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <OffersTable />
    </Container>
  )
}
