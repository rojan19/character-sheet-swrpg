/**
 * Created by janda on 23.4.2019.
 */
import React from 'react';
import {CharacterConsumer} from '../../providers/CharacterProvider'

export default class Stamina extends React.Component {
    render() {
        return (
            <div>
                <CharacterConsumer>
                    {({currStamina, maxStamina}) => <span className="text-center">Stamina: {currStamina} z {maxStamina}</span>}
                </CharacterConsumer>
            </div>
        )
    }
}

/*
 <button onClick={this.props.raiseStamina} className="btn btn-info col-12"> +1 </button>
 <button onClick={this.props.lowerStamina} className="btn btn-info col-12"> -1 </button>
 */