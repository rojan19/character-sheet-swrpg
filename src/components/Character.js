/**
 * Created by janda on 25.4.2019.
 */
import React, { Component } from 'react';
import CharacterDataService from '../service/CharacterDataService'

export default class CharacterList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "empty name",
            stamina: 999,
            id: 999,
            message: null
        }
        this.deleteCharacterClicked = this.deleteCharacterClicked.bind(this);
    }

    componentDidMount() {
    }

    deleteCharacterClicked() {
        CharacterDataService.deleteCharacter(0).then(
            response => {
                this.setState({
                    message: "Deletion of character ${name} succeeded."
                });
                this.refreshCharacter();
            }
        )
    }

    render() {
        return (
            <div className="container">
                {this.state.message && <div className="alert alert-success">{this.state.message}</div> }
                <h3 className="display-4">Jméno postavy: {this.props.name}</h3>
                {/*<h4><button className="btn btn-danger btn-sm" onClick={() =>
                    this.deleteCharacterClicked()}> DELETE </button></h4>*/}
            </div>
        )
    }
}