import React, { Component } from 'react';
import './Button.css';


class Button extends Component {
    render() {
        return (
            <div className='botao'>
                <button onClick={this.props.onClick}>
                    {this.props.title}
                </button>
            </div>
        )
    }
}

export default Button;