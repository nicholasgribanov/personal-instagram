import * as React from 'react';
import { Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { THEME } from '../theme';


const PostNavigation = createStackNavigator();

export const AppNavigation = () => {
    return (
        <PostNavigation.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
            },
            headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
        }}>
            <PostNavigation.Screen
                name='Main' component={MainScreen}
                options={{ title: 'Мой блог' }} />
            <PostNavigation.Screen name='Post'
                component={PostScreen}
                options={{
                    title: 'Пост 13',
                }} />
        </PostNavigation.Navigator>
    )
}