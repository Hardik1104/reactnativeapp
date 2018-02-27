/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Alert,
  TextInput,
  Button
} from 'react-native';
import * as firebase from 'firebase';



//Importing all the components
const StatusBar = require('./components/StatusBar.js');

const ListItem = require('./components/ListItem.js');


//CSS
const styles = require('./styles.js')

// Initialize Firebase
const firebaseConfig = {
    apiKey: "Your Api,
    authDomain: "Your App Domain",
    databaseURL: "URL",
    projectId: "ID",
    storageBucket: "",
    messagingSenderId: ""
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);



type Props = {};
export default class App extends Component<Props> {

  constructor() {
      super();
      this.itemsRef = firebaseApp.database().ref();
      this.state = {
        dataSource: new ListView.DataSource({  rowHasChanged: (row1, row2) => row1 !== row2}),
        text:'',
        amount:0,
        total:0
      };
      this.componentDidMount();
      //this._total();
  }
  //Adding Item to DataSource
  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }
  //Fetching data from FireBase
  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      var total=0
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          amount:child.val().amount,
          _key: child.key
        });
      });
      //Getting Total of all spending
      items.forEach((amo)=>{

        total += parseInt(amo.amount);
      })
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items),
        total:total
      });

    });
  }


  //Add Expences into List
  _addItem() {
    if(this.isInteger(this.state.amount)){
      this.itemsRef.push({ title: this.state.text,amount:this.state.amount });
      this.listenForItems(this.itemsRef);
      this.setState({title:'',amount:0})
    }
    else{
      Alert.alert(
        'Error',
        'Please Enter only numbers in Amount Field',
        [
          {text: 'OK', onPress: () => {
            this.setState({amount:0})
          }},
        ],
        )
    }
  }
  //Add Expences into List
  addExpence(){

  }
  //Checking if amount if number
  isInteger(x) {
    if(x % 1 === 0){
      return true;
    }
    else {
      return false;
    }
}
  _renderItem(item) {
    return (
      <ListItem item={item} onpress={() =>this.addExpence()} />
    );
  }
  render() {
    return (

      <View style="{styles.container}">

        <StatusBar title="Expences" total={this.state.total}/>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData)=>this._renderItem(rowData)}
          style="{styles.listview}"/>


        <Text style="{styles.actionText}">Spent On</Text>
        <TextInput
          style="{styles.textinput}"
          onChangeText={(text) =>
            this.setState({text})

          }
          value={this.state.text}
        />
        <Text style="{styles.actionText}">Amount</Text>
        <TextInput
          style="{styles.textinput}"
          onChangeText={(amount) =>
            this.setState({amount})

          }
          value={this.state.amount}
        />
        <Button
          onPress={()=>this._addItem()}
          title="Add Expence"
          color="#841584"
          //accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
