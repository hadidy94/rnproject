/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [goal, setGoal] = useState('');
  const [courseGoal, setCourseGoal] = useState([])

  function goalInputHandler(text) {
    setGoal(text)
  }
  function addGoalHandler() {
    console.log(goal)
    setCourseGoal((currentGoals) => [...currentGoals, goal]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='your Course Goal!'
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>

      <View style={styles.goalInput}>
        {courseGoal.map((el, i) => (
          <Text style={styles.goalItem} key={i}>{el}</Text>
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 70,
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#ccc',

  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    padding: 10

  },
  goalInput: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    borderRadius: 4,
    backgroundColor: '#5e0acc',
    padding: 8,
    color: '#fff'
  }
});

export default App;
