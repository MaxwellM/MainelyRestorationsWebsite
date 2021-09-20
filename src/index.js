import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/react-responsive-carousel/lib/styles/carousel.css';
import App from './ComingSoon/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import "../node_modules/normalize.css/normalize.css"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename="/">
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
