/**
 * Created by janda on 10.4.2019.
 */
import React, { Component } from 'react';

export default class Abilities extends React.Component {
    render() {
        /*const abilities = Object.keys(this.props.abilities)*/
        const values = Object.values(this.props.abilities)

        return (
            <div className="container text-center">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">Sil {this.props.abilities["bra"]}</div>
                    <div className="col">Obr {this.props.abilities["agi"]}</div>
                    <div className="col">Int {this.props.abilities["int"]}</div>
                    <div className="col">Maz {this.props.abilities["cun"]}</div>
                    <div className="col">Oso {this.props.abilities["pre"]}</div>
                    <div className="col">Vul {this.props.abilities["will"]}</div>
                    <div className="col"></div>
                </div>
            </div>
        )
    }
}


