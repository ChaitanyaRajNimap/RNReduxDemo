import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

function UserInput({placeholder, value, onChangeText}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.inputStyle}
        placeholder={placeholder}
        placeholderTextColor="#FFF"
      />
    </View>
  );
}

export default UserInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
  inputStyle: {
    borderRadius: 15,
    paddingHorizontal: 15,
    backgroundColor: '#a9a9a9',
  },
});
