import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Loder from '../common/Loader/Loder';

import styles from './Table.css';
let clx = classNames.bind(styles);

const renderTableHead = (tHead) => {
    return tHead.map(name => <th key={name}>{name}</th>)
}

const renderTableBody = (tBodyData) => {
    return tBodyData.map(university => {
        return (<tr key={university.id}>
            <td>{university.id + 1}</td>
            <td><Link data-testid={`row-name-${university.id}`} className={clx('hot-link')} to={location => ({...location, pathname: `/university/${university.name}`})}>{university.name}</Link></td>
            <td>{university['state-province']}</td>
            <td>{university.country}</td>
            <td>{university.alpha_two_code}</td>
            <td><a data-testid={`row-website-${university.id}`} href={university.web_pages[0]} target='_blank' rel="noopener noreferrer">{university.web_pages[0]}</a></td>
        </tr>)
    })
}

function Table(props) {
    const { tHead, tBodyData, isLoading } = props;
    const isRecordFound = tBodyData.length > 0;
    return (
        <div className={clx('table-wrapper')}>
            <table className={clx('table')}>
                <thead className={clx('thead')}>
                    <tr>{renderTableHead(tHead)}</tr>
                </thead>
                <tbody className={clx('tbody')}>
                    {!isRecordFound && isLoading && (<tr><td className={clx('clear')}><Loder /></td></tr>)}
                    {isRecordFound && !isLoading && renderTableBody(tBodyData)}
                </tbody>
            </table>
            {!isRecordFound && !isLoading && (<div className={clx('no-record')}><p>No Record Found.</p></div>)}
        </div>
    )
}
export default Table;
