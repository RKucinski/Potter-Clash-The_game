import React, {Component} from 'react'
import './App.css'

class Cell extends Component {


    render(){
        return(

            <div className="Cell" style={{
                top: this.props.y*this.props.cellSize+"px", 
                left: this.props.x*this.props.cellSize+"px",
                height: this.props.cellSize + "px", 
                width: this.props.cellSize + "px"
                }}>     
            </div>
            
        )        
    }
}

export default Cell