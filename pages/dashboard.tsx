import { Button, Container, Grid, Row, Spacer, Text } from '@nextui-org/react'
import { FiPlusCircle } from 'react-icons/fi'
import DetailsCard from '../components/DetailsCard'
import { useState } from 'react'
import Borrow from '../components/Borrow'
import BorrowModal from '../components/BorrowModal'

export default function Dashboard() {
  const [visible, setVisible] = useState(false)

  const handleBorrow = () => {
    setVisible(true)
  }

  const handleClose = () => {
    setVisible(false)
  }
  return (
    <Container css={{ width: 'max-content' }}>
      <Row justify="space-between">
        <Text size="24px" weight="bold">
          My borrows
        </Text>
        <Button
          auto
          bordered
          icon={<FiPlusCircle />}
          size="md"
          onClick={handleBorrow}
        >
          Borrow
        </Button>
        <BorrowModal visible={visible} onClose={handleClose} />
      </Row>
      <Spacer y={1} />
      <Grid.Container css={{ gap: 24 }} justify="center">
        <Grid>
          <DetailsCard />
        </Grid>
        <Grid>
          <DetailsCard />
        </Grid>
        <Grid>
          <DetailsCard />
        </Grid>
      </Grid.Container>
      <Spacer y={3} />
      <Text size="24px" weight="bold">
        My supplies
      </Text>
      <Spacer y={1} />
      <Grid.Container css={{ gap: 24 }} justify="center">
        <Grid>
          <DetailsCard />
        </Grid>
        <Grid>
          <DetailsCard />
        </Grid>
        <Grid>
          <DetailsCard />
        </Grid>
      </Grid.Container>
    </Container>
  )
}
{
  /* <Container>
  <Col>
    <Text h2>My Loans</Text>
    <MyLoansTable />
  </Col>
  <Col>
    <Text h2>Active Positions</Text>
    <MyLoansTable />
  </Col>
</Container> */
}
