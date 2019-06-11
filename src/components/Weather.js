import React, { Component } from 'react';
import '../css/Weather.css'

export default class Weather extends Component{

    render(){
        let temp = 0;
        let city = '';
        let country = '';
        let tmax = 0;
        let tmin = 0;
        let icon;
        if(this.props.weath.main){
            temp = this.props.weath.main.temp;
            city = this.props.weath.name;
            country = this.props.weath.sys.country;
            tmax = this.props.weath.main.temp_max;
            tmin = this.props.weath.main.temp_min;
            icon = <img style={{width: "7rem"}} src={"https://openweathermap.org/img/w/"+ this.props.weath.weather[0].icon + ".png"} alt="Erreur" />
        } 
        return(
            <div className="meteo">
                <h1>{city + ', ' + country}</h1><br/>
                {icon}
                <h1 className='temp'>T° : {temp + '°C'}</h1>
                <h3>{'max : ' + tmax + '°C - ' + 'min : ' + tmin + '°C'}</h3>
            </div>
        );
    }
}