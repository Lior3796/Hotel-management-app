import { Register } from '../components/features/Register/Register';
import { CardsContainer } from '../components/features/cardsContainer/CardsContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from '../components/features/login/Login';

export const AppRouter = () => {
    return (
        <Router>
            <>
                <Routes>
                    <Route path="/" exact element={<Register />} />
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/homepage" exact element={<CardsContainer />} />
                </Routes>
            </>
        </Router >
    )
}
