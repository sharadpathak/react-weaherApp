import React, { Component } from 'react';
import './App.css';
import DayCard from './components/dayCards';

class App extends Component {

  constructor(props) {
    super(props);
     this.state  = { weatherReport: [{id:1,weather:"cloud",day:"Mon",temp:43}]
  }
}
_loadData() {
  var FETCH_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=3d8b309701a13f65b660fa2c64cdc517';
    fetch(FETCH_URL)
    .then(response => {
      return response.json();
    })
    .then(weatherReport => {
      this.setState({weatherReport});
    })
}

componentDidMount () {  
  this._loadData();
  }

  render() {
    return (
      <div className="App">       
          <DayCard report={this.state.weatherReport} />      
      </div>
    );
  }
}

export default App;
