/**
 * Created by janda on 3.5.2019.
 */
import React, {Component} from "react";
import CharacterDataService from "../service/CharacterDataService";

// context is exposed to enable using contextType
export const CharacterContext = React.createContext()

export class CharacterProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "test, test",
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
            characters: [],
            getCharacter: this.getCharacter,
        }
    }

    getCharacter = (id) => {
        console.log("Getting character...")
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


    render() {
        return (
            <CharacterContext.Provider
                value={this.state}>
               {
                   this.props.children
               }
            </CharacterContext.Provider>
        )
    }
}

//setting an const for exporting the consumer element
export const CharacterConsumer = CharacterContext.Consumer
