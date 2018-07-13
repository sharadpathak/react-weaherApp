import React, { Component} from 'react';


class DayCardItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
                <div className="cards">
                    <p>{this.props.day.weather}</p>
                    <span></span>
                    <p>{this.props.day.temp}</p>
                </div>                 
        )
    }
}

export default DayCardItem;