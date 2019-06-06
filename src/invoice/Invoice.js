import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

import Aqua from '../themes/aqua/Aqua';
import Crimso from '../themes/crimso/Crimso';

class Invoice extends Component {
    render() {
        // const { themeName } = this.props.match.params

        return (
            <div>
                {console.log(this.props.location.state.themeName)}
                <span>INVOICE</span>

                <div className="child-routes">
                    {/* <Route exact path={this.props.match.path} render={() => <Redirect to={`${this.props.match.path}/Crimso`} />} /> */}
                    {/* <Route path={`${this.props.match.path}/${this.props.location.state.themeName}`} component={this.props.location.state.themeName} /> */}
                    <Route path={`${this.props.match.path}/${this.props.location.state.themeName}`} component={Aqua} />
                    {/* <Route path={`${this.props.match.path}/Crimso`} component={Crimso} /> */}
                </div>
            </div>
        );
    }
}

Invoice.propTypes = {

};

export default Invoice;