
import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import Boundary, { Events } from 'react-native-boundary';
import { Notifications } from 'react-native-notifications';

export default class App extends Component {

  componentDidMount() {
    Notifications.postLocalNotification({
      body: "Local notificiation!",
      title: "Local Notification Title",
      sound: "chime.aiff",
      silent: false,
      category: "SOME_CATEGORY",
      userInfo: {}
    })
   
    //------------------------------------------------------------------------G E O F E N C E S------------------------------------------------------------------------------------------
    console.log('hellooo')
    Boundary.add({
      lat: 35.8321449,
      lng: 10.6365588,
      radius: 50, // in meters
      id: "Satoripop",
    })
    Boundary.add({
      lat: 35.8297429,
      lng: 10.6270452,
      radius: 50, // in meters
      id: "Hospital",
    })
    Boundary.add({
      lat: 35.816946,
      lng: 10.616748,
      radius: 50, // in meters
      id: "Attar",
    })
    Boundary.add({
      lat: 35.821265,
      lng: 10.609565,
      radius: 50, // in meters
      id: "Home",
    })
      .then(() => console.log("success!"))
      .catch(e => console.error("error :(", e));

    Boundary.on(Events.ENTER, id => {
      // Prints 'Get out of my Chipotle!!'
      console.log(`Get out of my ${id}!!`);
      Alert.alert('helloooooe', `Entered To  ${id}!!`)
    });

    Boundary.on(Events.EXIT, id => {
      // Prints 'Ya! You better get out of my Chipotle!!'
      console.log(`Ya! You better get out of my ${id}!!`)
      Alert.alert('byeee', `got out from  ${id}!!`)
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>GEOFENCE DETECTION</Text>
      </View>
    );
  }

};


