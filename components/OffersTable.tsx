import { Table } from '@nextui-org/react'
import React from 'react'

type AssetType = {
  name?: string
  logo?: string
}

type row = {
  asset: AssetType
  apy: number
  ltv: number
  borrowAmount: string
  collateralAmount: string
  duration: string
  status: string
  borrower: string
}

const rows: row[] = [
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

export default function OffersTable() {
  return (
    <Table
      aria-label="Example static collection table"
      css={{
        height: 'auto',
        minWidth: '100%',
      }}
      selectionMode="single"
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
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  )
}
