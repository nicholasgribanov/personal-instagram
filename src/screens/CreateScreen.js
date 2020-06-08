import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, StyleSheet, Image, TextInput, Button, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { THEME } from '../theme'
import { addPost } from '../store/actions/post'
import { PhotoPicker } from '../components/PhotoPicker'

export const CreateScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const [img, setImg] = useState(null)

    const saveHandler = () => {
        const post = {
            img: img,
            booked: false,
            text: text,
            date: new Date().toJSON()
        }
        dispatch(addPost(post))
        setText('')
        setImg(null)
        navigation.navigate('Main')
    }

    const photoHandler = uri => {
        setImg(uri)
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
                    <PhotoPicker onPick={photoHandler} />

                    <Button
                        title="Создать пост"
                        color={THEME.MAIN_COLOR}
                        onPress={saveHandler}
                        disabled={!text || !img}
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