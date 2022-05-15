import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { RoomsContext } from '../../../context/rooms';
import { AppRouter } from '../../../appRouter/AppRouter';
import { BrowserRouter as Router, } from 'react-router-dom';


export const Container = () => {

    return (
        <Router>

            <RoomsContext>
                <main className="container text-center " >
                    <AppRouter />
                </main>
            </RoomsContext>
        </Router>
    )
}
