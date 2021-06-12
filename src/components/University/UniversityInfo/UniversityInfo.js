import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { getUniversityDetails, setUniversityDetails } from '../../../actions/university';
import Layout from '../../common/Layout/Layout';
import Loder from '../../common/Loader/Loder';
import styles from './UniversityInfo.css';
let clx = classNames.bind(styles);

function UniversityInfo(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const { name } = useParams();
    const university = useSelector(state => state.university.universityInfo);
    const isLoading = useSelector(state => state.university.isLoading)

    useEffect(() => {
        dispatch(getUniversityDetails(name));
        return () => dispatch(setUniversityDetails({}));
    }, [dispatch, name])

    const goBack = () => {
        history.goBack();
    }

    return (
        <div className={clx('row')}>
            <Layout title={'University Info'}>
                {Object.keys(university).length > 0 && !isLoading && (
                    <div>
                        <div className={clx('details')}>
                            <ul className={clx('info')}>
                                <li><b>Name:</b><span className={clx('mg-15')}>{university.name}</span></li>
                                <li><b>Country:</b><span className={clx('mg-15')}>{university.country}</span></li>
                                <li><b>State Province:</b><span className={clx('mg-15')}>{university['state-province'] || 'N/A'}</span></li>
                                <li><b>Country Code:</b><span className={clx('mg-15')}>{university.alpha_two_code || ''}</span></li>
                                <li><b>Web Page:</b><span className={clx('mg-15')}>{university.web_pages[0] || ''}</span></li>
                            </ul>
                        </div>
                        <div className={('back')}>
                            <button className={clx('back-link')} onClick={goBack}>Back</button>
                        </div>
                    </div>
                )}
                {isLoading && <Loder />}
            </Layout>    
        </div>
    )
}

export default UniversityInfo;
