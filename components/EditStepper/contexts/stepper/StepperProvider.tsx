import React, { useCallback, useState } from 'react'

import StepperContext from './StepperContext'
import { Step } from './types'

interface StepperProps {
  children: React.ReactNode
}
const StepperProvider: React.FC<StepperProps> = ({ children }) => {
  const [step, setStep] = useState<Step>(Step.ENTRY)
  const [nonce, setNonce] = useState<number>()

  const handleExit = useCallback(() => {
    setStep(Step.ENTRY)
  }, [])

  const handleSetNonce = useCallback((nonce?: number) => {
    setNonce(nonce)
  }, [])

  const handleNextStep = useCallback(() => {
    setStep((s) => s + 1)
  }, [setStep])

  const handlePreviousStep = useCallback(() => {
    setStep((s) => s - 1)
  }, [setStep])

  return (
    <StepperContext.Provider
      value={{
        nonce,
        onExit: handleExit,
        onNextStep: handleNextStep,
        onPreviousStep: handlePreviousStep,
        onSetNonce: handleSetNonce,
        onSetStep: setStep,
        step,
      }}
    >
      {children}
    </StepperContext.Provider>
  )
}

export default StepperProvider
