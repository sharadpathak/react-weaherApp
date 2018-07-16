import React, {Component} from 'react';
import DayCardItem from  './dayCardItem';

function DayCard(props) {
    var NewDayCardItem =  props.report.map( (day,key) => {
                return <DayCardItem key={key}  day={day} />
             }) 
    return (
            <div>
                {NewDayCardItem} 
            </div>
            )
}

export default DayCard;