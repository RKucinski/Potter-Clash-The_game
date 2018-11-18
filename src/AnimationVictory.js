import React, { Component } from 'react'
import './App.css'
import reward from './Img/gobletReward.gif'

class AnimationVictory extends Component {

    
    render() {
        return (
            <div className="AnimationVictoryWrapper">
                <div className="AnimationVictory_window">
                    <img src={reward} alt="" />
                    <h1>YOU WON THE TOURNAMENT !!!</h1>
                    <p>You defeated :</p>
                </div>
            </div>
        )
    }
}

export default AnimationVictory