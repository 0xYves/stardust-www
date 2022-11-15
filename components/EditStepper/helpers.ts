import firebase from 'firebase/app'

import { AvatarItem } from 'models/AvatarItem'

export async function updateNftStatus(
  listing: AvatarItem,
  account?: string,
  txHash?: string,
  nonce?: number,
) {
  try {
    const updateStatus = firebase
      .functions()
      .httpsCallable('avatarItems-updateStatus')
    return await updateStatus({
      account,
      contractAddress: listing.contractAddress,
      txHash,
      nonce,
      tokenId: listing.tokenId,
    })
  } catch (e) {
    console.log(e)
    return false
  }
}
