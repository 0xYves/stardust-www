import { BigNumber } from 'ethers'
import { useState } from 'react'
import { useContractRead } from 'wagmi'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'

// function App() {
//  return (
//  <div>
//  <button disabled={!write} onClick={() => write?.()}>
//  Feed
//  </button>
//  {isLoading && <div>Check Wallet</div>}
//  {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
//  </div>
//  )
// }

import PoolABI from '../../contracts/abi/Pool.json'
const address = '0x92D433526ab0112Caa640E0202C26C8A172b1f17'

const usePool = () => {
  const [data, setData] = useState<BigNumber>()
  // const { config } = usePrepareContractWrite({
  //   address,
  //   abi: PoolABI.abi,
  //   functionName: 'create',
  // })

  // const { data: createData, write: create } = useContractWrite(config)

  const { data: numBorrows } = useContractRead({
    address,
    abi: PoolABI.abi,
    functionName: 'numBorrows',
  })

  // const handleCreate = ({
  //   token,
  //   amount,
  //   borrowAmount,
  //   expiry,
  // }: {
  //   token: string
  //   amount: number
  //   borrowAmount: number
  //   expiry: number
  // }) => {
  //   // TODO: check decimals
  //   if (!create) return
  //   const formattedAmount = BigNumber.from(amount).mul(
  //     BigNumber.from(10).pow(18),
  //   )
  //   const formattedBorrowAmount = BigNumber.from(borrowAmount).mul(
  //     BigNumber.from(10).pow(18),
  //   )

  //   create(token, formattedAmount, formattedBorrowAmount, expiry)
  // }

  return { numBorrows }
}

export default usePool
