import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetUserRepoQuery } from '../app/appAPI';
import { setRepos } from '../slices/repoSlice';

const ListView = () => {

    const param = useParams();

    const dispatch = useDispatch();
    const { data, error, isLoading } = useGetUserRepoQuery(param.user);

    useEffect(() => {
        dispatch(setRepos(data))
    }, [data])

    const REPO = useSelector((state) => state.repo.repo);

    const [result, setResults] = useState([])
    const [searchField, setSearchField] = useState('')

    useEffect(() => {
        const filtered = REPO?.filter((order) => {
            if (searchField === '') {
                return order;
            } else if (
                order && order?.name?.toLowerCase().includes(searchField)
            ) {
                return order;
            } else if (
                order && order?.description?.toLowerCase().includes(searchField)
            ) {
                return order;
            } else {
                return false
            }
        });
        setResults(filtered)
    }, [searchField, REPO])

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="card">
            <div className="card-body pb-0">
                <div className="row">
                    <div className="col-12 mt-3 mb-3">
                        <div className="card ">
                            <div className="card-header main-search dash-search text-white flex justify-content-center align-item-center web_bg fs-5">
                                <h2 className='fs-3 mb-3'>Repo's of {param?.user}</h2>
                                <input type="text " className='text-lowercase' value={searchField} onChange={(e) => setSearchField(e.target.value)} placeholder="Search repo's...." />
                            </div>
                            <div className="card-body position-relative">
                                <div className="table-responsive cnstr-record product-tbl">
                                    <table className="table table-bordered heading-hvr table-striped">
                                        <thead>
                                            <tr className='web_bg text-white'>
                                                <th className="active whitespace-nowrap">Github repo's</th>
                                                <th className="active whitespace-nowrap">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                result?.length > 0 ?
                                                    result?.map((item) => {
                                                        return (
                                                            <tr key={item.id}>
                                                                <td>{item?.name}</td>
                                                                <td>{item?.description ? item?.description : "-"}</td>
                                                            </tr>
                                                        )
                                                    }) : searchField !== "" ? <div className='p-3 m-2  text-center background'>{`No result found for "${searchField}"`} </div> : <div className='p-3 m-2  text-center background'>{`No result found for "${param.user}"`} </div>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListView