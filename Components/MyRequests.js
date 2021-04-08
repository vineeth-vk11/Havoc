import React, { Component } from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput,ScrollView} from 'react-native'
import { ListItem, Avatar,Icon } from 'react-native-elements'
const list = [
    {
      name: 'Mahesh',
      avatar_url: 'https://i.pravatar.cc/300',
      subtitle: 'Career listening',
      icon: 'av-timer'
    }
    
  ]
export default class MyRequests extends Component {
    render() {
        return (
            <SafeAreaView>
            <View style={styler.head}>
                <Text style={{fontSize:30,fontWeight:'bold',margin:40}}>My Requests</Text>
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
        </ListItem.Content>
        <TouchableOpacity>
        <Icon name={'close'} />
        </TouchableOpacity>
        <Icon name={'checkmark'} type='ionicon' />
      </ListItem>
    ))
  }
</View>
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