import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Problem1 = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [show, setShow] = useState('all');

    const [feedbacks, setFeedbacks] = useState([]);
    // console.log(feedbacks)

    const handleClick = (val) => {
        setShow(val);
    }

    const onSubmit = data => {
        const feedback = {
            name: data.name,
            status: data.status.toLowerCase(),
        }
        console.log(feedback)
        setFeedbacks([...feedbacks, feedback])
    }

    const sortedData = feedbacks.sort((a, b) => {
        if (a.status === b.status) return 0;
        return (a.status === 'active') ? -1 : (b.status === 'active') ? 1 : (a.status === 'completed') ? -1 : (b.status === 'completed') ? 1 : 0;
    });

    // console.log("sort", sortedData)

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleSubmit(onSubmit)} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" {...register("name")} required />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" {...register("status")} required />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <table className="table table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            {
                                show === 'all' &&
                                <tbody>
                                    {
                                        sortedData.map(feed =>

                                            <tr>
                                                <td>{feed.name}</td>
                                                <td>{feed.status}</td>
                                            </tr>)
                                    }

                                </tbody>
                            }

                            {
                                show === 'active' &&

                                <tbody>
                                    {
                                        feedbacks.filter(value => {
                                            if (value.status === "active") {
                                                return value;
                                            }
                                        }).map(feed =>
                                            <tr>
                                                <td>{feed.name}</td>
                                                <td style={{ color: "green" }}>{feed.status}</td>
                                            </tr>)
                                    }

                                </tbody>
                            }

                            {
                                show === 'completed' &&
                                <tbody>
                                    {
                                        feedbacks.filter(value => {
                                            if (value.status === "completed") {
                                                return value;
                                            }
                                        }).map(feed =>
                                            <tr>
                                                <td>{feed.name}</td>
                                                <td style={{ color: "blue" }}>{feed.status}</td>
                                            </tr>)
                                    }

                                </tbody>
                            }
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Problem1;