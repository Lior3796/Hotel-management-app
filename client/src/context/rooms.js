import { createContext, useState, useContext, useEffect } from "react";
import { getRooms, getFamilies, getCouples } from "../services/service";
import { isTokenExist } from "../utills/isTokenExist";
export const Rooms = createContext([]);

export const RoomsContext = ({ children }) => {
    const [availablesRooms, setAvailablesRooms] = useState([]);
    const [familesRooms, setFamilesRooms] = useState([]);
    const [couplesRooms, setCouplesRooms] = useState([]);
    const [cookies, setCookies] = useState({ userRole: "", token: "" });

    const setDataToFamilesRooms = async () => {
        const dataFromServer = await getFamilies();
        setFamilesRooms(dataFromServer);
    }

    const setDataToAvailablesRooms = async () => {
        const dataFromServer = await getRooms();
        setAvailablesRooms(dataFromServer);
    }

    const setDataToCouplesRooms = async () => {
        const { token, userRole } = isTokenExist();

        if (!token || !userRole) return null;
        setCookies({ token, userRole });
        const dataFromServer = await getCouples(token, userRole);

        if (dataFromServer === "Token isn't valid") return;

        setCouplesRooms(dataFromServer);
    }

    useEffect(() => {
        setDataToAvailablesRooms();
        setDataToFamilesRooms();
        setDataToCouplesRooms();
    }, []);


    return (
        <Rooms.Provider value={{
            availablesRooms, setAvailablesRooms,
            familesRooms, setFamilesRooms,
            couplesRooms, setCouplesRooms,
            cookies
        }}>
            {children}
        </Rooms.Provider>
    );
}
