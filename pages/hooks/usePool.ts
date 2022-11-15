import { ethers } from 'ethers'
import { useContractRead } from 'wagmi'
import PoolABI from '../../contracts/abi/Pool.json'

const address = '0x92D433526ab0112Caa640E0202C26C8A172b1f17'

const usePool = () => {
  const { data: borrows } = useContractRead({
    address,
    abi: PoolABI.abi,
    functionName: 'borrows',
  })

  const { data: numBorrows } = useContractRead({
    address,
    abi: PoolABI.abi,
    functionName: 'numBorrows',
  })

  const { data: owner } = useContractRead({
    address,
    abi: PoolABI.abi,
    functionName: 'owner',
  })

  const { data: positionIds } = useContractRead({
    address,
    abi: PoolABI.abi,
    functionName: 'positionIds',
    args: [ethers.BigNumber.from(0)],
  })

  const { data: positions } = useContractRead({
    address,
    abi: PoolABI.abi,
    functionName: 'positions',
    args: [positionIds],
  })

  return { borrows, numBorrows, owner, positions, positionIds }
}

export default usePool
