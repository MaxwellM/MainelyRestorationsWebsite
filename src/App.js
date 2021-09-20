import React from 'react';
import Navigation from './Navigation.js';
import { Redirect, Route, Switch} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Footer from "./Footer"

import ContactUs from "./Contact-Us"

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/home"/>}/>
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact-us" component={ContactUs} />
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
