import React from 'react'
import classNames from 'classnames/bind';
import styles from './Header.css';
let clx = classNames.bind(styles);

function Header(props) {
    return (
        <header {...props}>
            <div className={clx('header')}>
                <h1>University List App</h1>
            </div>
        </header>
    )
}

export default Header;
