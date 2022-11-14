import {
  Row,
  Button,
  Card,
  Container,
  Input,
  Modal,
  Text,
  Navbar,
} from '@nextui-org/react'
import { useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import usePool from './hooks/usePool'

export default function Home() {
  const [visible, setVisible] = useState(false)

  const handleOpen = () => setVisible(true)

  const handleClose = () => {
    setVisible(false)
  }
  const { data } = usePool()
  console.log('🚀 ~ Home ~ data', data)
  return (
    <>
      <Navbar isBordered>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            STARDUST
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link isActive href="#">
            Borrow
          </Navbar.Link>
          <Navbar.Link href="#">Lend</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <ConnectButton />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
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
          <Button color="gradient" auto>
            Create Order
          </Button>
        </Card>
      </Container>
      <TokenModal onClose={handleClose} visible={visible} />
    </>
  )
}

interface TokenModalProps {
  visible: boolean
  onClose: () => void
}
const TokenModal: React.FC<TokenModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={onClose}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Select Token
        </Text>
      </Modal.Header>
      <Modal.Body>Tokens</Modal.Body>
    </Modal>
  )
}
