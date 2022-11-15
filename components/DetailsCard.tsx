import { Button, Card, Col, Divider, Progress, Text } from '@nextui-org/react'
import React from 'react'

type Props = {}

const DetailsCard = (props: Props) => {
  return (
    <Card
      css={{
        backgroundColor: '$primaryBackground',
        fontFamily: 'Karla',
        padding: '32px',
        width: '300px',
      }}
    >
      <Col css={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <Text css={{ whiteSpace: 'nowrap' }} size="24px" weight="bold">
            1,000,000,000 bveCVX
          </Text>
          <Text color="#EBEBF599" css={{ opacity: 0.6 }}>
            borrowed
          </Text>
        </div>
        <Divider />
        <div>
          <Text color="$primary" size={24} weight="bold">
            4:20:69
          </Text>
          <Text color="#EBEBF599" css={{ opacity: 0.6 }}>
            time to expiry
          </Text>
          <Progress size="xs" value={70} />
        </div>
        <div>
          <Text size={24} weight="bold">
            1,500,000 USDC
          </Text>
          <Text color="#EBEBF599" css={{ opacity: 0.3 }}>
            in collateral
          </Text>
        </div>
        <div>
          <Text color="#EBEBF599" css={{ opacity: 0.3 }}>
            lender: 0x1234...1234
          </Text>
          <Text color="#EBEBF599" css={{ opacity: 0.3 }}>
            start time: 2:00 pm pst, 11.01.2002
          </Text>
          <Text color="#EBEBF599" css={{ opacity: 0.3 }}>
            end time: 2:00 pm pst, 11.01.2002
          </Text>
        </div>
        <Button>Repay</Button>
      </Col>
    </Card>
  )
}

export default DetailsCard
