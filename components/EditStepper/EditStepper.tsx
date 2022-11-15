import StepperProvider from './contexts/stepper/StepperProvider'
import { Step } from './contexts/stepper/types'
import useStepper from './contexts/stepper/useStepper'

import EntryStep from './steps/EntryStep'

const EditStepperOuter = ({}) => {
  return (
    <StepperProvider>
      <EditStepper />
    </StepperProvider>
  )
}

const EditStepper = () => {
  const { onExit, onPreviousStep, onSetStep, step } = useStepper()

  return (
    <>
      {step === Step.ENTRY && <EntryStep />}
      {step > Step.ENTRY && step !== Step.EXIT && <></>}
    </>
  )
}

export default EditStepperOuter
