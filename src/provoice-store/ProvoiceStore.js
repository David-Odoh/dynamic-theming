import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import Aqua from "../themes/aqua/Aqua"
import Crimso from '../themes/crimso/Crimso'

class ProvoiceStore extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <div className="aqua">
                            <Link to="invoice/aqua">
                                <span>Aqua</span>
                            </Link>
                            <select name="aqua" id="aqua">
                                <option value="default">Default</option>
                                <option value="black">Black</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div className="crimso">
                            <Link to="invoice/crimso">
                                <span>Crimso</span>
                            </Link>
                            <select name="crimso" id="crimso">
                                <option value="default">Default</option>
                                <option value="blue">Blue</option>
                                <option value="pink">Pink</option>
                            </select>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

ProvoiceStore.propTypes = {

};

export default ProvoiceStore;