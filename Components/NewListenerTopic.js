import React, { useState } from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity,ScrollView} from 'react-native';
import {CheckBox} from 'react-native-elements';


const NewListenerTopic=()=>{
    
    const list=[{label:"LGBTQ & Identity",Id:0,checked:false},
 {label:"I just want to talk", Id:1,checked:false},
 {label:"COVID 19",Id:2,checked:false},
 {label:"Health Issues",Id:3,checked:false},
 {label:"Parenting",Id:4,checked:false},
 {label:"Bullying",Id:5,checked:false},
 {label:"Lonliness",Id:6,checked:false},
 {label:"Motivation and Confidence",Id:7,checked:false},
 {label:"Overthinking",Id:8,checked:false},
 {label:"Sleep", Id:9,checked:false},
 {label:"Low energy",Id:10,checked:false}
]
const [isChecked,setisChecked]=useState({list:list});

const updateCheckBox=(id)=>{
    isChecked.list[id].checked=true;
    setisChecked({list:list});
}
   const selectCB=(itemData)=>{
           return <CheckBox checked={isChecked.list[itemData.item.Id].checked}
           key={itemData.item.Id}
           onPress={()=>updateCheckBox(itemData.item.Id)}
           title={itemData.item.label}
           containerStyle={{backgroundColor:'transparent', borderColor:'transparent'}}
        />
   }

       return (
           <ScrollView>
        <View style={styler.screen}>
            <View style={styler.titleView}>
            <Text style={{fontSize: 25}}>Select Your Topic</Text>
            </View>
            <View style={styler.checkBoxView}>
              <FlatList data={isChecked.list} renderItem={selectCB} />
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity>
          <Text style={styler.getStarted}>CONTINUE</Text>
          </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
       );
}

export default NewListenerTopic;

const styler=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"space-between",
        paddingVertical:"15%",
        paddingHorizontal:'3%'
    },
    getStarted: {
        borderRadius: 15,
        width: 310,
        height: 52,
        backgroundColor: "#7AC141",
        color: "white",
        marginHorizontal: 10,
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 20,
        elevation: 5,
        marginVertical: '5%'
      },
      checkBoxView:{
          marginVertical:"3%"
      },
      titleView:{
          justifyContent:'center',
          alignItems:'center'
      }
})