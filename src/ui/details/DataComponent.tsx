import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const DataComponent = ({ users }) => {
   const renderItem = ({ item: user }) => (
      <View style={{ margin: 20 }}>
         <Text>{`${user.name.title} ${user.name.title} ${user.name.first} `}</Text>
      </View>
   );

   return (
      <View style={styles.container}>
         <FlatList data={users} keyExtractor={(item) => item.toString()} renderItem={renderItem} />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: 50,
      alignItems: "center",
   },
});

export { DataComponent };
