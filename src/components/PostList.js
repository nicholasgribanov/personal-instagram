import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Post } from './Post'

export const PostList = ({ data, onOpen }) => {
    return <FlatList style={styles.wrapper}
        data={data}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={onOpen} />} />
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})