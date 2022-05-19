import { StyleSheet, Text, View } from 'react-native';

export default function Login(props) {
  return (
    <View style={styles.container}>
      <Text>Página de Login</Text>
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
