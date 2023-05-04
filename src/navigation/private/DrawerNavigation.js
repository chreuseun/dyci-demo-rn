import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import {MyProfileScreen,HomeScreen} from 'src/components/screens'

const Drawer = createDrawerNavigator();

DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen  options={{headerShown:false}} name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen  options={{headerShown:false}} name="MyProfileScreen" component={MyProfileScreen} />
      </Drawer.Navigator>    
    </NavigationContainer>
  );
}

export default DrawerNavigation