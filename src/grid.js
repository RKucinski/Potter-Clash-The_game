import React, {Component} from 'react'
import Cell from './cell'

class Grid extends Component{

    gridGeneration(row,  column){
        let array =[]
        for (let i = 0; i < row; i++){
            for (let j = 0; j < column; j++){
                array.push(<Cell y={i} x={j} cellSize={this.props.cellSize} />)
            }
        }
        return array
    }

    

    render(){
        return(
            <div className="Grid" style={{backgroundImage: this.props.background , width:(this.props.column*this.props.cellSize) + "px", height: (this.props.row*this.props.cellSize)+ "px"}} >
                {this.gridGeneration(this.props.row, this.props.column)}
            </div>  
       )
    }
}

export default Grid;