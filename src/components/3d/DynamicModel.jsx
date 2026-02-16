import React from 'react';
import ChairModel from './ChairModel';
import SofaModel from './SofaModel';
import LampModel from './LampModel';
import CoffeeTableModel from './CoffeeTableModel';

const DynamicModel = ({ config, ...props }) => {
    if (!config) return <ChairModel {...props} />;

    switch (config.type) {
        case 'chair':
            return <ChairModel {...config.props} {...props} />;
        case 'sofa':
            return <SofaModel {...config.props} {...props} />;
        case 'lamp':
            return <LampModel {...config.props} {...props} />;
        case 'table':
            return <CoffeeTableModel {...config.props} {...props} />;
        default:
            return <ChairModel {...props} />;
    }
};

export default DynamicModel;
