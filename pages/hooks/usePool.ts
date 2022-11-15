import { ethers } from 'ethers'
import { useContractRead } from 'wagmi'
import PoolABI from '../../contracts/abi/Pool.json'

const address = '0x52c487274043402a493454BD1bc65be9eFF46ed7'

interface Loan {
  borrower: string
  lender: string
  isActive: boolean
  isFilled: boolean
  isSettled: boolean
  collateral: string
  collateralAmount: string
  borrowAmount: string
  startTime: string
  expiryTime: string
}

const usePool = () => {
  // const { data: borrows } = useContractRead({
  //   address,
  //   abi: PoolABI.abi,
  //   functionName: 'borrows',
  // })

  // const { data: numBorrows } = useContractRead({
  //   address,
  //   abi: PoolABI.abi,
  //   functionName: 'numBorrows',
  // })

  const { data: allPositions } = useContractRead({
    address,
    abi: PoolABI.abi,
    functionName: 'fetchAllPositions',
  })

  // const { data: owner } = useContractRead({
  //   address,
  //   abi: PoolABI.abi,
  //   functionName: 'owner',
  // })

  // const { data: positionIds } = useContractRead({
  //   address,
  //   abi: PoolABI.abi,
  //   functionName: 'positionIds',
  //   args: [ethers.BigNumber.from(0)],
  // })

  // const { data: positions } = useContractRead({
  //   address,
  //   abi: PoolABI.abi,
  //   functionName: 'positions',
  //   args: [positionIds],
  // })

  // return { allPositions, borrows, numBorrows, owner, positions, positionIds }
  return { allPositions: allPositions as Loan[] }
}

export default usePool
