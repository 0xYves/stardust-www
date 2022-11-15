import { createContext } from 'react'

import { Step } from './types'

interface StepperContextValue {
  nonce?: number
  onExit: () => void
  onNextStep: () => void
  onPreviousStep: () => void
  onSetNonce: (nonce?: number) => void
  onSetStep: (step: Step) => void
  step: Step
}

const StepperContext = createContext<StepperContextValue>({
  onExit: () => {},
  onNextStep: () => {},
  onPreviousStep: () => {},
  onSetNonce: (nonce?: number) => {},
  onSetStep: () => {},
  step: Step.ENTRY,
})

export default StepperContext
