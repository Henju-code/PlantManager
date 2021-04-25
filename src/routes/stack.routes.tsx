import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Wellcome } from '../pages/Welcome'
import { UserIdentification } from '../pages/UserIdentification'
import { Confirmation } from '../pages/Confirmation'
import { PlantSave } from '../pages/PlantSave'
import AuthRoutes from './tab.routes'

import colors from '../styles/colors'

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

        <stackRoutes.Screen
            name='PlantSelect'
            component={AuthRoutes}
        />

        <stackRoutes.Screen
            name='PlantSave'
            component={PlantSave}
        />

        <stackRoutes.Screen
            name='MyPlants'
            component={AuthRoutes}
        />

    </stackRoutes.Navigator>
)
export default AppRoutes