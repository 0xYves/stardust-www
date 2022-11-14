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
  const { config } = usePrepareContractWrite({
    address,
    abi: PoolABI.abi,
    functionName: 'create',
  })

  const { data: createData, write: create } = useContractWrite(config)

  const { data: numBorrows } = useContractRead({
    address,
    abi: PoolABI.abi,
    functionName: 'numBorrows',
  })
  return { numBorrows, onCreate: create }
}

export default usePool
