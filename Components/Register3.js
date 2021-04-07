import React, { Component } from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity, Touchable} from 'react-native'
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

                    <TouchableOpacity>

                        </TouchableOpacity>
                    
                    <View style={[styler.head,{justifyContent:'space-evenly'}]}>
                    <TouchableOpacity>
                    <Icon
                      reverse
                     name='person-outline'
                    type='ionicon'
                   color='#7AC141'
                     />
                        </TouchableOpacity>
                        <TouchableOpacity>
                    <Icon
                      reverse
                     name='person-outline'
                    type='ionicon'
                   color='#7AC141'
                     />
                        </TouchableOpacity>
                      
                        <TouchableOpacity>
                    <Icon
                      reverse
                     name='chatbox-ellipses-outline'
                    type='ionicon'
                   color='#7AC141'
                     />
                        </TouchableOpacity>
                        
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
        marginTop:40
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
        
    }
})
