import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Register1 from "./Components/Register1";
import Register2 from "./Components/Register2";
import Register3 from "./Components/Register3";
import SelectTopic from "./Components/SelectTopic";
import PickTopic from "./Components/PickTopic";
import AgeOfListner from "./Components/AgeOfListner";
import MatchingListener from "./Components/MatchingListener";
import MainChat from "./Components/MainChat";
import Leaving from "./Components/Leaving";
import Review from "./Components/Review";
import MyRequests from "./Components/MyRequests";
import MyJournal from "./Components/MyJournal";
import Conversation from "./Components/Conversation";
import Profile from "./Components/Profile";
import CallHistory from "./Components/CallHistory";
import Therapies from "./Components/Therapies";
import TherapyProduct from "./Components/TherapyProduct";
import TherapyBooking from "./Components/TherapyBooking";
import MyTherapies from "./Components/MyTherapies";
import BookCall from "./Components/BookCall";
import Booking from "./Components/Booking";
import JoinTheChat from "./Components/JoinTheChat";
import Chat from "./Components/Chat";
import BookCallDateTime from "./Components/BookCallDateTime";
import DedicatedChats from "./Components/DedicatedChats";
import EnterOTP from "./Components/EnterOTP";
import ListenerDB from "./Components/ListenerDB";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as firebase from "firebase";
import { LogBox } from "react-native";
import HowYouFeel from "./Components/HowYouFeel";

LogBox.ignoreLogs(["Setting a timer"]);

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBQAMKTj8n5N6RTHtSHQfZ4099O6CdwTqA",
  authDomain: "wehearyou-c9eb8.firebaseapp.com",
  databaseURL: "https://wehearyou-c9eb8-default-rtdb.firebaseio.com",
  projectId: "wehearyou-c9eb8",
  storageBucket: "wehearyou-c9eb8.appspot.com",
  messagingSenderId: "349911897247",
  appId: "1:349911897247:web:2e6aa662b347126f967eaa",
  measurementId: "G-RNGPYQKKFC",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgb(255,255,255)",
  },
};

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="Register1"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Register1" component={Register1} />
        <Stack.Screen name="EnterOTP" component={EnterOTP} />
        <Stack.Screen name="Register2" component={Register2} />
        <Stack.Screen name="Register3" component={Register3} />
        <Stack.Screen name="ListenerDB" component={ListenerDB} />
        <Stack.Screen name="PickTopic" component={PickTopic} />
        <Stack.Screen name="AgeOfListener" component={AgeOfListner} />
        <Stack.Screen name="HowYouFeel" component={HowYouFeel} />
        <Stack.Screen name="MatchingListener" component={MatchingListener} />
        <Stack.Screen name="MainChat" component={MainChat} />
        <Stack.Screen name="Leaving" component={Leaving} />
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="MyRequests" component={MyRequests} />
        <Stack.Screen name="MyJournal" component={MyJournal} />
        <Stack.Screen name="Conversation" component={Conversation} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="CallHistory" component={CallHistory} />
        <Stack.Screen name="Therapies" component={Therapies} />
        <Stack.Screen name="TherapyProduct" component={TherapyProduct} />
        <Stack.Screen name="TherapyBooking" component={TherapyBooking} />
        <Stack.Screen name="MyTherapies" component={MyTherapies} />
        <Stack.Screen name="BookCall" component={BookCall} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="JoinTheChat" component={JoinTheChat} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="BookCallDateTime" component={BookCallDateTime} />
        <Stack.Screen name="DedicatedChats" component={DedicatedChats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
