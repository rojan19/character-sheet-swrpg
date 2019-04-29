import React, {Component} from 'react';
import './App.css';
import Stamina from "./components/Stamina"
import Abilities from "./components/Abilities";
import Skills from "./components/Skills";
import Character from "./components/Character"
import Loader from "./components/Loader"
import CharacterDataService from './service/CharacterDataService'


class App extends Component {
    constructor(props) {
        super(props);
        this.raiseStamina = this.raiseStamina.bind(this);
        this.lowerStamina = this.lowerStamina.bind(this);
        this.refreshCharacter = this.refreshCharacter.bind(this);

        this.state = {
            name: "no-name",
            id: "999",
            currStamina: 0,
            maxStamina: 0,

            abilities: {
                "bra": 0,
                "agi": 0,
                "int": 0,
                "cun": 0,
                "will": 0,
                "pre": 0
            },

            skills: [],
        };
    }

    refreshCharacter(characterName) {
        CharacterDataService.getCharacterByName(characterName)
            .then(
                response => {
                    console.log(response);
                    this.setState({
                        name: response.data[0].username,
                        maxStamina: response.data[0].stamina,
                        currStamina: response.data[0].stamina,
                        id: response.data[0].id,
                        abilities: response.data[0].abilities,
                        skills: response.data[0].skills
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

    render() {
        return (
            <div className="App container-fluid">
                <Character name={this.state.name} />
                <Stamina currStamina={this.state.currStamina} maxStamina={this.state.maxStamina}
                         raiseStamina={this.raiseStamina} lowerStamina={this.lowerStamina}/>
                <Abilities abilities={this.state.abilities}/>
                <Skills skills={this.state.skills} abilities={this.state.abilities}/>
                <Loader getCharacter={this.refreshCharacter}/>
            </div>
        );
    }
}

export default App;