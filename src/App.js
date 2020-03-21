import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "5e9e6b3cc4f253338e29af12224da0cf";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error:undefined
    

  
  }
  getWeather = async ( e ) => {
    e.preventDefault();
    
    const city_name = e.target.elements.city_name.value;
    //console.log( city_name );
    
    const country = e.target.elements.country.value;
    //console.log( country );
    const api_call = await fetch( `http://api.openweathermap.org/data/2.5/weather?q=${city_name},${country}&appid=${API_KEY}` );
    const data = await api_call.json();
    if ( city_name && country ) {
      console.log( data );
      this.setState( {
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[ 0 ].description,
        error: ""
      } );
    }else {
          this.setState( {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "please enter"
          } );
        }
      }

      render() {
        return (
          <div>
            <div className="wrapper">
              <div classname="main">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-5 title-container">
                      <Titles /> 
                    </div>
                    <div className="col-xs-7 form-container">
                      <Form getWeather={ this.getWeather } />
                      <Weather
                        temperature={ this.state.temperature }
                        city={ this.state.city }
                        country={ this.state.country }
                        humidity={ this.state.humidity }
                        description={ this.state.description }
                        error={ this.state.error }

                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>  
        );
      }
    
};
export default App;

  