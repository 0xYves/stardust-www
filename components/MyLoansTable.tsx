import { Button, Table } from '@nextui-org/react'
import { Row } from '../constants'

const rows: Row[] = [
  {
    asset: { name: 'convex', logo: 'www.image.com' },
    apy: 10,
    ltv: 0.5,
    borrowAmount: '10000',
    collateralAmount: '100 ($200)',
    duration: '2 weeks',
    status: 'Active',
    borrower: '0xmoalo',
  },
  {
    asset: { name: 'convex', logo: 'www.image.com' },
    apy: 10,
    ltv: 0.5,
    borrowAmount: '10000',
    collateralAmount: '100 ($200)',
    duration: '2 weeks',
    status: 'Active',
    borrower: '0xmoalo',
  },
]

export default function MyLoansTable() {
  return (
    <Table
      css={{
        height: 'auto',
        minWidth: '100%',
        backgroundColor: '$primaryBackground',
      }}
    >
      <Table.Header>
        <Table.Column>Asset Name</Table.Column>
        <Table.Column>APY</Table.Column>
        <Table.Column>LTV</Table.Column>
        <Table.Column>Borrow Amount</Table.Column>
        <Table.Column>Collateral Amount</Table.Column>
        <Table.Column>Duration</Table.Column>
        <Table.Column>Status</Table.Column>
        <Table.Column>Borrower</Table.Column>
        <Table.Column>
          <></>
        </Table.Column>
      </Table.Header>
      <Table.Body>
        {rows.map((row, i) => {
          return (
            <Table.Row key={i}>
              <Table.Cell>{row.asset.name}</Table.Cell>
              <Table.Cell>{row.apy}%</Table.Cell>
              <Table.Cell>{row.ltv}</Table.Cell>
              <Table.Cell>{row.borrowAmount} ETH</Table.Cell>
              <Table.Cell>{row.collateralAmount}</Table.Cell>
              <Table.Cell>{row.duration}</Table.Cell>
              <Table.Cell>{row.status}</Table.Cell>
              <Table.Cell>{row.borrower}</Table.Cell>
              <Table.Cell>
                <Button size="xs">Fill</Button>
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  )
}
