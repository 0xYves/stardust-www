import { useContext } from 'react'

import StepperContext from './StepperContext'

const useStepper = () => {
  const context = useContext(StepperContext)
  return context
}

export default useStepper
