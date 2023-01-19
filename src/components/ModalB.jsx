import React, { useEffect, useState } from 'react';

const ModalB = () => {


    const [usContacts, setUsContacts] = useState([]);
    console.log(usContacts)

    useEffect(() => {
        fetch('https://contact.mediusware.com/api/contacts/')
            .then(response => response.json())
            .then(data => setUsContacts(data.results))
            .catch(error => console.log(error));
    }, []);

    return (
        <div class="modal fade modal-dialog modal-dialog-centered" id="modalB" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">United States Contacts</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {
                            usContacts?.filter(value => {
                                if (value.country.name === "United States") {
                                    return value;
                                }
                            }).map(contact => <>
                                <div>
                                    <p>Country: {contact.country.name}</p>
                                    <p>Phone: Number: {contact.phone}</p>
                                </div>
                            </>)
                        }
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalB;