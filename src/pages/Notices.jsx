import { StyleSheet, Text, View } from 'react-native';

export default function Notices(props) {
  return (
    <View style={styles.container}>
      <Text>Page Notices</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
