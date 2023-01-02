import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import UserInput from './UserInput';

function AddUser() {
  const initialState = {
    name: '',
    userName: '',
    email: '',
    address: '',
    phone: '',
    company: '',
  };
  const [newUser, setNewUser] = useState(initialState);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>Add new user : - </Text>
      <UserInput
        placeholder="Name"
        value={newUser.name}
        onChangeText={value =>
          setNewUser(prevUser => {
            return {...prevUser, name: value};
          })
        }
      />
      <UserInput
        placeholder="Username"
        value={newUser.userName}
        onChangeText={value =>
          setNewUser(prevUser => {
            return {...prevUser, userName: value};
          })
        }
      />
      <UserInput
        placeholder="Email"
        value={newUser.email}
        onChangeText={value =>
          setNewUser(prevUser => {
            return {...prevUser, email: value};
          })
        }
      />
      <UserInput
        placeholder="Address"
        value={newUser.address}
        onChangeText={value =>
          setNewUser(prevUser => {
            return {...prevUser, address: value};
          })
        }
      />
      <UserInput
        placeholder="Phone"
        value={newUser.phone}
        onChangeText={value =>
          setNewUser(prevUser => {
            return {...prevUser, phone: value};
          })
        }
      />
      <UserInput
        placeholder="Company"
        value={newUser.company}
        onChangeText={value =>
          setNewUser(prevUser => {
            return {...prevUser, company: value};
          })
        }
      />
    </View>
  );
}

export default AddUser;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  heading: {
    marginBottom: 20,
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
