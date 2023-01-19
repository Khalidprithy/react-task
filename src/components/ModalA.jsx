import React from 'react';
import { useState, useEffect } from 'react';

const ModalA = () => {

    const [contacts, setContacts] = useState([]);
    console.log(contacts)

    useEffect(() => {
        fetch('https://contact.mediusware.com/api/contacts/')
            .then(response => response.json())
            .then(data => setContacts(data.results))
            .catch(error => console.log(error));
    }, []);


    return (
        <div class="modal fade modal-dialog modal-dialog-centered modal-dialog-scrollable" id="modalA" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">All contacts</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {
                            contacts?.map(contact => <>
                                <div>
                                    <p>Country: {contact.country.name}</p>
                                    <p>Phone: Number: {contact.phone}</p>
                                </div>
                            </>)
                        }
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalA;