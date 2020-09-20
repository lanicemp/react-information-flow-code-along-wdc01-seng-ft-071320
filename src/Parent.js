import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {
  //We are initailliazing the this.state that has the attributes of color and children color
  //we are calling super that allow us to extend this class. 
  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: "#FFF"
    }
  }

  changeColor = (newChildColor ) => {
    //We are creating the funciton of change color that has the parameter of newChildColor
    //which is an event that is called on the click of the child. 
    //It is allowing us to change our state from white to a random color 
    //this.setState has us pass what we are trying to change.  
    console.log(newChildColor)
    this.setState({
      color: getRandomColor(),
       childrenColor :newChildColor

    })
  }

  render() {
    return (
      // We are passing in our components, props, and state
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color={this.state.childrenColor} handleColorChange = { this.changeColor} />
        <Child color={this.state.childrenColor} handleColorChange = { this.changeColor}/>
      </div>
    )
  }
  
}
 export default Parent
