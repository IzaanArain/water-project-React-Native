import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Components/Login';
import StartPage from './Components/StartPage';
import SignUp from  './Components/SignUp';
import MainPage from './Components/MainPage';
import QuickBuy from './Components/QuickBuy';
import Forget from './Components/Forget';
import Bill from './Components/Bill';
import Complaints from './Components/Complaints';
import Delivery from './Components/Delivery';
import Bottles from './Components/Bottles';
import Schedule from './Components/Schedule';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="QuickBuy" component={QuickBuy} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="Bill" component={Bill} />
        <Stack.Screen name="Complaints" component={Complaints} />
        <Stack.Screen name="Delivery" component={Delivery} />
        <Stack.Screen name="Bottles" component={Bottles} />
        <Stack.Screen name="Schedule" component={Schedule} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
