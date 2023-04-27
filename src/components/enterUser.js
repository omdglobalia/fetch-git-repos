import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EnterUser = () => {

    const navigate = useNavigate();

    const [userField, setUserField] = useState('')

    const handleFormSubmit = () => {
        navigate(`/list/${userField}`)
    }

    return (
        <div className="card">
            <div className="card-body pb-0">
                <form autoComplete="off" onSubmit={(e) => handleFormSubmit(e)}>
                    <div className="row">
                        <div className="col-12 mt-3 mb-3">
                            <div className="card ">
                                <div className="card-header main-search dash-search text-white flex justify-content-center align-item-center web_bg fs-5">
                                    <h2 className='fs-3 mb-3'>Enter username</h2>
                                </div>
                                <div className="card-body position-relative">
                                    <div className="table-responsive cnstr-record product-tbl">
                                        <table className="table table-bordered heading-hvr table-striped">
                                            <thead>
                                                <tr className='web_bg text-white'>
                                                    <th className="active whitespace-nowrap">Github repo's</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <input type="text" value={userField} onChange={(e) => setUserField(e.target.value)} placeholder="Enter username" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="btn-group mb-3 mt-2 cmn-btn-grp">
                                                            <input type="submit" value={"Search"} className="btn web_bg text-white btn-block mt-2 px-5" />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EnterUser