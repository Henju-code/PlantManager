import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import colors from '../styles/colors'
import { Wellcome } from '../pages/Welcome'
import { UserIdentification } from '../pages/UserIdentification'
import { Confirmation } from '../pages/Confirmation'

const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >
        <stackRoutes.Screen 
            name='Welcome'
            component={Wellcome}
        />

    <stackRoutes.Screen 
            name='UserIdentification'
            component={UserIdentification}
        />

    <stackRoutes.Screen 
            name='Confirmation'
            component={Confirmation}
        />
    </stackRoutes.Navigator>
)
export default AppRoutes