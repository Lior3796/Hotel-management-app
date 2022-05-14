import { useState, useEffect, Suspense, useContext } from 'react';
import { Card } from '../card/Card';
import { getRooms, checkStatus, getFamilies } from '../../../services/service';
import { Rooms } from '../../../context/rooms';
import "../../styles/style.css";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


export const CardsContainer = () => {
    const { availablesRooms } = useContext(Rooms);
    const { familesRooms } = useContext(Rooms);
    const { couplesRooms } = useContext(Rooms);
    const { cookies } = useContext(Rooms);

    const checkUserPremission = (token) => {
        const msg = checkStatus(token);
        if (msg === "Invalid token" || msg === "Access denied") {
            toast("Invalid token! cannot get status");
            return;
        }
        toast(msg);
    }



    return (


        <Suspense fallback={(<div>Load...</div>)}>
            <div className="grid grid-cols-3 grid-rows-1 gap-3 mt-4">
                <span className="header-span">Availables rooms</span>
                {availablesRooms?.map((room) => {
                    return <Card key={room._id} headline="availables" number={room.number}
                        capacity={room.capacity}
                    />
                })}
            </div>
            <div className="grid grid-cols-3 grid-rows-1 gap-1 mt-2">
                <span className="header-span">Familes rooms</span>

                {familesRooms?.map((family) => {
                    return <Card key={family._id} headline="families" number={family.number} name={family.name}

                    />
                })}
            </div>

            {cookies.userRole !== "Recepetion" && <div className="grid grid-cols-3 grid-rows-1 gap-1 mt-2">
                <span className="header-span">Couples rooms</span>

                {couplesRooms?.map((couple) => {
                    return <Card key={couple._id} headline="Couples" number={couple.number}

                    />
                })}
            </div>}

            <span className="header-span">Only Owner had premission to get status: </span>
            {cookies.userRole === "Owner" ?
                <button onClick={() => checkUserPremission(cookies.token)} className="modal-btn mt-2" type="button" data-modal-toggle="authentication-modal">
                    Get status
                </button> : <span className="header-span">Access deniend</span>
            }

            <ToastContainer />

        </Suspense>

    )

}




