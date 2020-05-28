import * as React from 'react';
import { Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { BookedScreen } from '../screens/BookedScreen';
import { THEME } from '../theme';
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';


const PostNavigation = createStackNavigator();
const TabNavigation = createBottomTabNavigator();


export const AppNavigation = () => {
    return (
        <TabNavigation.Navigator tabBarOptions={{
            activeTintColor: THEME.MAIN_COLOR
        }}>
            <TabNavigation.Screen
                name='Post'
                component={PostNavigator}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name='ios-albums' size={25} color={color} />
                }}

            />
            <TabNavigation.Screen
                name='Booked'
                component={BookedNavigator}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name='ios-star' size={25} color={color} />
                }}
            />
        </TabNavigation.Navigator>
    )
}

const PostNavigator = () => {
    return (
        <PostNavigation.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
            },
            headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
        }}>
            <PostNavigation.Screen
                name='Main' component={MainScreen}
                options={{
                    title: 'Мой блог',
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item title="Take photo" iconName='ios-camera' onPress={() => console.log('press photo')} />
                        </HeaderButtons>),
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item title="Toogle Drawer" iconName='ios-menu' onPress={() => console.log('press menu')} />
                        </HeaderButtons>)
                }} />
            <PostNavigation.Screen name='Post'
                component={PostScreen}
                options={
                    ({ route }) => ({
                        title: 'Пост от ' + new Date(route.params?.date).toLocaleDateString(),
                        headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item title="Take photo" iconName={route.params?.booked ? 'ios-star' : 'ios-star-outline'} onPress={() => console.log('press photo')} />
                            </HeaderButtons>)

                    })
                } />
        </PostNavigation.Navigator>
    )
}

const BookedNavigator = () => {
    return (
        <PostNavigation.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
            },
            headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
        }}>
            <PostNavigation.Screen
                name="Избранное"
                component={BookedScreen}
                options={{
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item title="Toogle Drawer" iconName='ios-menu' onPress={() => console.log('press menu')} />
                        </HeaderButtons>)
                }}
            />
            <PostNavigation.Screen
                name="Post"
                component={PostScreen}
            />

        </PostNavigation.Navigator>
    )
}

