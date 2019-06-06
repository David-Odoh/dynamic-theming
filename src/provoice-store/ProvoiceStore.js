import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom'

import Aqua from "../themes/aqua/Aqua"
import Crimso from '../themes/crimso/Crimso'

import data from "./data.json"

class ProvoiceStore extends Component {
    // componentWillMount() {
    //     console.log(data);
    // }
    render() {
        return (
            <div>
                <ul>
                    {data.map((template, id) =>
                        <li key={id}>
                            <div className="">
                                <Link to={{
                                    pathname: `invoice/${template.themeName}`,
                                    state: template
                                }}>
                                    <span>{template.themeName}</span>
                                </Link>
                                <select name={template.themeName} id={template.themeName}>
                                    {
                                        template.variant.map((variant, id2) => <option key={id2} value={variant.name}>{variant.name}</option>)
                                    }
                                    {
                                        console.log(template)
                                    }
                                </select>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

ProvoiceStore.propTypes = {

};

export default ProvoiceStore;