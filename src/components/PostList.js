import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import { Post } from './Post'

export const PostList = ({ data, onOpen }) => {

    if (!data.length) {
        return <View style={styles.wrapper}>
            <Text style={styles.noItems}>Постов пока нет</Text>
        </View>
    }

    return <FlatList style={styles.wrapper}
        data={data}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={onOpen} />} />
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    noItems: {
        fontFamily: 'open-regular',
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 10
    }
})