import React, { useState } from 'react'
import propTypes from 'prop-types'
import './index.scss'

export default function InputText(props) {
    const {name, type, value, prepend, append, outerClassName, inputClassName, placeholder, errorResponse} = props;

    const [ HasError, setHasError] = useState(null)
    let pattern = ""
    if(type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(type === "telp") pattern = "[0-9]*";

    const onChange = (event) => {
        const target = {
            target: {
                name: name,
                value: event.target.value,
            }
        }

        if(type === "email") {
            if(!pattern.test(event.target.value)) setHasError(errorResponse)
            else setHasError("");
        }

        if(type === "telp") {
            if(event.target.validity.valid) props.onChange(target)
            else props.onChange(target)
        }
    }

    return (
        <div className={["input-text mb-3", outerClassName].join(" ")}>
            <div className="input-group">
                {prepend && (
                    <div className="input-group-prepend bg-gray-900">
                        <span className="input-group-text">{prepend}</span>
                    </div>
                )}
                <input
                name={name}
                type={type}
                pattern={pattern}
                className={["form-control", inputClassName].join(" ")}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                />
                {append && (
                    <div className="input-group-prepend bg-gray-900">
                        <span className="input-group-text">{prepend}</span>
                    </div>
                )}
            </div>
            {HasError && <span className="error-helper">{HasError}</span>}
        </div>
    )
}

InputText.defaultProps = {
    type: "text",
    pattern: "",
    placeholder: "Please type here...",
    errorResponse: "Please match the request format.",
}

InputText.propTypes = {
    name: propTypes.string.isRequired,
    value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
    onChange: propTypes.func.isRequired,
    prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
    append: propTypes.oneOfType([propTypes.number, propTypes.string]),
    type: propTypes.string,
    placeholder: propTypes.string,
    outerClassName: propTypes.string,
    inputClassName: propTypes.string,
}
