import { Col, Container, Spacer, Text } from '@nextui-org/react'
import MyLoansTable from '../components/MyLoansTable'

type Props = {}

const Explore = (props: Props) => {
  return (
    <Container css={{ width: '1000px' }}>
      <Col>
        <Text size="24px" weight="bold">
          Active orders
        </Text>
        <Spacer y={1} />
        <MyLoansTable />
      </Col>
    </Container>
  )
}

export default Explore
