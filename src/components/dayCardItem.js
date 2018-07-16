import React, { Component} from 'react';

class DayCardItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
                <div className="cards">
                    <div className="headerSection">
                        <div className="titleHead">{this.props.day.weather[0].main}</div>
                        <div className="imgHead">
                            <img src={"image/" + this.props.day.weather[0].icon + ".png"} 
                            height="80" alt={this.props.day.weather[0].icon} />
                        </div>
                        
                    </div>
                    
                    <div className="description">{this.props.day.weather[0].description}</div>
                </div>                 
        )
    }
}

export default DayCardItem;