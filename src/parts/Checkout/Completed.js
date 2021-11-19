import React from 'react'
import { Fade } from 'react-reveal'
import CompletedIlustration from 'assets/images/CompletIlustration.png'

export default function Completed() {
    return (
        <Fade>
            <div className="container" style={{ marginBottom: 30 }}>
                <div className="row justify-content-center align-item-center">
                    <div className="col-4">
                        <img src={CompletedIlustration} className="img-fluid" alt="Ilustrai-completed" />
                        <p className="text-gray-500">
                            We will inform you via email later once the transaction has been accept
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
