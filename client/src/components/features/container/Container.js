import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { RoomsContext } from '../../../context/rooms';
import { AppRouter } from '../../../appRouter/AppRouter';

export const Container = () => {

    return (
        <RoomsContext>
            <main className="container text-center " >
                <Header />
                <AppRouter />
                <Footer />
            </main>
        </RoomsContext>
    )
}
