import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Ryan', age: 36},
      { name: 'Claire', age: 25}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    this.setState({
      persons: [
        { name: newName, age: 27},
        { name: 'Bob', age: 36},
        { name: 'Claire', age: 25}        
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState ( {
      persons: [
        { name: 'Max', age: 27},
        { name: event.target.value, age: 36},
        { name: 'Claire', age: 25}        
      ]
    })

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})


  }



  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      
    };
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working</p>
        <button
          style={style} 
          onClick={this.togglePersonsHandler}>Switch Name</button>
        { this.state.showPersons ?
        <div>
          <Person 
              name= {this.state.persons[0].name} 
              age={this.state.persons[0].age}
              click= {this.switchNameHandler.bind(this, 'Max!')} >My Hobbies: Racing</Person>
          <Person 
              name= {this.state.persons[1].name} 
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler}/>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div> : null}
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work?'));
  }
}

export default App;
