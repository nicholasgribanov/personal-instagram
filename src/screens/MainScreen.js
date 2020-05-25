import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { DATA } from '../data'
import { Post } from '../components/Post'

export const MainScreen = ({ navigation }) => {

    const goToPost = () => {
        navigation.navigate('Post')
    }

    return <FlatList style={styles.wrapper}
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} />} />
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})
