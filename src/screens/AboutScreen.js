import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const AboutScreen = ({ }) => {
    return <View style={styles.center}>
        <Text>Эта ваш персональный Инстаграм!</Text>
        <Text>Версия <Text style={styles.versions}>0.0.1</Text></Text>

    </View>
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    versions: {
        fontFamily: 'open-bold'
    }
})