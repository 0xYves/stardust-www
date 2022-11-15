import { Button, Modal, Text } from '@nextui-org/react'

import Borrow from '../components/Borrow'
import { useState } from 'react'
import BorrowModal from '../components/BorrowModal'

export default function Home() {
  const [visible, setVisible] = useState(false)

  const handleOpen = () => {
    setVisible(true)
  }

  const handleClose = () => {
    setVisible(false)
  }

  return (
    <>
      <Button onClick={handleOpen} />
      <BorrowModal visible={visible} onClose={handleClose} />
    </>
  )
}
