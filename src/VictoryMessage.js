import React, {Component} from 'react';
import './VictoryMessage.css';
import {  NavLink } from 'react-router-dom';
import coupe3 from './Img/coupe3.png'

 class VictoryMessage extends Component {
    constructor(props) {
        super(props);
         this.buttonStyle={
            color: 'red',
            backgroudColor: 'white',
            widht: 100,
            height: 70,
            fontSize: 20,
        } 
}



fightTournoi () {

    if (this.props.homeData.nbrJoueurs === 'inline-block') {  
        return <div>
                  <NavLink to="/Tournament"><button className="Button"style={this.buttonStyle} onClick={this.goTournoi}>Next fight</button></NavLink>
               </div>
      }
     else return <div>
                      <NavLink to="/"><button className="Button"style={this.buttonStyle} onClick={this.gohomepage}>New fight</button></NavLink>
                  </div>
 }
 
render() {
  return (
      <div>
          <div className="VictoryText">
            <p className="VictoireMessage">Congratulation {this.props.winner} You Win !!!</p>
            <img className="PhotoCoupe" src={coupe3} alt=""/>
                <div className='ButtonChoice'>
                    {this.fightTournoi()}
                </div>
          </div>
       </div>
  )
          }
      }          
 export default VictoryMessage;