import { Button, Container, Grid, Row, Spacer, Text } from '@nextui-org/react'
import { FiPlusCircle } from 'react-icons/fi'
import DetailsCard from '../components/DetailsCard'

export default function Dashboard() {
  return (
    <Container css={{ width: 'max-content' }}>
      <Row justify="space-between">
        <Text size="24px" weight="bold">
          My borrows
        </Text>
        <Button auto bordered icon={<FiPlusCircle />} size="md">
          Borrow
        </Button>
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
