import React, {Component} from "react";
import "./App.css";
import {BrowserRouter as Router, Link, Redirect, Route} from "react-router-dom";
import NewCharacter from "./components/NewCharacter";
import LoadCharacter from "./components/LoadCharacter";
import EditCharacter from "./components/EditCharacter";
import Loader from "./components/charSheet/Loader";
import {CharacterProvider} from "./providers/CharacterProvider";

class App extends Component {
    constructor(props) {
        super(props);
        this.raiseStamina = this.raiseStamina.bind(this);
        this.lowerStamina = this.lowerStamina.bind(this);

        this.state = {
            toCharSheet: false,
        };
    }




    raiseStamina() {
        if (this.state.currStamina < this.state.maxStamina) {
            this.setState((state, props) => ({
                currStamina: state.currStamina + 1
            }))
        }
    }

    lowerStamina() {
        if (this.state.currStamina > 0) {
            this.setState((state, props) => ({
                currStamina: state.currStamina - 1
            }))
        }
    }

    handleImgClick() {
       this.setState( () => ({
           toCharSheet: true,
       }))
    }

    render() {
        return (
            <div className="App container-fluid">
                <CharacterProvider>
                    <Loader/>
                </CharacterProvider>
                <Router>

                        <div>
                           <Link to="/new">New Character</Link>
                           <Link to="/char">Load Character</Link>
                            <Route exact path="/" component={App} />
                            <Route path="/new" component={NewCharacter} />
                            <Route path="/display" component={LoadCharacter} />
                            <Route path="/edit" component={EditCharacter} />
                        </div>
                </Router>
            </div>
        );
    }
}


export default App;