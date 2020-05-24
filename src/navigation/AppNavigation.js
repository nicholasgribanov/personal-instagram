import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';


const PostNavigation = createStackNavigator();

export const AppNavigation = () => {
    return (
        <PostNavigation.Navigator>
            <PostNavigation.Screen name='Main' component={MainScreen} options={{ title: 'Мой блог' }} />
            <PostNavigation.Screen name='Post' component={PostScreen} options={{title:'Пост 13'}} />
        </PostNavigation.Navigator>
    )
}