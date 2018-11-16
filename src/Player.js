import React, { Component } from "react"
import Character from "./character"
import Character2 from "./character2"
import Shoot from "./Shoot"
import "./App.css"
import PauseMessage from './PauseMessage';


class Player extends Component {

	constructor(props) {
		super(props)
		this.state = {
			posTop: 2 * this.props.cellSize,
			posLeft: this.props.cellSize,
			sensTir: 0,
			posTop2: 6 * this.props.cellSize,
			posLeft2: 8 * this.props.cellSize,
			sensTir2: 0,
			pause: false,
		}
	}

	componentDidMount = () => {
		window.addEventListener('keydown', (e) => {
			if (e.key === "y") {
				this.setState((state) => ({ pause: !this.state.pause }))
				console.log(this.state.pause)
			}
		})
		document.onkeydown = (event) => {
			if (this.state.pause) {
				return
			}
			if (this.props.victory) {
				return
			}

			// Mouvements Player 1 //////////////////////

			if (event.keyCode === 37) {
				if (this.state.posLeft2 < this.props.cellSize) return
				this.setState({
					posLeft2: this.state.posLeft2 - this.props.cellSize,
					sensTir2: 1
				})
				//console.log("Gauche") 
			};
			if (event.keyCode === 38) {
				if (this.state.posTop2 < 0) return
				this.setState({
					posTop2: this.state.posTop2 - this.props.cellSize,
					sensTir2: 2
				})
				//console.log("Haut")
			};
			if (event.keyCode === 39) {
				if (this.state.posLeft2 > 8 * this.props.cellSize) return
				this.setState({
					posLeft2: this.state.posLeft2 + this.props.cellSize,
					sensTir2: 3
				})
				//console.log("Droite") 
			};
			if (event.keyCode === 40) {
				if (this.state.posTop2 > 7 * this.props.cellSize) return
				this.setState({
					posTop2: this.state.posTop2 + this.props.cellSize,
					sensTir2: 0
				})
				//console.log("Bas") 
			}

			// Mouvements Player 2 //////////////////////////

			if (event.keyCode === 81) {
				if (this.state.posLeft < this.props.cellSize) return
				this.setState({
					posLeft: this.state.posLeft - this.props.cellSize,
					sensTir: 1
				})
				//console.log("Gauche") 
			};
			if (event.keyCode === 90) {
				if (this.state.posTop < this.props.cellSize) return
				this.setState({
					posTop: this.state.posTop - this.props.cellSize,
					sensTir: 2
				})
				//console.log("Haut")
			};
			if (event.keyCode === 68) {
				if (this.state.posLeft > 8 * this.props.cellSize) return
				this.setState({
					posLeft: this.state.posLeft + this.props.cellSize,
					sensTir: 3
				})
				//console.log("Droite") 
			};
			if (event.keyCode === 83) {
				if (this.state.posTop > 8 * this.props.cellSize) return
				this.setState({
					posTop: this.state.posTop + this.props.cellSize,
					sensTir: 0
				})
				//console.log("Bas") 
			};
		}
	};


	resetPause = () => { this.setState({ pause: !this.state.pause }) };

	render() {
		return (
			<div>
				<div>
					<Character
						{...this.props}
						storedState={this.props.storedState}
						cellSize={this.props.cellSize}
						posTop={this.state.posTop}
						posLeft={this.state.posLeft}
						sensTir={this.state.sensTir}
					/>
					<Character2
						{...this.props}
						storedState={this.props.storedState}
						cellSize={this.props.cellSize}
						posTop2={this.state.posTop2}
						posLeft2={this.state.posLeft2}
						sensTir2={this.state.sensTir2}
					/>
					<Shoot
						{...this.props}
						pause={this.state.pause}
						victory={this.props.victory}
						cellSize={this.props.cellSize}
						posTop={this.state.posTop}
						posLeft={this.state.posLeft}
						sensTir={this.state.sensTir}
						posTop2={this.state.posTop2}
						posLeft2={this.state.posLeft2}
						sensTir2={this.state.sensTir2}
						looseLife1={this.props.looseLife1}
						looseLife2={this.props.looseLife2}
					/>
				</div>

				<div>{
					this.state.pause ?
						<PauseMessage
							pause={this.state.PauseMessage}
							resetPause={this.resetPause}
							restartFight={this.restartFight}
						/>
						:
						<div></div>
				}
				</div>
			</div >
		);
	}
}

export default Player;
