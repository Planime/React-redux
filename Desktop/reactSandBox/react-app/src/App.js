import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"
import {Route, BrowserRouter, Link, Switch} from "react-router-dom";
import PageOne from "./Components/PageOne";
import PageTwo from "./Components/PageTwo";
import PageThree from "./Components/PageThree";
import PageFour from "./Components/PageFour";


function App() {

    const [isAuth, setAuth] = useState(false);

    function isAuthOnChange(e) {
        console.log(e);
        setAuth(!isAuth)
    };


    return (
        <>
            <ul className="navigation-header">
                <li className="dsa">
                    <Link to="/pageone">Page One</Link>
                </li>
                <li>
                    <Link to="/pagetwo">Page Two</Link>
                </li>
                <li>
                    <Link to="/pagethree">Page Three</Link>
                </li>
                <li>
                    <Link to="/pagefour">Page Four</Link>
                </li>

            </ul>
            <button
                onClick={isAuthOnChange}
            >Auth
            </button>

            <Switch>

                <Route path="/pageone">
                    <PageOne/>
                </Route>

                <Route path="/pagetwo">
                    <PageTwo/>
                </Route>

                <Route path="/pagethree">
                    <PageThree isAuth={isAuth}/>
                </Route>

                <Route path="/pagefour">
                    <PageFour isAuth={isAuth} text='hello text from props'/>
                </Route>

            </Switch>

        </>


    );
}

export default App;
