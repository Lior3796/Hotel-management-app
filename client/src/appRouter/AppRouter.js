import { Register } from '../components/features/Register/Register';
import { CardsContainer } from '../components/features/cardsContainer/CardsContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from '../components/features/login/Login';


export const AppRouter = () => {
    return (
        <>

            <Routes>


                <Route path="/Hotel-management-app" exact element={<Register />} />
                <Route path="/Hotel-management-app/login" exact element={<Login />} />
                <Route path="/Hotel-management-app/homepage" exact element={<CardsContainer />} />


            </Routes>
        </>

    )
}
