import React from 'react';
import PropTypes from 'prop-types';

const Input = ({className, onChange, value, name, label, error = false, placeholder, type = 'text', autoFocus}) => {
    return (
        <label className={`${className} ${!!error && 'input--error'} input`}>
            <input onChange={(evt) => onChange(evt)} className="input__block"
                   value={value} name={name} placeholder={placeholder} autoFocus={autoFocus} type={type}/>
            <span className="input__label">
              {label || error}
            </span>
        </label>
    );
};

Input.propTypes = {
    className: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.string,
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool
};

export {Input};
