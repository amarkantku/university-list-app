import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.css';
import { ReactComponent as SearchSvg } from '../../svg/search.svg';
let clx = classNames.bind(styles);

export default function Search(props) {
    const [inputValue, setValue] = useState('');
    const onChange = (e) => {
        e.preventDefault();
        setValue(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault();
        props.onClickSearch(inputValue);
        setValue('');
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            props.onClickSearch(inputValue);
            setValue('');
        }
    }
    return (
        <div data-testid='container' className={clx('container')}>
            <div data-testid='search-box' className={clx('search-box')}>
                <input data-testid='search-input' onKeyDown={handleKeyDown} onChange={onChange} value={inputValue} className={clx('search-input')} type="text" placeholder="Search.." />
                <button data-testid='search-button' onClick={submit} className={clx('search-button')}><SearchSvg /></button>
            </div>
        </div>
    )
}
