import React from 'react'
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
const CallHistory =()=> {
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
                <Text style={{fontSize:30,fontWeight:'bold'}}>Call History</Text>
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
      <View style={{padding:3,paddingRight:5,paddingLeft:5}}>
      <ListItem key={i} containerStyle={{backgroundColor:'#F8F8F8',height:61}}
>
        <ListItem.Content>
        <ListItem.Subtitle>{l.date}</ListItem.Subtitle>
          <ListItem.Subtitle>{l.time}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Subtitle>{l.price}</ListItem.Subtitle>
      </ListItem>
      </View>
    ))
  }
</View>
            </SafeAreaView>
        )
    }

export default CallHistory;

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