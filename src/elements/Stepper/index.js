import React, { useState } from 'react'

import propTypes from 'prop-types'

export { default as Controller } from './Controller'
export { default as MainContent } from './MainContent'
export { default as Numbering } from './Numbering'
export { default as Meta } from './Meta'


export default function Stepper(props) {
    const { steps, initialStep } = props
    const stepsKey = Object.keys(steps)

    const [CurrentStep, setCurretStep] = useState(stepsKey.indexOf(initialStep)> -1 ? initialStep : stepsKey[0])

    const totalStep = stepsKey.length
    const indexStep = stepsKey.indexOf(CurrentStep)

    function prevStep() {
        if(+indexStep > 0) setCurretStep(stepsKey[indexStep - 1])
    }

    function nextStep() {
        if(+indexStep < totalStep) setCurretStep(stepsKey[indexStep + 1])
    }

    return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>
}

Stepper.propTypes = {
    data: propTypes.object.isRequired,
    initialStep: propTypes.string
}

