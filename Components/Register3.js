import React, { Component } from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'
export default class Register3 extends Component {
    render() {
        return (
            <SafeAreaView style={styler.screen}>
                <View style={styler.headerView}>
                <View style={styler.head}>
                    <TouchableOpacity >
                    <Icon
                      reverse
                     name='person'
                    type='ionicon'
                   color='#7AC141'
                   size={24}
                     />
                        </TouchableOpacity>
                        <Image
               style={{width:107,height:68}} 
               source={require('../assets/Images/HavocTherapy.png')} />
                        <TouchableOpacity>
                    <Icon
                      reverse
                     name='chatbox-ellipses'
                    type='ionicon'
                   color='#7AC141'
                   size={24}
                     />
                        </TouchableOpacity>
                        
                    </View>
                    </View>
                    <View style={styler.textView}>
                    <Text style={styler.text}>ARE YOU READY?</Text>
                    <Text style={styler.textSmall}>Connect with a trained listener to {'\n'} talk about anything</Text>

                    </View>
                    <View style={styler.findMyListnerView}>
<TouchableOpacity>
                    <View style={styler.find}>
                        <Text style={{color:'white',textAlign:'center',fontSize:20}}>FIND MY{'\n'}LISTENER</Text>
                        </View>
</TouchableOpacity>
                        </View>
                    <View style={styler.footerView}>
                    <View style={[styler.foot,{justifyContent:'space-evenly'}]}>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                    <TouchableOpacity>
                    <Icon
                      reverse
                     name='gift'
                    type='ionicon'
                   color='#7AC141'
                   size={24}
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
                   size={24}
                     />
                        </TouchableOpacity>
                        <Text>Requests</Text>
                        </View>

                        <View style={{flexDirection:'column',alignItems:'center'}}>
                        <TouchableOpacity>
                    <Icon
                      reverse
                     name='journal'
                    type='ionicon'
                   color='#7AC141'
                   size={24}
                     />
                        </TouchableOpacity>
                        <Text>Journal</Text>
                        </View>
                        
                    </View>
                    </View>
                </SafeAreaView>
        )
    }
}
const styler=StyleSheet.create({
    screen:{
        flex:1
    },
    head:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:35
    },
    foot:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    text:{
        fontSize:24,
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
    headerView:{
        flex:0.3,
    },
    textView:{
        flex:0.2,
    },
    findMyListnerView:{
        flex:0.3,justifyContent:'center',
        alignItems:'center'
    },
    footerView:{
        flex:0.2,
justifyContent:'flex-end',
paddingBottom:50
    }
})
