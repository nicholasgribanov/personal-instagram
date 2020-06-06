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
const AboutNavigation = createStackNavigator();
const CreateNavigation = createStackNavigator();
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
        <DrawerNavigation.Navigator drawerContentOptions={{
            activeTintColor: THEME.MAIN_COLOR,
            labelStyle: {
                fontFamily: 'open-bold'
            }
        }}>
            <DrawerNavigation.Screen
                name='PostTabs'
                component={PostAndBookedNavigation}
                options={{
                    drawerLabel: 'Главная'
                }}
            />
            <DrawerNavigation.Screen
                name='About'
                component={AboutNavigator}
                options={{
                    drawerLabel: 'О приложении'
                }}
            />
            <DrawerNavigation.Screen
                name='Create'
                component={CreateNavigator}
                options={{
                    drawerLabel: 'Создать пост'
                }}
            />
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

const PostNavigator = ({ navigation, route }) => {
    return (
        <PostNavigation.Navigator screenOptions={screenOptions}>
            <PostNavigation.Screen
                name='Main' component={MainScreen}
                options={{
                    title: 'Мой блог',
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item title="Take photo" iconName='ios-camera' onPress={() => navigation.navigate('Create')} />
                        </HeaderButtons>),
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item title="Toogle Drawer" iconName='ios-menu' onPress={() => navigation.toggleDrawer()} />
                        </HeaderButtons>)
                }} />
            <PostNavigation.Screen name='Post'
                component={PostScreen}
 />
        </PostNavigation.Navigator>
    )
}

const BookedNavigator = ({ navigation }) => {
    return (
        <PostNavigation.Navigator screenOptions={screenOptions}>
            <PostNavigation.Screen
                name="Booked"
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

const AboutNavigator = ({ navigation }) => {
    return (
        <AboutNavigation.Navigator screenOptions={screenOptions}>
            <AboutNavigation.Screen name='About' component={AboutScreen}
                options={{
                    title:'О приложении',
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item title="Toogle Drawer" iconName='ios-menu' onPress={() => navigation.toggleDrawer()} />
                        </HeaderButtons>)
                }} />
        </AboutNavigation.Navigator>
    )
}

const CreateNavigator = ({ navigation }) => {
    return (
        <CreateNavigation.Navigator screenOptions={screenOptions}>
            <CreateNavigation.Screen name='Create' component={CreateScreen}
                options={{
                    title:'Создать пост',
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item title="Toogle Drawer" iconName='ios-menu' onPress={() => navigation.toggleDrawer()} />
                        </HeaderButtons>)
                }} />
        </CreateNavigation.Navigator>
    )
}

