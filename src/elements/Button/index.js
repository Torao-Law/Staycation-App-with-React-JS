import React from 'react'

import { Link} from 'react-router-dom'
import propTypes from 'prop-types'



export default function Button(props) {
    const className = [props.className]
    if(props.isPrimary) className.push("btn-primary")
    if(props.isLarge) className.push("btn-lg")
    if(props.isSmall) className.push("btn-sm")
    if(props.isBlock) className.push("btn-block")
    if(props.hasShadow) className.push("btn-shadow")
    // eslint-disable-next-line
    const onClick = () => {
        if(props.onClick) props.onClick()
    }

    if(props.isDisable || props.isLoading) {
        if(props.isDisable) className.push("disabled");
            return(
                <span className={className.join(" ")} style={props.style}>
                {props.isLoading}<>
                <span className="spinner-border spinner-border-sm mx-5"></span>
                <span className="sr-only">Loading...</span>
                </>
            </span>
        );
    }

    if(props.type === "link") {
        if(props.isExternal) {
            return(
                // eslint-disable-next-line
                <a href={props.href} className={className.join(" ")} style={props.style}
                target={props.target==="_blank"?"_blank":undefined}
                rel={props.target==="_blank"?"noopener norefferer":undefined}>{props.children}</a>
            )
        }
        else {
            return(
                <Link to={props.href} className={className.join(" ")} style={props.style}>
                    {props.children}
                </Link>
            )
        }
    }

    return<button className={className.join(" ")} style={props.style}>{props.children}</button>
}


Button.propTypes = {
    type: propTypes.oneOf(["button", "link"]),
    onClick: propTypes.func,
    target: propTypes.string,
    href: propTypes.string,
    className: propTypes.string,
    isPrimary: propTypes.bool,
    isExternal: propTypes.bool,
    isDisable: propTypes.bool,
    isLoading: propTypes.bool,
    isSmall: propTypes.bool,
    isLarge: propTypes.bool,
    isBlock: propTypes.bool,
    hasShadow: propTypes.bool,
}


