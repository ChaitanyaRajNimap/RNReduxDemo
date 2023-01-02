import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function UserCard({name, userName, email, address, phone, company}) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>Name : {name}</Text>
      <Text style={styles.text}>Username : {userName}</Text>
      <Text style={styles.text}>Email : {email}</Text>
      <Text style={styles.text}>
        Address : {(address.street, address.suite, '\n', address.city)}
      </Text>
      <Text style={styles.text}>Phone number : {phone}</Text>
      <Text style={styles.text}>Company : {company.name}</Text>
    </View>
  );
}

export default UserCard;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#a9a9a9',
  },
  text: {
    paddingVertical: 5,
    color: '#000',
    fontSize: 16,
  },
});
