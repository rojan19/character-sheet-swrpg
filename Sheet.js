/**
 * Created by janda on 2.5.2019.
 */
import React from 'react'
import CharacterProvider from '../providers/CharacterProvider'

import Character from './charSheet/Character'
import Stamina from './charSheet/Stamina'
import Abilities from './charSheet/Abilities'
import Skills from './charSheet/Skills'
import Loader from './charSheet/Loader'

export default class Sheet extends React.Component {
    render() {
        return (
            <CharacterProvider>
                <Character/>
                <Stamina/>
                <Abilities/>
            </CharacterProvider>
        )
    }
}

/*
 <Stamina currStamina={this.state.currStamina} maxStamina={this.state.maxStamina}
 raiseStamina={this.raiseStamina} lowerStamina={this.lowerStamina}/>
 <Abilities abilities={this.state.abilities}/>
 <Skills skills={this.state.skills} abilities={this.state.abilities}/>
 <Loader getCharacter={this.getCharacter}/>
 */