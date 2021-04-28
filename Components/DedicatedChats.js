import React, { Component } from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput,ScrollView} from 'react-native'
import { ListItem, Avatar,Icon } from 'react-native-elements'
const list = [
    {
      name: 'Shreya',
      avatar_url: 'https://i.pravatar.cc/300',
      subtitle: 'Career listening',
    }
    
  ]
 const DedicatedChats =()=>{
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
                <Text style={{fontSize:30,fontWeight:'bold'}}>Dedicated chats</Text>
                <Icon
              style={{margin:5}}
             name='arrow-back'
            type='ionicon'
           color='#fff'
           size={30}
             />
            </View>
            <View style={styler.listView}>
  {
    list.map((l, i) => (
      <View key={i} style={{padding:3,paddingRight:5,paddingLeft:5}}>
      <ListItem key={i}  containerStyle={{backgroundColor:'#F8F8F8',height:57}}
>
          <Avatar source={{uri: l.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron size={35}/>
      </ListItem>
      </View>
    ))
  }
</View>

            </SafeAreaView>
        )
    }

export default DedicatedChats;

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