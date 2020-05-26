import * as React from 'react';
import { Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { THEME } from '../theme';
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


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
