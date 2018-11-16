import React, { Component } from 'react'
import './App.css'


class Character extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }


    determinateSens(sens) {
        if (this.props.homeData.nbrJoueurs === "none") {
            if (sens === 0) return this.props.choiceData.player1Choice.sprites + "0"
            if (sens === 1) return this.props.choiceData.player1Choice.sprites + "1"
            if (sens === 2) return this.props.choiceData.player1Choice.sprites + "2"
            if (sens === 3) return this.props.choiceData.player1Choice.sprites + "3"
        }
        if (this.props.manche === 1 || !this.props.manche) {
            if (sens === 0) return this.props.choiceData.player1Choice.sprites + "0"
            if (sens === 1) return this.props.choiceData.player1Choice.sprites + "1"
            if (sens === 2) return this.props.choiceData.player1Choice.sprites + "2"
            if (sens === 3) return this.props.choiceData.player1Choice.sprites + "3"
        }
        if (this.props.manche === 2 && this.props.homeData.nbrJoueurs === "inline-block") {
            if (sens === 0) return this.props.choiceData.player3Choice.sprites + "0"
            if (sens === 1) return this.props.choiceData.player3Choice.sprites + "1"
            if (sens === 2) return this.props.choiceData.player3Choice.sprites + "2"
            if (sens === 3) return this.props.choiceData.player3Choice.sprites + "3"
        }
        if (this.props.manche === 3 && this.props.homeData.nbrJoueurs === "inline-block") {
            if (sens === 0) return this.props.storedState.winner1.sprites + "0"
            if (sens === 1) return this.props.storedState.winner1.sprites + "1"
            if (sens === 2) return this.props.storedState.winner1.sprites + "2"
            if (sens === 3) return this.props.storedState.winner1.sprites + "3"
        }
    }

    render() {

        return (
            <div className={this.determinateSens(this.props.sensTir)} style={{
                top: this.props.posTop + 'px',
                left: this.props.posLeft + 'px',
                height: this.props.cellSize + "px",
                width: this.props.cellSize + "px",

            }} >
            </div>
        )
    }
}

export default Character