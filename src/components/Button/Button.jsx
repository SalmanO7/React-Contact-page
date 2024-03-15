import React from 'react'


const Button = ({ icon, text, ...rest }) => {

    return (
        <button className="btn primary-btn"
        {...rest}
        >
            {icon}
            {text}
        </button>
    )
}

export default Button