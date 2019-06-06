import React from 'react';

const VariantSwitcher = () => {
    let customCss = require('./default.css');

    //   if (!customCss == ) {
    //     customCss = '/black.css';
    //   }
    return (
        <link rel="stylesheet" type="text/css" href={customCss} />
    );
};

export default VariantSwitcher;