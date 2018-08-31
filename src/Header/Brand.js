import React from 'react';

const Brand = ({ link, logo, height }) => (
    <div>
        <a href={link}>
            <img src={logo} height={height} alt="brand" />
        </a>
    </div>
);

export default Brand;