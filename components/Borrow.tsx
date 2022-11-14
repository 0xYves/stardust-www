import { Button, Card, Container, Input, Row } from '@nextui-org/react'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import PoolABI from '../contracts/abi/Pool.json'
import { ethers } from 'ethers'
import { useState } from 'react'
import usePool from '../pages/hooks/usePool'
import TokenModal from '../modals/TokenModal'

const address = '0x92D433526ab0112Caa640E0202C26C8A172b1f17'
const goerliETH = '0x05d314c474C54D085B14b59D76E5AbD141De0191'
const goerliUSDC = '0x2f3A40A3db8a7e3D09B0adfEfbCe4f6F81927557'
const goerliDAI = '0x73967c6a0904aA032C103b4104747E88c566B1A2'
const oneWeek = 604800016

export default function Borrow() {
  const { config } = usePrepareContractWrite({
    address,
    abi: PoolABI.abi,
    functionName: 'create',
    args: [
      goerliETH,
      ethers.BigNumber.from('1'),
      ethers.BigNumber.from('1'),
      ethers.BigNumber.from('1'),
    ],
  })

  const { data: createData, write: create } = useContractWrite(config)
  const [visible, setVisible] = useState(false)

  // if (!create) return

  const handleCreate = () => {
    // create()
  }

  const handleOpen = () => setVisible(true)

  const handleClose = () => {
    setVisible(false)
  }
  const { numBorrows } = usePool()
  console.log('🚀 ~ Home ~ numBorrows', numBorrows)

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