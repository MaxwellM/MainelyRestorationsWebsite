import React from 'react';

import Preloader from "./Preloadder";
import Timer from "./Timer";
import "./Styles.css";

function App() {
    return (
        <div className="App">
            <div className="container">
                <h1>
                    Mainely Restorations Website
                    <br />
                    Coming Soon
                </h1>
                <Timer />
                <Preloader />
            </div>
        </div>
    );
}

export default App;