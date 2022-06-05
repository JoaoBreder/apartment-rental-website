import React, { Component } from 'react';
import './Button.css';


class Button extends Component {
    render() {
        return (
            <div className='botao'>
                <button {...this.props}>
                    {this.props.title}
                </button>
            </div>
        )
    }
}

export default Button;