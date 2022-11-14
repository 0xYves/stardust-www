import { Modal, Text } from '@nextui-org/react'

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

export default TokenModal
