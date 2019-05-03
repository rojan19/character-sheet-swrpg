import React, {Component} from "react";
import "./App.css";
import {BrowserRouter as Router, Link, Redirect, Route} from "react-router-dom";
import Sheet from "./components/Sheet";
import Edit from "./components/Edit";
import Test from "./components/Test"
import CharacterDataService from "./service/CharacterDataService";

class App extends Component {
    constructor(props) {
        super(props);
        this.raiseStamina = this.raiseStamina.bind(this);
        this.lowerStamina = this.lowerStamina.bind(this);
        this.getCharacter = this.getCharacter.bind(this);

        this.state = {
            toCharSheet: false,
        };
    }


    getCharacter(id) {
        CharacterDataService.getCharacterById(id)
            .then(
                response => {
                    console.log(response);
                    this.setState({
                        name: response.data.username,
                        maxStamina: response.data.stamina,
                        currStamina: response.data.stamina,
                        id: response.data.id,
                        abilities: response.data.abilities,
                        skills: response.data.skills
                    });
                }
            )
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
        if (this.state.toCharSheet === true) {
            return (
                <Router>
                <Redirect to="/components/sheet" />
                </Router>)
        }
        return (
            <div className="App container-fluid">
                <Router>
                    <div>
                       <Link to="/new">New Character</Link>
                       <Link to="/char">Edit</Link>
                        <Route exact path="/new" component={Sheet} />
                        <Route path="/char" component={Edit} />
                        <Route path="/sheet" component={Test} />
                    </div>

                </Router>

            </div>
        );
    }
}


export default App;