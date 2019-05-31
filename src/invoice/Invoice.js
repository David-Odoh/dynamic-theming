import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

import Aqua from '../themes/aqua/Aqua';
import Crimso from '../themes/crimso/Crimso';

class Invoice extends Component {
    render() {
        return (
            <div>
                <span>INVOICE</span>

                <div className="child-routes">
                    <Route exact path={this.props.match.path} render={() => <Redirect to={`${this.props.match.path}/crimso`} />} />
                    <Route path={`${this.props.match.path}/aqua`} component={Aqua} />
                    <Route path={`${this.props.match.path}/crimso`} component={Crimso} />
                </div>
            </div>
        );
    }
}

Invoice.propTypes = {

};

export default Invoice;