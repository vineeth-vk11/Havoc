import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Register1 from './Components/Register1';
import Register2 from './Components/Register2';
import Register3 from './Components/Register3';
import SelectTopic from './Components/SelectTopic';
import PickTopic from './Components/PickTopic';
import AgeOfListner from './Components/AgeOfListner';
import MatchingListener from './Components/MatchingListener';
import Leaving from './Components/Leaving';
export default function App() {
  return (
    <SafeAreaView>
      <Leaving/>
    </SafeAreaView>
  );
}

