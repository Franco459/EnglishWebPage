import React from 'react'
import Navegacion from './components/Navegacion';
import Home from './views/home/Home';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Navegacion />
                <Home />
            <Footer />
        </div>
    )
}

export default App