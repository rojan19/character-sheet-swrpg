/**
 * Created by janda on 26.4.2019.
 */
import React, { Component } from 'react';
import CharacterDataService from '../service/CharacterDataService';

export default class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        }
        this.getAllNames();
    }

    getAllNames() {
        CharacterDataService.getCharacterNames()
            .then(
                response => {
                    console.log(response);
                    this.setState({
                        characters: response.data
                    });
                }
            )
    }

    render() {
        return (
            <div className="row mt-3">
                <div className="col"></div>
                {
                    this.state.characters.map( (name) => {return(
                        <div className="col-1">
                            <button className="btn btn-info" onClick={() => this.props.getCharacter(name)} key={name}>
                            {name}
                            </button>
                        </div>
                    )})
                }
                <div className="col"></div>

            </div>
        )
    }
}