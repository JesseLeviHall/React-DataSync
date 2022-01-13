import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      text: 'initial text'
    }
  }

  handleChange(event){
    this.setState({
      text: event.target.value
    })
  }

  render(){
    return(
      <div>
        {this.state.text} <br/>
        <input type="text" value={this.state.text} onChange={this.handleChange.bind(this)}/>
        <br/>
       
        
      </div>
      
    )
  }
  
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)