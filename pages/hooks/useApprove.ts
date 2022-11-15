import { ethers } from 'ethers'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { address, goerliUSDC } from '../../constants'
import ERC20ABI from '../../contracts/abi/ERC20.json'

const useApprove = () => {
  const { config } = usePrepareContractWrite({
    address: goerliUSDC,
    abi: ERC20ABI.abi,
    functionName: 'approve',
    args: [address, ethers.constants.MaxUint256],
  })

  const { data: createData, write: approve } = useContractWrite(config)
}

export default useApprove
