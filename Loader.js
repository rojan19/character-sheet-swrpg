/**
 * Created by janda on 26.4.2019.
 */
import React from 'react';

import CharacterDataService from '../../service/CharacterDataService';
import {CharacterConsumer} from '../../providers/CharacterProvider';
import  {CharacterContext} from '../../providers/CharacterProvider';

export default class Loader extends React.Component {
    static contextType = CharacterContext;
    constructor(props) {
        super(props);
        this.state = {
            names: []
        }
        this.getAllCharacters();
    }

    getAllCharacters() {
        CharacterDataService.getCharacterNames()
            .then(
                response => {
                    console.log(response);
                    this.setState({
                        names: response.data
                    });

                }

            )
    }

    render() {
        return (
            <div className="container mt-3">
                <CharacterConsumer>
                    {({text, currStamina}) => (
                        <CharacterButtons names={this.state.names} getCharacter={this.context.getCharacter}/>
                        )}
                </CharacterConsumer>
                <CharacterImages names={this.state.names} />
                <img src="/img/chars/party.jpg" onClick={ () => this.context.getCharacter(2)} width="100%" className="m-3"/>
                <img src="/img/chars/1.png" onClick={ () => this.context.getCharacter(1)} width="200px" className="mr-3"/>
                <img src="/img/chars/2.png" onClick={ () => this.context.getCharacter(2)} width="200px"/>
                </div>
        )
    }
}

const CharacterButtons = (props) => (
    <div className="row" >
        <div className="col"></div>
        {Object.values(props.names).map( name => (
            <div className="col" key={name}>
                 <button className="btn btn-info"
                         onClick={() =>
                             props.getCharacter(Object.keys(props.names).find(key => props.names[key] === name))} key={name}>
                    {name}
                 </button>
            </div>
    ))}
        <div className="col"></div>
    </div>
)

const CharacterImages = (props) => (
    <div>
       {/* {Object.keys(props.names).map( id => (
            <img src="/img/chars/"{id}".png" />
        ) )}*/}
    </div>
)

