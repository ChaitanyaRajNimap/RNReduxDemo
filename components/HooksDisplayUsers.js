import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers} from '../redux';
import UserCard from './UserCard';

function HooksDisplayUsers() {
  const usersData = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return usersData.loading ? (
    <View>
      <Text>Loading...</Text>
    </View>
  ) : usersData.error ? (
    <View>
      <Text>{usersData.error}</Text>
    </View>
  ) : (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>Hooks User List: -</Text>
      <FlatList
        data={usersData.users}
        renderItem={itemData => (
          // <Text style={styles.subHeading}>{itemData.item.name}</Text>
          <UserCard
            name={itemData.item.name}
            userName={itemData.item.username}
            email={itemData.item.email}
            address={itemData.item.address}
            phone={itemData.item.phone}
            company={itemData.item.company}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default HooksDisplayUsers;

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
  card: {
    paddingVertical: 20,
    margin: 20,
  },
});
