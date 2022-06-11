import React, { Component } from 'react';
import InputMask from 'react-input-mask';


class PhoneInput extends Component {
    render() {
        return (
            <InputMask
                {...this.props}
                mask='(99) 99999-9999'
            />
        )
    }
}

export default PhoneInput;