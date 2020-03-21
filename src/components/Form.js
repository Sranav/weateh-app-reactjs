import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city_name" placeholder="City name..." ></input>
                <input type="text" name="country" placeholder="Country name..."></input>
            <button>Get weather</button></form>
        );
    }
};
export default Form;
