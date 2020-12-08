import Searchbox from './searchbox'
import Cardlist from './cardlist';
import {robots} from "./robots";

function App() {
  return(
    <div className='tc'>
      <div className="pa3">
        <h1>Robofriends</h1>
        <Searchbox/>
      </div>
      
      <Cardlist robots={robots}/>
    </div>
  )
}
export default App;
