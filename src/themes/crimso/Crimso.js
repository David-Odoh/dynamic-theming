import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Crimso.css';
// import './pink.css';
// import './blue.css';
// import './default.css';
import './default.css';
class Crimso extends Component {
    constructor(props) {
        super(props);
        this.state = { stylePath: 'style1.css' };
    }

    handleButtonClick() {
        this.setState({ stylePath: 'style2.css' });
    }

    render() {
        return (
            <div className="Crimso">
                <span>Crimso</span>
                <div className="square"></div>
            </div>
        );
    }
}

Crimso.propTypes = {

};

export default Crimso;