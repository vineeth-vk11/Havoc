import React, { Component } from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'
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
            <SafeAreaView style={styler.screen}>

            <View style={styler.head}>
            <Icon
              style={{margin:5}}
             name='arrow-back'
            type='ionicon'
           color='#979797'
           size={30}
             />
                <Text style={{fontSize:30,fontWeight:'bold'}}>My Requests</Text>
                <Icon
              reverse
             name='person'
            type='ionicon'
           color='#ffff'
             />
            </View>
            <View style={styler.listView}>
  {
    list.map((l, i) => (
      <View key={i} style={{padding:3,paddingRight:5,paddingLeft:5}}>
      <ListItem key={i}  containerStyle={{backgroundColor:'#F8F8F8',height:79}} 
>
          <Avatar source={{uri: l.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        <TouchableOpacity>
        <Icon name={'close'}
        color='red' />
        </TouchableOpacity>
        <TouchableOpacity>
        <Icon name={'checkmark'} type='ionicon'
        color='green' />
        </TouchableOpacity>
      </ListItem>
      </View>
    ))
  }
</View>
            </SafeAreaView>
        )
    }
}
const styler=StyleSheet.create({
    head:{
      flex:0.15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:20
    },
    listView:{
      flex:0.85
    },
    screen:{
      flex:1
    }

})