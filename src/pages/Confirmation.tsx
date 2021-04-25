import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'

import { Button } from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface Params {
    title: string
    subTitle: string
    buttonTitle: string
    icon: 'smile' | 'hug'
    nextScreen: string
}

const emojis = {
    hug: '🤗',
    smile: '😁'
}

export function Confirmation() {

    const navigation = useNavigation()
    const routes = useRoute()

    const {
        title,
        subTitle,
        buttonTitle,
        icon,
        nextScreen
    } = routes.params as Params

    function handleMoveOn () {
        navigation.navigate(nextScreen)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>
                {emojis[icon]}
                </Text>

            <Text style={styles.title}>
                {title}
            </Text>

            <Text style={styles.subtitle}>
                {subTitle}
            </Text>

            <View style={styles.footer}>
                <Button
                    title={buttonTitle}
                    onPress={handleMoveOn}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emoji: {
        fontSize: 78
    },
    title: {
        fontSize: 22,
        lineHeight: 38,
        textAlign: 'center',
        fontFamily: fonts.heading,
        color: colors.heading,
        marginTop: 15

    },
    subtitle: {
        fontSize: 17,
        textAlign: 'center',
        fontFamily: fonts.text,
        paddingVertical: 10,
        color: colors.heading
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    }
})