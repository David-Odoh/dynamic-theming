import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Aqua.css';
import VariantSwitcher from './VariantSwitcher'

class Aqua extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { stylePath: '/src/themes/aqua/default.css' };
    // }

    // handleButtonClick() {
    //     this.setState({ stylePath: 'black.css' });
    // }
    render() {
        return (
            <div className="Aqua">
                <VariantSwitcher />
                <span>Aqua</span>
                <div className="square"></div>
                {/* <button type="button" onClick={this.handleButtonClick.bind(this)}>Click to update stylesheet</button> */}
            </div>
        );
    }
}

Aqua.propTypes = {

};

export default Aqua;