import React from 'react';
import classNames from 'classnames/bind';
import styles from './Loder.css';
let clx = classNames.bind(styles);

export default function Loder() {
    return (
        <div data-testid='spinner'>
            <svg className={clx('spinner')} viewBox="0 0 50 50">
                <circle data-testid='circle' className={clx('path')} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </svg>  
        </div>
    )
}
