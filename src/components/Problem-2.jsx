import React from 'react';
import ModalA from './ModalA';
import ModalB from './ModalB';

const Problem2 = () => {

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button
                        type="button" className="btn btn-lg btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modalA">
                        All Contacts
                    </button>
                    <button
                        type="button" className="btn btn-lg btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modalB">
                        US Contacts
                    </button>
                </div>

            </div>

            {/* <!-- Modal --> */}
            <ModalA />
            <ModalB />
        </div>
    );
};

export default Problem2;