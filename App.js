import { View, Text, StatusBar, ActivityIndicator,  } from 'react-native'
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import Cart from './src/screens/Cart';
import You from './src/screens/You';
import { FontAwesome5 } from '@expo/vector-icons';
import ProdactInfo from './src/componants/ProdactInfo';
import { Fontisto } from '@expo/vector-icons';




const App = () => {
const Tab = createBottomTabNavigator(); 
const Stack = createNativeStackNavigator();

    function BottomTabs () {
  return (
    
        <Tab.Navigator screenOptions={{

          headerShown: false,

      }}>
        <Tab.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "Black"},
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color='#84dbc8' />
              ) : (
                <AntDesign name="home" size={24} color="Black" />
              ),
          }}
        />


        <Tab.Screen
          name="You"
          component={You}
          options={{
            tabBarLabel: "You",
            tabBarLabelStyle: { color: "Black" },
            tabBarIcon: ({ focused }) =>
                   focused ? (
       <FontAwesome5 name="user-alt" size={24} color='#84dbc8'/>
                       ) : (
       <FontAwesome5 name="user" size={26} color="black" />                ),
                 }}
               /> 


              <Tab.Screen 
                 name="Cart"
                 component={Cart}
                 options={{
                   tabBarLabel: "Create",
                   tabBarLabelStyle: { color: "Black"},
                   tabBarIcon: ({ focused }) =>
             focused ? (
              <Ionicons name="cart" size={26} color='#84dbc8' />
              ) : (
                <Ionicons name="cart-outline" size={28} color="black" />
                ),
              }}
        />
      </Tab.Navigator>
      )
    }
      
        <>
        <StatusBar  style="light" />
      <NavigationContainer>
        <Stack.Navigator 
             screenOptions={{headerShown:false,}}  >
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
          <Stack.Screen name="You" component={You} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ProdactInfo" component={ProdactInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App
