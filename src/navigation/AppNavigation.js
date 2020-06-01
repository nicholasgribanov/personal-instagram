import * as React from 'react';
import { Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { CreateScreen } from '../screens/CreateScreen';
import { BookedScreen } from '../screens/BookedScreen';
import { THEME } from '../theme';
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';


const PostNavigation = createStackNavigator();
const TabNavigation = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();
const DrawerNavigation = createDrawerNavigator();

const screenOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
}


export const AppNavigation = () => {
    return (
        <DrawerNavigation.Navigator>
            <DrawerNavigation.Screen name='PostTabs' component={PostAndBookedNavigation} />
            <DrawerNavigation.Screen name='About' component={AboutScreen} />
            <DrawerNavigation.Screen name='Create' component={CreateScreen} />
        </DrawerNavigation.Navigator>
    )
}

const PostAndBookedNavigation = () => {
    return (
        <TabNavigation.Navigator
            shifting={true}
            activeTintColor='#fff'
            barStyle={{
                backgroundColor: THEME.MAIN_COLOR
            }}
            tabBarOptions={{
                activeTintColor: THEME.MAIN_COLOR
            }}>
            <TabNavigation.Screen
                name='Post'
                component={PostNavigator}
                options={{
                    tabBarLabel: 'Все',
                    tabBarIcon: ({ color }) => <Ionicons name='ios-albums' size={25} color={color} />
                }}

            />
            <TabNavigation.Screen
                name='Booked'
                component={BookedNavigator}
                options={{
                    tabBarLabel: 'Избранное',
                    tabBarIcon: ({ color }) => <Ionicons name='ios-star' size={25} color={color} />
                }}
            />
        </TabNavigation.Navigator>
    )
}

const PostNavigator = ({ navigation }) => {
    return (
        <PostNavigation.Navigator screenOptions={screenOptions}>
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
                            <Item title="Toogle Drawer" iconName='ios-menu' onPress={() => navigation.toggleDrawer()} />
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

const BookedNavigator = ({ navigation }) => {
    return (
        <PostNavigation.Navigator screenOptions={screenOptions}>
            <PostNavigation.Screen
                name="Избранное"
                component={BookedScreen}
                options={{
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item title="Toogle Drawer" iconName='ios-menu' onPress={() => navigation.toggleDrawer()} />
                        </HeaderButtons>)
                }}
            />
            <PostNavigation.Screen
                name="Post"
                component={PostScreen}
                options={({ route }) => ({
                    title: 'Пост от ' + new Date(route.params?.date).toLocaleDateString()
                }
                )}
            />

        </PostNavigation.Navigator>
    )
}

