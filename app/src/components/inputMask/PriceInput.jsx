import React, { Component } from 'react';
import InputMask from 'react-input-mask';


class PriceInput extends Component {
    render() {
        return (
            <InputMask
                {...this.props}
                mask='R$ 99,99'
            />
        )
    }
}

export default PriceInput;