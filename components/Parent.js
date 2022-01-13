import React from 'react'
import Child from './Child'

export default class Parent extends React.Component {
  constructor() {
    super();

    this.state = {
      info: 'Show Name'
    }
    this.updateText = this.updateText.bind(this)
  }

  updateText(){
    this.setState({
      info: 'Jesse Hall'
    })
  }

  render() {
    <div>
      <Child 
      updateText={this.updateText}
      text={this.state.info} />
    </div>
  }

}