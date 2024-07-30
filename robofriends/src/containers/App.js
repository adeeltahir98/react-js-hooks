import logo from '../logo.svg';
import './App.css';
// import React, { Component } from 'react';
//USING HOOKS
import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {robots} from '../robots';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

//State can only be used in classes that's why we are using class component here, otherwise you have to use hooks
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       robots: [],
//       searchfield: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => {this.setState({ robots: users })})
//   }

//   onSearchChanged = (event) => {
//     this.setState({ searchfield: event.target.value });
//   }

//   render() { 
//     const { robots, searchfield } = this.state;
//     const filteredRobots = robots.filter(robot => {
//       return robot.name.toLowerCase().includes(searchfield.toLowerCase())
//     })

//     return !robots.length ? <h1>Loading</h1> :
//       (
//       <div className='tc'>
//         <h1 className='f1'>RoboFriends</h1>
//         <SearchBox searchChange={this.onSearchChanged}/>
//         <Scroll>
//           <ErrorBoundary>
//             <CardList robots={filteredRobots}/>
//           </ErrorBoundary>
//         </Scroll>
//       </div>
//     );
//   };
// }

//USING HOOKS
function App() {

  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')

  //similar to componentDidMount, called everytime the app function renders
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {setRobots( users )})
  }, [])

  const onSearchChanged = (event) => {
    setSearchfield(event.target.value)
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })

  return !robots.length ? <h1>Loading</h1> :
    (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChanged}/>
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots}/>
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
