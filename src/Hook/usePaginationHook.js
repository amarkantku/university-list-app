import { useState, useEffect, useCallback } from 'react';

const usePaginationHook = (props) => {
    const { meta } = props;
    const pageSize = meta.pageSize
    const totalRecords = meta.totalRecords;
    const [currentPage, setCurrentPage] = useState(meta.currentPage);
    const [pageDetails, setPageDetails] = useState(meta);
    const totalPages = Math.ceil(totalRecords/pageSize);
    

    const memoizedCallback = useCallback((currentPage) => {
        currentPage = currentPage || 1;
        const totalPages = Math.ceil(totalRecords / pageSize);

        let startPage = 1;
        let endPage = 0;
        if (totalPages <= 10) {
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalRecords - 1);

        // create an array of pages to ng-repeat in the pager control
        const pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        // return object with all pager properties required by the view
        return {
            totalRecords,
            currentPage,
            pageSize,
            totalPages,
            startPage,
            endPage,
            startIndex,
            endIndex,
            pages
        };
    }, [pageSize, totalRecords]);

    useEffect(() => {
        if (currentPage < 0 || currentPage > totalPages) {
            return;
        }
        setPageDetails(memoizedCallback(currentPage));
    }, [currentPage, memoizedCallback, setPageDetails, pageSize, totalPages, totalRecords])

    return [ pageDetails, setCurrentPage];
}

export default usePaginationHook;