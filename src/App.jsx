/* THIS IS THE ROOT OF OUR REACT APPLICATION */

import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">

      <h1>Itinerary for 7 Days in Hawaii 🌊</h1>
      <h2>Welcome to Hawaii, Yolan! Check out the calendar!</h2>
      <Calendar/> 

      
    </div>
  )
}

export default App