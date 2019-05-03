/**
 * Created by janda on 3.5.2019.
 */
import React, { Component } from 'react'

const CharacterContext = React.createContext()

//setting an const for exporting the consumer element
export const CharacterConsumer = CharacterContext.Consumer

class CharacterProvider extends Component {
    state = {
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
    }

    render() {
        return (
            <CharacterContext.Provider value={this.state}>      {/* we can set which parts of state will be available here */}
               {this.props.children}
            </CharacterContext.Provider>
        )
    }
}

export default CharacterProvider