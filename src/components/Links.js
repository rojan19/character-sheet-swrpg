/**
 * Created by janda on 2.5.2019.
 */
import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Sheet from "../components/Sheet"
import Edit from "../components/Edit"


export default class Links extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/">Character sheet</Link></li>
                            <li><Link to="/new">New Character</Link></li>
                        </ul>
                        <Route exact path="/" component={Sheet} />
                        <Route path="/new" component={Edit} />
                    </div>
                </Router>
            </div>
        )
    }
}