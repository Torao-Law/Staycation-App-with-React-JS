import React, { useState, useEffect, useRef } from 'react';
import propTypes from 'prop-types';

import { DateRange } from 'react-date-range';
import './index.scss';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import formatDate from 'utils/formatDate'

export default function Date(props) {
    const { value, placeholder, name } = props;
    const [isShowed, setIsShowed] = useState(false)

    const datePickerChange = value => {
        const target = {
            target: {
                value: value.selection,
                name: name,
            }
        }
        props.onChange(target)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutSide)

        return () => {
            document.removeEventListener("mousedown", handleClickOutSide)
        }
    })

    const refDate = useRef(null);
    const handleClickOutSide = event => {
        if (refDate && !refDate.current.contains(event.target)) {
            setIsShowed(false)
        }
    }

    const check = focus => {
        focus.indexOf(1) < 0 && setIsShowed(false)
    }

    const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${value.endDate ? " - " + formatDate(value.endDate) : ""
    }`

    return <div ref={refDate} className={["input-date mb-3", props.outerclassName].join(" ")}>
        <div className="input-group">
            <div className="input-group-prepent bg-gray-900">
                <span className="input-group-text">
                    <img src="/images/ic_calendar.svg" alt="icon calender" />
                </span>
                <input
                    readOnly
                    type="text"
                    className="form-control"
                    value={displayDate}
                    placeholder={placeholder}
                    onClick={() => setIsShowed(!isShowed)}
                />

                {isShowed && (
                    <div className="date-range-wrapper">
                        <DateRange
                            editableDateInputs={true}
                            onChange={datePickerChange}
                            moveRangeOnFirstSelection={false}
                            onRangeFocusChange={check}
                            ranges={[value]}
                        />
                    </div>
                )}
            </div>
        </div>
    </div>
}


Date.propTypes = {
    value: propTypes.object,
    onChange: propTypes.func,
    placeholder: propTypes.string,
    outerclassName: propTypes.string,
}