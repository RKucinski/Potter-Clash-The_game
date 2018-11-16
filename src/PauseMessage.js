import React, { Component } from 'react';
import './PauseMessage.css';



class PauseMessage extends Component {
    constructor(props) {
        super(props);

       

        this.buttonStyle = {
            color: 'red',
            backgroudColor: 'white',
            widht: 100,
            height: 70,
            fontSize: 20,
        }

    }
   




    pauseTournoi() {

        if (PauseMessage) {
            return<div>
                <button className="Button" style={this.buttonStyle} onClick={() => this.props.resetPause()}>Continue</button>
            </div>
        }
    }
    render() {
        return (
            <div>
                <div className="PauseText">
                    <p className="PauseMessage"> Jeu en Pause</p>
                    <div className='ButtonChoice'>
                        {this.pauseTournoi()}

                    </div>
                </div>
            </div>

        )
    }
}



export default PauseMessage;