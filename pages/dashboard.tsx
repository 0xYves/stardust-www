import { Card, Col, Container, Row, Text } from '@nextui-org/react'
import MyLoansTable from '../components/MyLoansTable'

export default function Dashboard() {
  return (
    <Container>
      <Col>
        <Text h2>My Loans</Text>
        <MyLoansTable />
      </Col>
      <Col>
        <Text h2>Active Positions</Text>
        <MyLoansTable />
      </Col>
    </Container>
  )
}
