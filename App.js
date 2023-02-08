import { NavigationContainer } from '@react-navigation/native';
import Login from './src/components/loginComponent.js';
import Friend from './src/components/friendComponent';
import Home from './src/components/homeComponent';
import ChatList from './src/components/chatListComponent';
import Chat from './src/components/chatComponent.js';
import Profile from './src/components/profileComponent';
import Icon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Chat') {
              iconName = 'message1';
            }
            else if (route.name === 'Friend') {
              iconName = 'addusergroup';
            }
            else if (route.name === 'Profile') {
              iconName = 'user';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Friend" component={Friend} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}