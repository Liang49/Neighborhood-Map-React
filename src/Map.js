import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SideBar from './SideBar';

const fourSquare = "https://api.foursquare.com/v2/venues/explore?"
        const keys = {
          client_id: "GC33RSH2BTD2ZW4RZN11FOMSVYNJJYGLY4H41Q01XO5OSWES",
          client_secret: "1ELL33YOBHYUXUN51GAW1KLPVDTFDVBZJMRKOWGL0PIMHB3M",
          query: "food",
          near: "Brooklyn",
          v: "20181029",
          limit: 20
        }



class Map extends Component {
    state = {
        datas: [],
        markers: []
      }


    componentDidMount() {
        this.getFunction()
        this.getData()
    }
    
    getFunction() {
        loadMap("https://maps.googleapis.com/maps/api/js?key=AIzaSyC4smdq_ZyOEv4ljyHXRJ2jE-0-LBXNJII&callback=initMap")
        window.initMap = this.initMap
    }

   


    getData() {
        
        axios.get(fourSquare + new URLSearchParams(keys))
        .then(response => {
            console.log(response)
          this.setState({
              datas: response.data.response.groups[0].items 
          },this.getFunction())
        }) 
          .catch(error => {
            console.log("Error")
          })

       /* const fourPhoto = "https://api.foursquare.com/v2/venues/52517e05498ec2e28c792fa2?"
        const keysPhoto = {
            client_id: "GC33RSH2BTD2ZW4RZN11FOMSVYNJJYGLY4H41Q01XO5OSWES",
            client_secret: "1ELL33YOBHYUXUN51GAW1KLPVDTFDVBZJMRKOWGL0PIMHB3M",
            v: "20181029"
            
        }

        axios.get(fourPhoto + new URLSearchParams(keysPhoto))
        .then(images => {
        console.log(images)
        this.setState({
        photos: images.data.response.groups[0].items
          }, this.getFunction())
          })
          .catch(error => {
            console.log("Error Hell")
          }) */


      } 

      
    
     
  


      initMap = () => {
        var map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 40.629261, lng: -74.002708},
            zoom: 12,
    })
 
  

    var infoWindow = new window.google.maps.InfoWindow({
        maxWidth: 100

    })
    
    /* this.state.markers.map(myMarker => {

    }) */


    this.state.datas.map(myData => {
     
    var myModal = `<h3>${myData.venue.name}</h3> <br> ${myData.venue.location.address}  <br> ${myData.venue.photos}`
    



    var burger = {
       url: "https://www.gezginler.net/mobil/resimler/2151/ikon1_burger-ikon.png",
    }
    var marker = new window.google.maps.Marker({
        position: {lat: myData.venue.location.lat, lng: myData.venue.location.lng},
        map: map,
        icon: burger,
        title: myData.venue.name,
        animation: window.google.maps.Animation.DROP,
        draggable: true
        
    })
   
    this.state.markers.push(marker);


 marker.addListener('click', function() {

    infoWindow.setContent(myModal)
    infoWindow.open(map, marker)

    
   })


    })
    this.setState({filterList: this.data})



}

    render() {
        return (
            <div className="container">
             <header>
      <SideBar 
      {...this.state}
       clickList={this.clickList} 
      filterList={this.filterList}
        markers = { this.state.markers }
        datas = {this.state.datas}


     
      />

      </header>
            <div id='map'></div>
            </div>
        );
    }
}


 

function loadMap(url) {
    var index = window.document.getElementsByTagName('script')[0]
    var script = window.document.createElement('script')
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index);
  }

export default Map;
