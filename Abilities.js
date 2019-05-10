/**
 * Created by janda on 10.4.2019.
 */
import React from 'react';
import {CharacterConsumer} from '../../providers/CharacterProvider';

export default class Abilities extends React.Component {
    render() {
        return (
            <CharacterConsumer>
                {({abilities}) => (
                    <div className="container text-center">
                        <div className="row">
                            <div className="col"></div>
                            <div className="col">Sil {abilities["bra"]}</div>
                            <div className="col">Obr {abilities["agi"]}</div>
                            <div className="col">Int {abilities["int"]}</div>
                            <div className="col">Maz {abilities["cun"]}</div>
                            <div className="col">Oso {abilities["pre"]}</div>
                            <div className="col">Vul {abilities["will"]}</div>
                            <div className="col"></div>
                        </div>
                    </div>
                )}
            </CharacterConsumer>
        )
    }
}


