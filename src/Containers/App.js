import Searchbox from '../Components/searchbox'
import Cardlist from '../Components/cardlist';
import { Component } from 'react';
import Scroll from '../Components/scroll';
import './App.css';
import {robots} from '../robots'

class App extends Component {
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      robots: [],
      searchfild: ''
    }
  }

  componentDidMount() {
    console.log('mount');
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(respons => respons.json())
    .then(users => this.setState({robots: users}))
    .catch(err => {
      console.log(err);
      this.setState({robots: robots})
    })
  }

  onsearchChange = (event) => {
    // console.log(event.target.value)
    this.setState({searchfild: event.target.value});
    
  }

  render() {
    console.log('render')
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfild.toLowerCase())
    })
    
    return(
      <div className='tc'>
        <div className="pa3">
          <h1 className="f1 logo">Robofriends</h1>
          <Searchbox onSearch={this.onsearchChange}/>
        </div>
        <Scroll>
          <Cardlist robots={filterRobots}/>
        </Scroll>
      </div>
    )
  }
  
}
export default App;
