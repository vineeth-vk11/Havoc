import React, { Component } from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'
export default class Register3 extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styler.head}>
                    <TouchableOpacity>
                    <Icon
                      reverse
                     name='person-outline'
                    type='ionicon'
                   color='#7AC141'
                     />
                        </TouchableOpacity>
                        <Image
               style={{width:107,height:68}} 
               source={require('../assets/Images/HavocTherapy.png')} />
                        <TouchableOpacity>
                    <Icon
                      reverse
                     name='chatbox-ellipses-outline'
                    type='ionicon'
                   color='#7AC141'
                     />
                        </TouchableOpacity>
                        
                    </View>
                    <Text style={styler.text}>ARE YOU READY?</Text>
                    <Text style={styler.textSmall}>Connect with a trained listener to {'\n'} talk about anything</Text>
                    
                    <View style={styler.findMyListnerBox}>
<TouchableOpacity>
                    <View style={styler.find}>
                        <Text style={{color:'white',textAlign:'center',fontSize:20}}>FIND MY{'\n'}LISTENER</Text>
                        </View>
</TouchableOpacity>
                        </View>
                    
                    
                    <View style={[styler.head,{justifyContent:'space-evenly'}]}>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                    <TouchableOpacity>
                    <Icon
                      reverse
                     name='gift'
                    type='ionicon'
                   color='#7AC141'
                     />
                        </TouchableOpacity>
                        <Text>Rewards</Text>
                        
                        </View>
                        <View style={{flexDirection:'column',alignItems:'center'}}>
                        <TouchableOpacity>
                    <Icon
                      reverse
                     name='list'
                    type='ionicon'
                   color='#7AC141'
                     />
                        </TouchableOpacity>
                        <Text>Requests</Text>
                        </View>

                        <View style={{flexDirection:'column',alignItems:'center'}}>
                        <TouchableOpacity>
                    <Icon
                      reverse
                     name='journal-outline'
                    type='ionicon'
                   color='#7AC141'
                     />
                        </TouchableOpacity>
                        <Text>Journal</Text>
                        </View>
                        
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
    text:{
        fontSize:24,
        marginTop:100,
        fontWeight:'bold',
        textAlign:'center'
        
    },
    textSmall:{
        fontSize:16,
        margin:10,
        textAlign:'center'
        
    },
    find:{
        backgroundColor:'#7AC141',
        width:135,
        height:135,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'
        
        
    },
    findMyListnerBox:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        margin:50
    }
})
