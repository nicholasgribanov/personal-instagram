import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, StyleSheet, Image, TextInput, Button, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { THEME } from '../theme'
import { addPost } from '../store/actions/post'

export const CreateScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const img = 'https://scontent-arn2-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/83631485_649899789089916_4908424426903329056_n.jpg?_nc_ht=scontent-arn2-2.cdninstagram.com&_nc_cat=100&_nc_ohc=moB3OQNCIKoAX9k0T3f&oh=8d8ce414ee1c2e88f58db8906e7d1808&oe=5EF6EBEA'

    const saveHandler = () => {
        const post = {
            img: img,
            booked: false,
            text: text,
            date: new Date().toJSON()
        }
        dispatch(addPost(post))
        setText('')
        navigation.navigate('Main')
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Создай новый пост</Text>
                    <TextInput
                        style={styles.textarea}
                        placeholder="Введите текст поста"
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <Image
                        style={{ width: '100%', height: 200 }}
                        source={{
                            uri: img
                        }}
                    />

                    <Button
                        title="Создать пост"
                        color={THEME.MAIN_COLOR}
                        onPress={saveHandler}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10

    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'open-regular',
        marginVertical: 10
    },
    textarea: {
        padding: 10,
        marginBottom: 10
    }
})