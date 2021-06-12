import React from 'react';
import classNames from 'classnames/bind';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.css';
let clx = classNames.bind(styles);

export default function Layout(props) {
    return (
        <div data-testid='layout' className={clx('layout', 'row')}>
            <Header data-testid='header'/>
            <main data-testid='main' className={clx('main')}>
                <h2 className={clx('heading')}>{props.title}</h2>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

