import React, { useState } from 'react'

import styled from 'styled-components'

import Box from 'components/Box'
import Button from 'components/Button'
import Modal, { ModalProps } from 'components/Modal'
import ModalActions from 'components/ModalActions'
import ModalContent from 'components/ModalContent'
import ModalHeader from 'components/ModalHeader'
import NumberInput from 'components/NumberInput'
import Text from 'components/Text'
import Wardrobe from 'components/Wardrobe'

import useGas from 'contexts/gas/useGas'

import { AvatarItem } from 'models/AvatarItem'

import { getReadablePrice } from 'views/Nfts/helpers'

import useStepper from '../../contexts/stepper/useStepper'
import ItemFrame from '../../../../../ItemFrame'

interface EditListingModalProps extends ModalProps {
  item: AvatarItem
  onCancelListing: (gasPrice: number) => Promise<void>
  onCreateListing: (gasPrice: number) => Promise<void>
  onInputChange: (e: React.FormEvent<HTMLInputElement>) => void
  onUpdateListing: (gasPrice: number) => Promise<void>
  price: string
}

const FEE_PERCENT = 0.05

const EditListingModal: React.FC<EditListingModalProps> = ({
  item,
  onCancelListing,
  onCreateListing,
  onInputChange,
  onUpdateListing,
  price,
  ...modalProps
}) => {
  const { liquidityZoneIdToGasPricesMap } = useGas()
  const [previewItemModalIsOpen, setPreviewItemModalIsOpen] = useState(false)

  const { onExit } = useStepper()

  const gasPrice = liquidityZoneIdToGasPricesMap['matic']
    ? liquidityZoneIdToGasPricesMap['matic']['standard']
    : 0

  const isListed = item.listPrice >= 0
  const isZeroPrice = !price || Number(price) <= 0
  const title = `${isListed ? 'Update' : 'New'} Listing`
  const formattedPrice = getReadablePrice(item.listPrice)

  const SubmitButtons = isListed ? (
    <UpdateActions>
      <Button
        color="bearish"
        full
        onClick={() => onCancelListing(gasPrice)}
        text="Cancel Listing"
        variant="floating"
      />
      <Button
        disabled={isZeroPrice}
        full
        onClick={() => onUpdateListing(gasPrice)}
        text="Update Listing"
        variant="outlined"
      />
    </UpdateActions>
  ) : (
    <Button
      disabled={isZeroPrice}
      full
      onClick={() => onCreateListing(gasPrice)}
      text="Create Listing"
    />
  )

  const p = Number(price) || Number(formattedPrice)
  const fee = p ? p * FEE_PERCENT : undefined
  const receive = p && fee ? p - fee : undefined

  return (
    <Modal {...modalProps} onDismiss={onExit} size="sm">
      <ModalHeader title={title} />
      <ModalContent gap>
        <Left>
          <ItemFrame item={item} size={128} />
        </Left>
        <NameWrapper>
          <Text size="lg" weight="bold">
            {item.metadata.name}
          </Text>
          <Text faded size="lg">
            #{item.tokenId}
          </Text>
        </NameWrapper>
        <InputSection>
          <InputWrapper>
            <Text size="sm">Price</Text>
            <Box flex={1}>
              <NumberInput
                align="right"
                endAdornment={
                  <Box paddingLeft={2} row>
                    <Text monospace>MATIC</Text>
                  </Box>
                }
                onChange={onInputChange}
                placeholder={item.listPrice ? formattedPrice : '0'}
                value={price}
              />
            </Box>
          </InputWrapper>
        </InputSection>
        <ConfigSection>
          <ConfigRow>
            <Text size="sm" faded weight="medium">
              Fee
            </Text>
            <Text faded monospace>
              {fee || '--'} MATIC
            </Text>
          </ConfigRow>
          <ConfigRow>
            <Text size="sm" faded weight="medium">
              Receive
            </Text>
            <Text monospace>{receive || '--'} MATIC</Text>
          </ConfigRow>
        </ConfigSection>
      </ModalContent>
      <ModalActions>{SubmitButtons}</ModalActions>
      {previewItemModalIsOpen && (
        <Wardrobe
          previewItem={item}
          onDismiss={() => setPreviewItemModalIsOpen(false)}
        />
      )}
    </Modal>
  )
}

const UpdateActions = styled.div`
  display: flex;
  flex: 1;
  gap: ${(props) => props.theme.spacing[3]}px;
`

const InputSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Left = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const InputWrapper = styled.div`
  align-items: center;
  background: ${(props) => props.theme.surfaces[3].backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  flex: 1;
  height: ${(props) => props.theme.inputSizes['md']}px;
  padding: 0 ${(props) => props.theme.spacing[3]}px;
`

const ConfigSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: left;
  width: 100%;
`

const ConfigRow = styled.div`
  align-items: center;
  display: flex;
  height: 24px;
  justify-content: space-between;
  padding: 0 ${(props) => props.theme.spacing[3]}px;
`

const NameWrapper = styled.div`
  display: flex;
`

export default EditListingModal
