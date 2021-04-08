import React, { Component } from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput,ScrollView} from 'react-native'
import { ListItem, Avatar,Icon } from 'react-native-elements'
const list = [
    {
      name: 'Mahesh',
      avatar_url: 'https://i.pravatar.cc/300',
      subtitle: 'Career listening',
      date:'14 March 2021'
    }
    
  ]
export default class MyRequests extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
            <View style={styler.head}>
                <Text style={{fontSize:30,fontWeight:'bold',margin:40}}>My Journal</Text>
            </View>
            <View>
  {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider
>
          <Avatar source={{uri: l.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
          <ListItem.Subtitle>{l.date}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron/>
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