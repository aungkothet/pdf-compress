'use client'

import { useState } from 'react'
import Step1Component from './UploadSteps/Step1Component'
import Step2Component from './UploadSteps/Step2Component'
import Step3Component from './UploadSteps/Step3Component'

export default function MainComponent() {
  const [step, setStep] = useState(1)
  const [jobId, setJobId] = useState()
  const [fileData, setFileData] = useState({})

  const nextStep = () => {
    setStep(step + 1)
  }

  return (
    <>
      <div className="mt-14 px-36">
        {step == 1 && (
          <Step1Component
            handleNextStep={nextStep}
            setFileData={setFileData}
          ></Step1Component>
        )}
        {step == 2 && (
          <Step2Component
            handleNextStep={nextStep}
            fileData={fileData}
            parseJobId={setJobId}
          ></Step2Component>
        )}
        {step == 3 && (
          <Step3Component fileData={fileData}
          jobId={jobId} setStep={setStep}></Step3Component>
        )}
      </div>
      {step == 3 && <hr className="h-px bg-primary-500 border-0"></hr>}
    </>
  )
}
