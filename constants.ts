export const address = '0x52c487274043402a493454BD1bc65be9eFF46ed7'
export const goerliETH = '0x05d314c474C54D085B14b59D76E5AbD141De0191'
export const goerliUSDC = '0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C'
export const goerliDAI = '0x73967c6a0904aA032C103b4104747E88c566B1A2'
export const oneWeek = 604800016
export interface Loan {
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
export type AssetType = {
  name?: string
  logo?: string
}

export type Row = {
  asset: AssetType
  apy: number
  ltv: number
  borrowAmount: string
  collateralAmount: string
  duration: string
  status: string
  borrower: string
}
