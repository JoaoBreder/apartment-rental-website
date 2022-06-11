import React, { Component } from 'react';
import InputMask from 'react-input-mask';


class CpfInput extends Component {
    render() {
        return (
            <InputMask
                {...this.props}
                mask='999.999.999-99'
            />
        )
    }
}

export default CpfInput;