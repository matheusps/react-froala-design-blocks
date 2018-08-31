import React from 'react';

const NavLink = ({ link, title, isActive }) => (
    <li className={`nav-item ${isActive ? '' : 'active'}`}>
        <a className="nav-link" href={link}>{title}</a>
    </li>
);

export default NavLink;