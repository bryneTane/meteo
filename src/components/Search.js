import React, { Component } from 'react';
import Weather from './Weather';
import '../css/Search.css';

const API_KEY = "048db27144dd27979e58a847bf45db60";

export default class Search extends Component{

    state = {print: false, dataR: {}};

    getWeather = async(e) => {
        e.preventDefault();
        console.log(e.target)
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        this.setState({dataR: data});
        this.setState({print: true});
        console.log(data);
        return data;
      }
    
    render(){
        return(
            <div>
                <form onSubmit = {this.getWeather}>
                    <div><input type="text" name="city" placeholder="City..." /></div>
                    <div><input type="text" name="country" placeholder="Country..." /></div>
                    <div><button>Get Weather</button></div>
                </form>
                {this.state.print && <Weather weath={this.state.dataR} />}
            </div>
        );
    }
}

