import React from 'react'
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from 'react-native'
import { DATA } from '../data'
import { THEME } from '../theme'
import { useDispatch, useSelector } from "react-redux";
import { bookingPost } from "../store/actions/post";
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

export const PostScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const postId = route.params?.postId ?? '1'
    const post = DATA.find(p => p.id === postId)

    const booked = useSelector(state =>
        state.post.bookedPosts.some(post => post.id === postId)
    )

    const removeHandler = () => {
        Alert.alert(
            "Удаление поста",
            "Вы точно хотите удалить пост?",
            [
                {
                    text: "Отменить",
                    style: "cancel"
                },
                { text: "Удалить", onPress: () => { }, style: 'destructive' }
            ],
            { cancelable: false }
        );
    }

    navigation.setOptions({
        title: 'Пост от ' + new Date(route.params?.date).toLocaleDateString(),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Take photo" iconName={booked ? 'ios-star' : 'ios-star-outline'} onPress={() => dispatch(bookingPost(postId))} />
            </HeaderButtons>)
    })

    return (
        <ScrollView>
            <Image source={{ uri: post.img }} style={styles.image} />
            <View style={styles.textWrap}>
                <Text style={styles.title}>{post.text}</Text>
            </View>
            <Button title='Удалить' color={THEME.DANGER_COLOR} onPress={removeHandler} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10
    },
    title: {
        fontFamily: 'open-regular'
    }

})
