import { Button, Card, Container, Input, Row } from '@nextui-org/react'
import { ethers } from 'ethers'
import { useState } from 'react'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { address, goerliUSDC } from '../constants'
import PoolABI from '../contracts/abi/Pool.json'
import TokenModal from '../modals/TokenModal'
import usePool from '../pages/hooks/usePool'

export default function Borrow() {
  const [visible, setVisible] = useState(false)
  // const { allPositions, borrows, numBorrows, owner, positions, positionIds } =
  const { allPositions } = usePool()
  console.log('🚀 ~ Borrow ~ allPositions', allPositions)

  // Pool: create()
  const { config } = usePrepareContractWrite({
    address,
    abi: PoolABI.abi,
    functionName: 'create',
    args: [
      goerliUSDC,
      ethers.utils.parseUnits('100', 6),
      ethers.utils.parseUnits('100', 6),
      ethers.constants.MaxUint256,
    ],
    enabled: false,
  })
  const { data: createData, write: create } = useContractWrite(config)

  if (!create) return

  const handleCreate = () => {
    if (!create) return
    create()
  }

  const handleOpen = () => setVisible(true)
  const handleClose = () => {
    setVisible(false)
  }

  return (
    <>
      <Container
        css={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Card
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            padding: '12px',
            width: '512px',
          }}
        >
          <Row align="flex-end" css={{ gap: '12px' }} justify="space-between">
            <Input
              css={{ flex: 3 }}
              bordered
              label="Collateral"
              placeholder="0"
            />
            <Button auto css={{ flex: 1 }} onClick={handleOpen}>
              ETH
            </Button>
          </Row>
          <Row align="flex-end" css={{ gap: '12px' }} justify="space-between">
            <Input
              css={{ flex: 3 }}
              bordered
              label="Token Out"
              placeholder="0"
            />
            <Button auto css={{ flex: 1 }} onClick={handleOpen}>
              DAI
            </Button>
          </Row>
          <Button auto color="gradient" onClick={handleCreate}>
            Create Order
          </Button>
        </Card>
      </Container>
      <TokenModal visible={visible} onClose={handleClose} />
    </>
  )
}
