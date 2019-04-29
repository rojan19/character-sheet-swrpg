/**
 * Created by janda on 24.4.2019.
 */
import React, { Component } from 'react';
import CharacterDataService from '../service/CharacterDataService'

const CHARACTER = 'Ailin'

export default class CharacterList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            message: null
        }
        this.refreshCharacters = this.refreshCharacters.bind(this);
    }

    componentDidMount() {
        this.refreshCharacters();
    }

    refreshCharacters() {
        CharacterDataService.getCharacterByName('Ailin')
            .then(
                response => {
                    this.setState({characters: response.data});
                }
            )
    }

    render() {
        return (
            <div className="container">
                <h3>Characters</h3>
                <div className="row">
                    <div className="col">
                        Name
                    </div>
                    <div clas="col">
                        Stamina
                    </div>
                </div>

                <div className="row">
                    {this.state.characters.map(
                        character =>
                            <div className="row">
                                <div className="col-2">{character.username}</div>
                                <div className="col-1">{character.stamina}</div>
                            </div>
                    )}
                </div>
            </div>
        )
    }
}
