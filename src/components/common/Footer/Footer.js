import React from 'react'

import classNames from 'classnames/bind';
import styles from './Footer.css';
let clx = classNames.bind(styles);

function Footer() {
    return (
        <footer data-testid='footer'>
            <div className={clx('footer')}>
                Footer
            </div>
        </footer>
    )
}

export default Footer;
