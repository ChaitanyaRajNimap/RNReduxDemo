import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../redux';
import {View, Text, StyleSheet} from 'react-native';

function DisplayUsers({usersData, fetchUsers}) {
  useEffect(() => {
    fetchUsers();
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
      <Text style={styles.heading}>User List :- </Text>
      <View>
        {usersData &&
          usersData.users &&
          usersData.users.map(user => <Text>{user.name}</Text>)}
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    usersData: state.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayUsers);

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  heading: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
