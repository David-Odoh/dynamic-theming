import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Aqua.css';
// import './black.css';
// import './default.css';

class Aqua extends Component {
    constructor(props) {
        super(props);
        // this.state = { stylePath: './default.css' };
        this.default();
    }

    default() {
        // var css = require('./default.css'),
        var link = document.createElement('link'),
            head = document.getElementsByTagName('head')[0],
            tmp;
        link.rel = 'stylesheet';

        var tmp = link.cloneNode(true);
        tmp.href = 'src/themes/aqua/default.css';
        head.appendChild(tmp);
    }

    handleButtonClick() {
        this.setState({ stylePath: 'black.css' });
    }
    render() {
        return (
            <div className="Aqua">
                {/* <link rel="stylesheet" type="text/css" href={this.state.stylePath} /> */}
                <span>Aqua</span>

                {/* <button type="button" onClick={this.handleButtonClick.bind(this)}>Click to update stylesheet</button> */}
            </div>
        );
    }
}

Aqua.propTypes = {

};

export default Aqua;