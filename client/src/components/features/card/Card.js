import { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/style.css";
import { deleteEmployee } from '../../../services/service';

export const Card = ({ name, number, capacity, headline }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="card-container">
            <div className="p-5">
                <a href="#">
                    <h5 testId="headline" className="card-name">{headline} rooms</h5>
                </a>
                {number && <p testId="number" className="card-details">Number: {number}</p>}
                {name && <p testId="name" className="card-details">name: {name}</p>}

                {capacity && <p testId="capacity" className="card-details">Capacity: {capacity}</p>}
            </div>

            <ToastContainer />

        </div>




    )
}


