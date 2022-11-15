import React, { useState } from 'react'
import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Col,
  Dropdown,
} from '@nextui-org/react'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { address, goerliUSDC } from '../constants'
import PoolABI from '../contracts/abi/Pool.json'
import { ethers } from 'ethers'

interface BorrowModalProps {
  visible: boolean
  onClose: () => void
}

const tokenNames = [{ key: 'USDC' }, { key: 'ETH' }, { key: 'CONVEX' }]

const BorrowModal: React.FC<BorrowModalProps> = ({ visible, onClose }) => {
  const [selected, setSelected] = useState('ETH')
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
  const {
    data: createData,
    write: create,
    isLoading,
    isSuccess,
    isError,
  } = useContractWrite(config)

  if (isLoading) {
    //transaction pending
  }

  if (isError) {
    //transaction failed try again
  }

  if (isSuccess) {
    //<div>Transaction: {JSON.stringify(data)}</div>
  }

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={onClose}
    >
      <Modal.Body>
        <Col>
          <Text h6>Collateral</Text>
          <Row>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="0.00"
            />
            <Dropdown>
              <Dropdown.Button flat>{selected}</Dropdown.Button>
              <Dropdown.Menu
                aria-label="Dynamic Actions"
                selectionMode="single"
                items={tokenNames}
              >
                {(item) => (
                  <Dropdown.Item key={item.key}>{item.key}</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Row>
        </Col>
        <Col>
          <Text h6>Amount to borrow</Text>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="0.00"
          />
        </Col>
        <Col span={3}>
          <Text h6>APY</Text>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="%"
          />
        </Col>
        <Col span={4}>
          <Text h6>Duration</Text>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="0 weeks"
          />
        </Col>
      </Modal.Body>
      <Modal.Footer justify={'center'}>
        <Button auto onClick={onClose} css={{ width: '100%' }}>
          Borrow now
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default BorrowModal
