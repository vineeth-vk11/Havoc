import React, {useState } from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity,ScrollView} from 'react-native'
import { Icon } from 'react-native-elements'
import { SearchBar } from 'react-native-elements';
import { ListItem } from 'react-native-elements'
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

const Therapies =()=> {
  const [search,setsearch]=useState();
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
            <View style={{padding:10}}>
            <SearchBar
            containerStyle={{backgroundColor:'white',borderWidth:1,borderRadius:15,borderColor:'#7AC141',borderTopWidth:1,borderTopColor:'#7AC141',borderBottomColor:'#7AC141',height:48}}
            inputContainerStyle={{backgroundColor:'white',height:32}}
        placeholder="Search therapy name"
        onChangeText={value=>setsearch(value)}
        value={search}
      />
                </View>
                <View>
  {
    list.map((l, i) => (
      <View key={i} style={{padding:3,paddingRight:5,paddingLeft:5}}>
      <ListItem key={i}
      containerStyle={{backgroundColor:'#F8F8F8',height:55}} >
        <ListItem.Content>
          <ListItem.Title>{l.therapy}</ListItem.Title>
          <ListItem.Subtitle>{l.price}</ListItem.Subtitle>
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

export default Therapies;

const styler=StyleSheet.create({
    head:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:30
    }

})
