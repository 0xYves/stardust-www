import { Button, Card, Container, Input, Row } from '@nextui-org/react'
import { ethers } from 'ethers'
import { useState } from 'react'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import PoolABI from '../contracts/abi/Pool.json'
import TokenModal from '../modals/TokenModal'
import usePool from '../pages/hooks/usePool'

const address = '0x92D433526ab0112Caa640E0202C26C8A172b1f17'
const goerliETH = '0x05d314c474C54D085B14b59D76E5AbD141De0191'
const goerliUSDC = '0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C'
const goerliDAI = '0x73967c6a0904aA032C103b4104747E88c566B1A2'
const oneWeek = 604800016

export default function Borrow() {
  // const { config } = usePrepareContractWrite({
  //   address,
  //   abi: PoolABI.abi,
  //   functionName: 'create',
  //   args: [
  //     goerliUSDC,
  //     ethers.utils.parseUnits('1.0', 6),
  //     ethers.utils.parseUnits('1.0', 6),
  //     ethers.constants.MaxUint256,
  //   ],
  // })

  // const { data: createData, write: create } = useContractWrite(config)
  const [visible, setVisible] = useState(false)

  // const { config } = usePrepareContractWrite({
  //   address: goerliUSDC,
  //   abi: ERC20ABI.abi,
  //   functionName: 'approve',
  //   args: [address, ethers.constants.MaxUint256],
  // })

  // const { data: createData, write: approve } = useContractWrite(config)

  // if (!create) return

  const handleCreate = () => {
    // if (!approve) return
    if (!create) return
    create()
    // approve()
  }

  const handleOpen = () => setVisible(true)

  const handleClose = () => {
    setVisible(false)
  }
  const { borrows, numBorrows, owner, positions, positionIds } = usePool()
  console.log('🚀 ~ Borrow ~ owner', owner)
  console.log('🚀 ~ Borrow ~ borrows', borrows)
  console.log('🚀 ~ Borrow ~ positions', positions)
  console.log('🚀 ~ Borrow ~ numBorrows', numBorrows)
  console.log('🚀 ~ Borrow ~ positionIds', positionIds)

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
