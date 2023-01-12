import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function HomeScreen (){
  return(
    <View style={styles.head}  >
      <Text style={styles.text}  >This is Home Screen</Text>
    </View>
  )
}
function AboutScreen (){
  return(
    <View style={styles.head} >
      <Text style={styles.text}  >This is About Screen</Text>
    </View>
  )
}
function DetailsScreen (){
  return(
    <View style={styles.head} >
      <Text style={styles.text} >This is Review Screen</Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="About" component={AboutScreen}/>
        <Drawer.Screen name="Review" component={DetailsScreen}/>
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9C4A1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 24,
    color: "#FFF",
    fontWeight: 'bold',
    fontSize: 36,
  },
  head: {
    backgroundColor: "#A78B71",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
