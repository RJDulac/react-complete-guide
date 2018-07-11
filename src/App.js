import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28, id: '1' },
      { name: 'Ryan', age: 36, id: '2' },
      { name: 'Claire', age: 25, id: '3' },
      { name: 'Test Monkey', age: 0, id: '4' }
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

  nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });
      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;
      const persons = [...this.state.persons];

      persons[personIndex] = person;
      this.setState( {persons: persons} );
    }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    //slice used on constant to prevent mutation
    // const persons = this.state.persons.slice();
    //spread operator to avoid mutation by adding orginal into a new array
    const persons = [...this.state.persons];
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
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
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
