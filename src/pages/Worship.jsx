import { StyleSheet, Text, View } from 'react-native';

export default function Courses(props) {
  return (
    <View style={styles.container}>
      <Text>Página de Cultos</Text>
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
