import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {View, Text, StyleSheet} from 'react-native';
import DisplayUsers from './components/DisplayUsers';
import HooksDisplayUsers from './components/HooksDisplayUsers';
import AddUser from './components/AddUser';

function App() {
  return (
    <Provider store={store}>
      <View style={styles.rootContainer}>
        <Text style={styles.heading}>React Native Redux Demo</Text>
        {/* <DisplayUsers /> */}
        {/* <HooksDisplayUsers /> */}
        <AddUser />
      </View>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    padding: 40,
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
