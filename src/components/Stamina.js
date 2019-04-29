/**
 * Created by janda on 23.4.2019.
 */
import React, { Component } from 'react';

export default class Stamina extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.raiseStamina} className="btn btn-info col-12"> +1 </button>
                <span className="text-center">Stamina: {this.props.currStamina} z {this.props.maxStamina}</span>
                <button onClick={this.props.lowerStamina} className="btn btn-info col-12"> -1 </button>
            </div>
        )
    }
}