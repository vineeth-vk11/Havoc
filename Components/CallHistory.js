import React, { Component } from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput,ScrollView} from 'react-native'
import { ListItem, Avatar,Icon } from 'react-native-elements'
const list = [
    {
      date:'14 March 2021',
      time:'4:14 PM',
      price:'₹250'
    },
    {
        date:'14 March 2021',
        time:'4:14 PM',
        price:'₹250'
      },
      {
        date:'14 March 2021',
        time:'4:14 PM',
        price:'₹250'
      },
      {
        date:'14 March 2021',
        time:'4:14 PM',
        price:'₹250'
      },

      {
        date:'14 March 2021',
        time:'4:14 PM',
        price:'₹250'
      },
      {
        date:'14 March 2021',
        time:'4:14 PM',
        price:'₹250'
      },
    
  ]
export default class CallHistory extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
            <View style={styler.head}>
                <Text style={{fontSize:30,fontWeight:'bold',margin:40}}>Call History</Text>
            </View>
            <View>
  {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider
>
        <ListItem.Content>
        <ListItem.Subtitle>{l.date}</ListItem.Subtitle>
          <ListItem.Subtitle>{l.time}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Subtitle>{l.price}</ListItem.Subtitle>
      </ListItem>
    ))
  }
</View>
</ScrollView>
            </SafeAreaView>
        )
    }
}
const styler=StyleSheet.create({
    head:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    }
})