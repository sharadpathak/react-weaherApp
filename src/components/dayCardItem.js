import React, { Component} from 'react';


class DayCardItem extends Component {

    constructor(props) {
        super(props);
        console.log(props,"kkk")
    }

    render() {
        return(
                <div className="cards">
                    <p>{this.props.day.day}</p>
                    <span>{this.props.day.weather}</span>
                    <p>{this.props.day.temp}</p>
                </div>                 
        )
    }
}

export default DayCardItem;