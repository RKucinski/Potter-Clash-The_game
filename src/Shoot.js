import React, { Component } from 'react'
import './App.css'
class Shoot extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show: "none",
            show2: "none",
        }
    }
    handleSonPlay() {
        const son = new Audio();
        son.src = "http://soundfxcenter.com/video-games/tloz-ocarina-of-time/8d82b5_TLOZ_Ocarina_Of_Time_Sword_Spin_Magic_Sound_FX.mp3";
        son.play();
        son.volume = '0.2';
    }
    handleSonPlay2() {
        const song = new Audio();
        song.src = "http://soundfxcenter.com/video-games/final-fantasy-xi/8d82b5_Final_Fantasy_XI_Protect_Sound_Effect.mp3"
        song.play();
        song.volume = '0.2';
        song.currentTime = 2;
    }

    componentDidMount() {
        window.addEventListener('keydown', (e) => {
            if (e.key === "v") {
                if (this.props.pause) return
                if (this.props.victory) return
                this.setState((state) => ({ show: "block" }));
                if (!this.props.pause) this.handleSonPlay();

                // players on same row. player1 shoots right and hits player2
                if (this.props.posTop2 + this.props.cellSize === this.props.posTop && this.state.show === "block" && this.props.posLeft < this.props.posLeft2 && this.props.sensTir === 3) {
                    this.props.looseLife2()
                }
                // players on same row. player1 shoots left and hits player2
                if (this.props.posTop2 + this.props.cellSize === this.props.posTop && this.state.show === "block" && this.props.posLeft > this.props.posLeft2 && this.props.sensTir === 1) {
                    this.props.looseLife2()
                }
                // players on same col. player1 shoots up and hits player2 
                if (this.props.posLeft2 === this.props.posLeft && this.state.show === "block" && this.props.posTop >= this.props.posTop2 && this.props.sensTir === 2) {
                    this.props.looseLife2()
                }
                // players on same col. player1 shoots down and hits player2 
                if (this.props.posLeft2 === this.props.posLeft && this.state.show === "block" && this.props.posTop <= this.props.posTop2 && this.props.sensTir === 0) {
                    this.props.looseLife2()
                }

            }
        })

        window.addEventListener('keyup', (e) => {
            if (e.key === "v") {
                this.setState((state) => ({ show: "none" }))
            }
        })

        window.addEventListener('keydown', (e) => {
            if (e.key === "m") {
                if (this.props.pause) return
                if (this.props.victory) return
                this.setState((state) => ({ show2: "block" }));
                if (!this.props.pause) this.handleSonPlay2();
                // players on same row. player2 shoots right and hits player1 
                if (this.props.posTop2 + this.props.cellSize === this.props.posTop && this.state.show2 === "block" && this.props.posLeft > this.props.posLeft2 && this.props.sensTir2 === 3) {
                    this.props.looseLife1()
                }
                // players on same row. player2 shoots left and hits player1
                if (this.props.posTop2 + this.props.cellSize === this.props.posTop && this.state.show2 === "block" && this.props.posLeft < this.props.posLeft2 && this.props.sensTir2 === 1) {
                    this.props.looseLife1()
                }
                // players on same col. player2 shoots up and hits player1
                if (this.props.posLeft2 === this.props.posLeft && this.state.show2 === "block" && this.props.posTop2 >= this.props.posTop && this.props.sensTir2 === 2) {
                    this.props.looseLife1()
                }
                // players on same col. player2 shoots down and hits player1
                if (this.props.posLeft2 === this.props.posLeft && this.state.show2 === "block" && this.props.posTop >= this.props.posTop2 && this.props.sensTir2 === 0) {
                    this.props.looseLife1()
                }
            }
        })

        window.addEventListener('keyup', (e) => {
            if (e.key === "m") {
                this.setState((state) => ({ show2: "none" }))
            }
        })
    }

    giveAttackHeigth(positiontop, sensTir) {
        if (sensTir === 0)
            return 9 * this.props.cellSize - positiontop
        if (sensTir === 2)
            return positiontop
        return this.props.cellSize
    }
    giveAttackWidth(positionleft, sensTir) {
        if (sensTir === 3)
            return 9 * this.props.cellSize - positionleft
        if (sensTir === 1)
            return positionleft
        return this.props.cellSize
    }
    giveAttackTop(positiontop, sensTir) {
        if (sensTir === 0) return positiontop - this.props.cellSize
        if (sensTir === 2) return -2 * this.props.cellSize
        if (sensTir === 1 || sensTir === 3) return positiontop - 2 * this.props.cellSize
    }
    giveAttackLeft(positionleft, sensTir) {
        if (sensTir === 3) return positionleft + this.props.cellSize
        if (sensTir === 1) return 0
        if (sensTir === 0 || sensTir === 2) return positionleft
    }

    displayColorAttack1(nbrJoueurs, manche) {
        if (nbrJoueurs === "none")
            return this.props.choiceData.player1Choice.color
        if (nbrJoueurs === "inline-block" && manche === 1)
            return this.props.choiceData.player1Choice.color
        if (nbrJoueurs === "inline-block" && manche === 2)
            return this.props.choiceData.player3Choice.color
        if (nbrJoueurs === "inline-block" && manche === 3)
            return this.props.storedState.winner1.color
    }
    displayColorAttack2(nbrJoueurs, manche) {
        if (nbrJoueurs === "none")
            return this.props.choiceData.player2Choice.color
        if (nbrJoueurs === "inline-block" && manche === 1)
            return this.props.choiceData.player2Choice.color
        if (nbrJoueurs === "inline-block" && manche === 2)
            return this.props.choiceData.player4Choice.color
        if (nbrJoueurs === "inline-block" && manche === 3)
            return this.props.storedState.winner2.color

    }


    render() {
        return (
            <div>
                <div className="shoot"
                    style={{
                        height: this.giveAttackHeigth(this.props.posTop, this.props.sensTir) + "px",
                        width: this.giveAttackWidth(this.props.posLeft, this.props.sensTir) + "px",
                        top: this.giveAttackTop(this.props.posTop, this.props.sensTir) + "px",
                        left: this.giveAttackLeft(this.props.posLeft, this.props.sensTir) + "px",
                        display: this.state.show,
                        backgroundColor: this.displayColorAttack1(this.props.homeData.nbrJoueurs, this.props.tournamentData.manche),
                    }}>
                </div>
                <div className="shoot2"
                    style={{
                        height: this.giveAttackHeigth(this.props.posTop2 + 50, this.props.sensTir2) + "px",
                        width: this.giveAttackWidth(this.props.posLeft2, this.props.sensTir2) + "px",
                        top: this.giveAttackTop(this.props.posTop2 + 50, this.props.sensTir2) + "px",
                        left: this.giveAttackLeft(this.props.posLeft2, this.props.sensTir2) + "px",
                        display: this.state.show2,
                        backgroundColor: this.displayColorAttack2(this.props.homeData.nbrJoueurs, this.props.tournamentData.manche),
                    }} >
                </div>

            </div>
        )
    }
}

export default Shoot

