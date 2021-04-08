import React, { Component } from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput,ScrollView} from 'react-native'
import { Icon } from 'react-native-elements'
import { SearchBar } from 'react-native-elements';
import { ListItem, Avatar } from 'react-native-elements'
const list = [
    {
      therapy: 'Medication',
      price: '₹ 250'
    },
    {
      therapy: 'Medication',
      price: '₹ 250'
    }
    ,
    {
      therapy: 'Medication',
      price: '₹ 250'
    }
    ,
    {
      therapy: 'Medication',
      price: '₹ 250'
    }
    
    
  ]

export default class Therapies extends Component {
    constructor(props){
        super(props);
        this.state={
            search: ''
        }
    }
    updateSearch = (search) => {
        this.setState({ search });
      };
      
    render() {
        const { search } = this.state;
        return (
            <SafeAreaView>
                <ScrollView>
            <View style={styler.head}>
            <TouchableOpacity>
            <Icon
              style={{margin:5}}
             name='arrow-back'
            type='ionicon'
           color='#979797'
             />
                </TouchableOpacity>
          <Text style={{fontSize:24,fontWeight:'bold'}}>Therapies</Text>
                <TouchableOpacity>
            <Icon
              reverse
             name='person'
            type='ionicon'
           color='#ffff'
             />
                </TouchableOpacity>  
            </View>
            <View style={{margin:10}}>
            <SearchBar
            containerStyle={{backgroundColor:'white',borderWidth:1,padding:3,borderRadius:15,borderColor:'#7AC141',borderTopWidth:1,borderTopColor:'#7AC141',borderBottomColor:'#7AC141'}}
            inputContainerStyle={{backgroundColor:'white'}}
        placeholder="Enter your Message here"
        onChangeText={this.updateSearch}
        value={search}
      />
                </View>
                <View>
  {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{l.therapy}</ListItem.Title>
          <ListItem.Subtitle>{l.price}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
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
        justifyContent:'space-between',
        marginTop:20
    }

})
