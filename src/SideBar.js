

import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Map from './Map';
import escapeRegExp from 'escape-string-regexp';


class SideBar extends Component {

  state = {
    query: '',
    datas: [],
    newVenue: []

  };

  clickList = matchName => {
    this.props.markers.map(match => {
      if (match.title === matchName) {
        window.google.maps.event.trigger(match, "click")

      }
    })
  }

filterList = (event) => {
  const query = event.target.value.toLowerCase();  
  const markers = this.props.markers;
  const datas = this.props.datas;
  
let newVenue = this.props.datas.filter(myData => myData.venue.name.toLowerCase().includes(query.toLowerCase()));
console.log(newVenue) /* the console has the filter
 array, but the list Venue names does not match the filter */
  markers.forEach(marker => {
    
    if (
      marker.title.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
        marker.setVisible(true);
      

      } else {
        marker.setVisible(false);
        
    }
});

this.setState({query: newVenue});
}
  


 render() {

    return (
      <Menu>
        <div className="locationList">
         <input type={"text"} 
         id={"search"} 
         placeholder={"Location"} 
         aria-label="Search places"
         onChange = {this.filterList} 
         tabIndex="0"
         
         /* value = {this.state.query} /*

         
         /*value = {this.state.query} */
         /* event => this.props.filterList(event.target.value */

         /> 
         
    {this.props.datas.map(myData => (
    <ol
      aria-label={myData.venue.name}
      tabIndex="0"
      key={myData.venue.name}
       onClick={() => {this.clickList(myData.venue.name)
      }}

        /*{this.props.handleClick(this.props) 
           {this.state.filterList && this.state.filterList.length > 0 && this.state.datas.map(myData => (
 ))}
      }} */
    >

        <b>{myData.venue.name}</b>
        </ol>
 
      
    ))}
 

</div>
      </Menu>
    );
  };

}

export default SideBar