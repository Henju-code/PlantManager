import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import { Button } from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Confirmation() {
    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>
                😁
                </Text>

            <Text style={styles.title}>
                Prontinho!
                </Text>

            <Text style={styles.subtitle}>
                Agora vamos começar a cuidar das suas
                plantinhas com muito cuidado.
                </Text>

            <View style={styles.footer}>
                <Button
                    title='Confirmar'
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