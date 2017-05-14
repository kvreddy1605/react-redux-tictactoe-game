import React, { Component, PropTypes } from 'react';

export default class Button extends Component{
  render(){
    const {type, autoFocus, disabled, name, value, onClick, className, id} = this.props;
    return(
      <button
        type={type}
        autoFocus={autoFocus}
        disabled={disabled}
        name={name}
        value={value}
        onClick={onClick}
        className={className}
        id={id}
        >
        {this.props.children}
      </button>
    );
  }
}

const {string, bool, func} = PropTypes;

Button.propTypes = {
  type: string,
  autoFocus: bool,
  disabled: bool,
  name: string,
  value: string,
  onClick: func,
  className: string,
  id: string
};
