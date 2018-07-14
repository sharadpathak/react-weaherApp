import React, {Component} from 'react';
import DayCardItem from  './dayCardItem';

class DayCard extends Component  {

    constructor(props) {
        super(props);  
        console.log(props)
    }
    NewDayCardItem =  this.props.report.map( (day,key) => {
        return <DayCardItem key={key}  day={day} />
     })  
    render() { 
        if(!this.props.report) {
            return <div>
                Loding...
            </div>
        } else{
        return (
            <div>
                {this.NewDayCardItem} 
            </div>
            )
        }
    }
}

export default DayCard;