import React, { Component } from 'react';
import {SyncLoader as Loader} from 'halogenium';
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Search from './components/Search';
import Weather from './components/Weather';
import { Tabs } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

const tabs = [
  { title: 'Votre Météo', sub: '1' },
  { title: 'Recherche', sub: '2' },
];

const TabExample = (props) => (
  <div>
    <Tabs tabs={tabs}
      initialPage={1}
      tabBarPosition="top"
      renderTab={tab => <span className="title">{tab.title}</span>}
    >
      <div className = "tabContent">
        <Weather weath={props.weath} />
      </div>
      <div className = "tabContent">
        <Search  />
      </div>
    </Tabs>
 
  </div>
);

class App extends Component {

  state = { isLoading: true, dataR: {} };

  componentWillMount = () => {

      this.getWeatherLocation();
      this.setState({isLoading: false})
  }

  getWeatherLocation = () => {
    let location = {};
    if(navigator.geolocation){
      return navigator.geolocation.getCurrentPosition(async(position) => {
        location = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        };
        console.log(location);
        const api_call = await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+location.lat+"&lon="+location.lon+"&units=metric&appid=0fcea7ccb9d81829009c5835be2cdb9d");
        const data = await api_call.json();
        console.log(data);
        this.setState({dataR: data});
        return data;
      });
    }
  }


  render() {
    if(this.state.isLoading) return(
     <div>
        <div className='header'>
          My Weather
        </div>
        <Loader color="#26A65B" size="16px" margin="4px" />
     </div>
    );
    return (
      <div>
        <div className='header'>
          My Weather
        </div>
        <TabExample weath={this.state.dataR} style={{backgroundColor: "rgb(63, 58, 58)"}} />
        <div className='footer'>
          Copyrigths &#169; Friedrich TANE 
        </div>
      </div>
    );
  }
}

export default App;
