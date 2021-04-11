import React, { Component } from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity,ScrollView} from 'react-native'
import { Icon } from 'react-native-elements'
import { SearchBar } from 'react-native-elements';
import { ListItem } from 'react-native-elements'
const list = [
    {
      name: 'No Topic',
      subtitle: '96 Talking'
    },
    {
      name: 'Education',
      subtitle: '104 Talking'
    },
    {
        name: 'No Topic',
        subtitle: '96 Talking'
      },
      {
        name: 'Education',
        subtitle: '104 Talking'
      },
      {
        name: 'No Topic',
        subtitle: '96 Talking'
      },
      {
        name: 'Education',
        subtitle: '104 Talking'
      }
    
  ]

export default class PickTopic extends Component {
    constructor(props){
        super(props);
        this.state={
            search: '',

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
           size={30}
             />
                </TouchableOpacity>
          <Text style={{fontSize:24,fontWeight:'bold'}}>Pick Topic</Text>
                <TouchableOpacity>
            <Icon
              reverse
             name='person'
            type='ionicon'
           color='#ffff'
             />
                </TouchableOpacity>  
            </View>
            <View style={{padding:10}}>
            <SearchBar
            containerStyle={{backgroundColor:'white',borderWidth:1,borderRadius:15,borderColor:'#7AC141',borderTopWidth:1,borderTopColor:'#7AC141',borderBottomColor:'#7AC141',height:48}}
            inputContainerStyle={{backgroundColor:'white',height:32}}
        placeholder="Enter topic name"
        onChangeText={this.updateSearch}
        value={search}
      />
                </View>
                <View>
  {
    list.map((l, i) => (
      <View style={{padding:3,paddingRight:5,paddingLeft:5}}>
      <ListItem key={i}
      containerStyle={{backgroundColor:'#F8F8F8',height:55}} >
        <ListItem.Content >
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron size={35} />
      </ListItem>
      </View>
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
        marginTop:30
    }

})
