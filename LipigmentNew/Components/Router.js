

import { createStackNavigator, createBottomTabNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

import SignIn from '../Components/Pages/signin'
import Signup from '../Components/Pages/signup'
import Profile from '../Components/Pages/profile'
import Lipigment from '../Components/Pigment'

 const Router = createStackNavigator({
    SignIn: SignIn,
    Signup: Signup,
    Profile: Profile,
    Lipigment: Lipigment
},
    {
        navigationOptions: {
            headerVisible: false,
        },
        headerMode: 'none',
        
    },
    {
        initialRouteName: SignIn,
       }

    
)

export default createAppContainer(Router);
