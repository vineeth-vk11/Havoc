import React ,{useState,useCallback} from 'react';
import {View,Text,StyleSheet,Button, TouchableOpacity,ScrollView,Dimensions} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel,
  } from "react-native-simple-radio-button";
import { SafeAreaView } from 'react-native-safe-area-context';


  const screenWidth= Dimensions.get('window').width;
const screenHeight=Dimensions.get('window').height;

const Quiz1=({navigation})=>{
    const [isPlaying,setisPlaying]=useState(false);
     const playingVideo = useCallback(()=>{
         setisPlaying(prev=>!prev)
     },[isPlaying]);
    const videoEnded= useCallback((state)=>{
        if(state==="ended"){
            setisPlaying(false);
        }
    },[isPlaying]);
    const [value,setvalue]=useState();
    const radio_props = [
        { label:"Listening with attention, while withholding \n judgements and advice", 
          value: 0 
        },
        { 
          label: "Accepting and validating what the other \n person is sharing", 
          value: 1 
        },
        {
          label:"Priciple of confidentiality is about privacy \n and respecting someone's willingness \n to open up",
           value: 2
          },
        {
          label:"Keeping the information shared to yourself,\n makes the seeker believe that the listener \n is actively listening to them without any \njudgement", 
          value:3},
      ];
    return (
      <SafeAreaView style={styler.screen}>
        <ScrollView >
            <View style={styler.titleView}>
                <Text style={{textAlign:'center', fontSize: 0.038*screenHeight}}>
                    Question 1
                </Text>
                <Text style={{fontSize:0.020*screenHeight, color:'grey', marginHorizontal:0.020*screenHeight,
            marginVertical: 0.014*screenHeight }}>
                Please watch the video and answer the question
                </Text>
            </View>
      <View style={{height:0.30*screenHeight, width:screenWidth}}>
       <YoutubePlayer videoId={"7VjbVCSXevQ"}
       play={true}
       height="100%"
       onChangeState={videoEnded}/>
      </View>
      <View>
          <Text style={{color:'black',marginHorizontal:0.025*screenHeight,fontSize:0.023*screenHeight}}>
              What is active listening and how does confidentiality work?
          </Text>
      </View>
      <View style={styler.radioButtons}>
             <RadioForm formHorizontal={false} animation={true}>
          {radio_props.map((obj, i) => (
            <RadioButton labelHorizontal={true} key={i}>
              <View style={{ flexDirection: "row" }}>
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={value === i}
                  onPress={(value) => {
                    setvalue(value);
                  }}
                  borderWidth={2}
                  buttonInnerColor={"#7AC141"}
                  buttonOuterColor={value === i ? "#7AC141" : "#DADADA"}
                  buttonSize={16}
                  buttonOuterSize={23}
                  buttonStyle={{ marginRight: 0.01*screenHeight, marginBottom: 0.015*screenHeight}}
                  buttonWrapStyle={{ marginLeft: 0.01*screenHeight }}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  onPress={(value) => {
                    setvalue(value);
                  }}
                  labelStyle={{ fontSize: 0.02*screenHeight, color: "rgba(18, 18, 18)" }}
                  labelWrapStyle={{}}
                />
              </View>
            </RadioButton>
          ))}
        </RadioForm>
     </View>
     <View style={{justifyContent:'center',alignItems:'center', marginBottom:0.02*screenHeight}}>
     <TouchableOpacity onPress={()=>{
       navigation.navigate('Quiz2')
     }} >
          <Text style={styler.getStarted}>CONTINUE</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
        </SafeAreaView>
    );
}

export default Quiz1;

const styler=StyleSheet.create({
    screen:{
        flex:1,
        paddingVertical:0.03*screenHeight,
        justifyContent:'space-between'
    },
    radioButtons:{
        width:screenWidth,  
        paddingLeft:0.015*screenHeight,
        marginVertical:0.018*screenHeight,
    },
    getStarted: {
        borderRadius: 15,
        width: 0.85*screenWidth,
        height: 0.08*screenHeight,
        backgroundColor: "#7AC141",
        color: "white",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 0.03*screenHeight,
        elevation: 5,
      }
});
