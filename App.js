import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screen/HomeScreen";
import Research from "./screen/Research";
import { Ionicons } from "@expo/vector-icons";
import Help from "./components/Help";
import Notification from "./components/Notification";
import Login from './components/Login';
import CustomDrawer from './components/CustomDrawer';
import SignUp from './components/SignUp';
import SeeMore from './components/SeeMore';
import Home from './components/Home';
import Lottie from './components/Lottie';
import Profile from './screen/Profile';

const Bottom = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator()

const MyDrawer = () => {
  return(
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawer {...props}/>}
    screenOptions={{
      headerShown: false, 
    }} >
      <Drawer.Screen name='Drawer1' component={MyBottom} />
    </Drawer.Navigator>
  )
}

const MyBottom = () => {
  return (
    <Bottom.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#0891b2",
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            shadowColor: "white",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0,
            elevation: 0,
          },
        }}
      >
        <Bottom.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? "#0891b2" : "black"}
              />
            ),
            title: "Home",
          }}
        />
        <Bottom.Screen
          name="Research"
          component={Research}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "search-sharp" : "search-outline"}
                size={24}
                color={focused ? "#312e81" : "black"}
              />
            ),
          }}
        />
        <Bottom.Screen
          name="Help"
          component={Help}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "help-circle" : "help-circle-outline"}
                size={24}
                color={focused ? "#0891b2" : "black"}
              />
            ),
          }}
        />
      </Bottom.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="inverted" />
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Drawer' component={MyDrawer} />
        <Stack.Screen name="Notifications" component={Notification} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='SeeMore' component={SeeMore} />
        <Stack.Screen name='Lottie' component={Lottie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
