import Searchbox from '../Components/searchbox'
import Cardlist from '../Components/cardlist';
import { Component } from 'react';
import Scroll from '../Components/scroll';
import './App.css';
import {robots} from '../robots'

class App extends Component {
  constructor() {
    console.log('tes')
    super()
    this.state = {
      robots: [],
      searchfild: '' 
    }
  }

  componentDidMount() {
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
    const {robots, searchfild} = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfild.toLowerCase())
    })

    return !robots.length? 
      <h1 className="tc mt5 white">Loading...</h1> :
      (
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
