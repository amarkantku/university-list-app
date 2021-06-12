import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import styles from './Pagination.css';

import usePaginationHook from '../../Hook/usePaginationHook';
import { setPaginationMetaData } from '../../actions/university';
let clx = classNames.bind(styles);

function Pagination(props) {
    const dispatch = useDispatch();
    const [pageDetails, setCurrentPage] = usePaginationHook(props);
    
    const onPageChanged = (event) => {
        setCurrentPage(Number(event.target.dataset.pageNo));
    }
    
    useEffect(() => {
        if(Object.keys(pageDetails).length) {
            dispatch(setPaginationMetaData(pageDetails));
        }
    }, [dispatch, pageDetails]);

    return (
        <div className="pagination" data-testid='pagination'>
            <div className={clx(pageDetails.currentPage === 1 && 'disabled', 'page')}><span data-page-no={1} data-testid='first-page' onClick={onPageChanged}>First</span></div>
            <div className={clx(pageDetails.currentPage === 1 && 'disabled', 'page')}><span data-page-no={pageDetails.currentPage === 1 ? pageDetails.currentPage : pageDetails.currentPage - 1} onClick={onPageChanged}>&laquo;</span></div>
            {pageDetails && pageDetails.pages && pageDetails.pages.map((page, index) =>
                <div key={index} className={clx(pageDetails.currentPage === page ? 'active' : '', 'page')}>
                    <span data-page-no={page} onClick={onPageChanged}>{page}</span>
                </div>
            )}
            <div className={clx(pageDetails.currentPage === pageDetails.totalPages && 'disabled', 'page')}><span data-page-no={pageDetails.currentPage === pageDetails.totalPages ? pageDetails.currentPage : (pageDetails.currentPage + 1)} onClick={onPageChanged}>&raquo;</span></div>
            <div className={clx(pageDetails.currentPage === pageDetails.totalPages && 'disabled', 'page')}><span data-page-no={pageDetails.totalPages} onClick={onPageChanged}>Last</span></div>
        </div>
    )
}
export default Pagination;
