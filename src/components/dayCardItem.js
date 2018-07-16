import React, { Component} from 'react';

class DayCardItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
                <div className="cards">
                    <p>{this.props.day.weather[0].main}</p>
                    <span><img src={this.props.day.weather[0].icon} alt={this.props.day.weather[0].icon} /></span>
                    <p>{this.props.day.weather[0].description}</p>
                </div>                 
        )
    }
}

export default DayCardItem;