import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import isEmpty from 'lodash/isEmpty';
import Layout from '../common/Layout/Layout';
import Table from '../Table/Table';
import styles from './UniversityList.css';
import Pagination from '../Pagination/Pagination'
import Search from '../Search/Search';
import usePrevious from '../../Hook/usePrevious';
import { getUniversityList, resetStore } from '../../actions/university';
let clx = classNames.bind(styles);

const tHead = ['S.No', 'Name', 'State Province' , 'Country', 'Country Code', 'Website'];
function UniversityList() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('India')
    const list = useSelector(state => state.university.universityList);
    const isLoading = useSelector(state => state.university.isLoading)
    const meta = useSelector(state => state.university.pagination.meta)
    const data = useSelector(state => state.university.pagination.data)
    const prevSearchTerm = usePrevious(searchTerm)

    useEffect(() => {
        if (prevSearchTerm && searchTerm && prevSearchTerm !== searchTerm) {
            dispatch(resetStore());
            dispatch(getUniversityList(searchTerm))
        } else if(!prevSearchTerm && searchTerm && isEmpty(list)) {
            dispatch(getUniversityList(searchTerm))
        }
    }, [dispatch, list, prevSearchTerm, searchTerm]);

    const onChange = (searchTerm) => {
        setSearchTerm(searchTerm)
    }

    return (
        <div className={clx('row')}>
            <Layout title={'University List'}>
                <div>
                    <Search onClickSearch={onChange}/>
                    <div className={clx('container')}>
                        <Table tHead={tHead} tBodyData={data} isLoading={isLoading}/>
                        {(list.length > 0 && !isLoading) && <Pagination meta={meta} />}
                    </div>
                </div>
            </Layout>    
        </div>
    )
}

export default UniversityList;
