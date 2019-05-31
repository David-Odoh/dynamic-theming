import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import App from './App';
import Invoice from './invoice/Invoice';
import ProvoiceStore from './provoice-store/ProvoiceStore';

const Routes = () => (
    <div>
        <Route exact path="/" render={() => <Redirect to='/store' />} />
        <Route exact path="/store" component={ProvoiceStore} />
        <Route path="/invoice" component={Invoice} />
    </div >
);

export default Routes;