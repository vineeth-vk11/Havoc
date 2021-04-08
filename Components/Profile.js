import React, { Component } from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput,ScrollView} from 'react-native'
import { ListItem, Avatar,Icon } from 'react-native-elements'
const list = [
    {
      title: 'Call history',
      icon: 'list'
    },
    {
        title: 'Therapies',
        icon: 'clipboard'
      },
      {
        title: 'My Therapies',
        icon: 'medkit'
      },
      {
        title: 'Become a listner',
        icon: 'briefcase'
      },
    {
      title: 'Refer a friend',
      icon: 'share-social'
    },
    {
        title: 'Logout',
        icon: 'log-out'
      }
    
  ]
export default class Profile extends Component {
    render() {
        return (
            <SafeAreaView style={styler.main}>
                
            <View style={styler.head}>
                <TouchableOpacity>
            <Icon
              style={{margin:5}}
             name='arrow-back'
            type='ionicon'
           color='#979797'
             />
             </TouchableOpacity>
                <Text style={{fontSize:30,fontWeight:'bold',margin:40}}>Profile</Text>
                <Icon
              style={{margin:5}}
             name='settings'
            type='ionicon'
           color='#000'
             />
            </View>
            <View style={styler.container}>
            <View style={styler.image}>
                    <Image
        style={styler.dp}
        source={require('../assets/Images/Conversation.png')}
      />
                        </View>
                <View style={{marginBottom:10}}>
                    <Text style={{fontSize:30,margin:2}}>Mahesh</Text>
                    <Text style={{color:'#828282',margin:2}}>9981756898</Text>
                    <Text style={{color:'#828282',margin:2}}>mahesh@dclabs.co.in</Text>
                    <Text style={{color:'#828282',margin:2}}>Member since,14 March Sunday</Text>
                    </View>
                    
                </View>
                <View>
  {
    list.map((item, i) => (
      <ListItem key={i} bottomDivider >
        <Icon name={item.icon} type='ionicon' />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
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
        justifyContent:'space-between',
        marginTop:20
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    dp:{
        width:109,
        height:109,
        borderRadius:100
    }


})