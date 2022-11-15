import { ethers } from 'ethers'
import { useContractRead } from 'wagmi'
import PoolABI from '../../contracts/abi/Pool.json'
import { address, Loan } from '../../constants'

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
    enabled: false,
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
