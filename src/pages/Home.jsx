import { StyleSheet, Button, Text, View } from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text>Page home</Text>
      <Button title = "Avisos" onPress = { () => {props.navigation.navigate('Notices')}} />
      <Button title = "Cultos" onPress = { () => {props.navigation.navigate('Worship')}} />
      <Button title = "Projetos" onPress = { () => {props.navigation.navigate('Projects')}} />
      <Button title = "Cursos" onPress = { () => {props.navigation.navigate('Courses')}} />
      <Button title = "Login" onPress = { () => {props.navigation.navigate('Login')}} />
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
