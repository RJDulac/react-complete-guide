import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Ryan', age: 36 },
      { name: 'Claire', age: 25 },
      { name: 'Test Monkey', age: 0 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

//no longer used
  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 27},
  //       { name: 'Bob', age: 36},
  //       { name: 'Claire', age: 25}        
  //     ]
  //   })
  // }

  nameChangedHandler = (event) => {
    this.setState ( {
      persons: [
        { name: 'Max', age: 27, id: 1},
        { name: event.target.value, age: 36, id: 2},
        { name: 'Claire', age: 25, id: 3}      
      ]
    })

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }



  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => { //second parameter gets index of array
            return <Person
              //reference deletePersonHandler
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              />

          } )}
        </div>        
        );

    }
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working</p>
        <button
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        
          {persons}
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work?'));
  }
}

export default App;
