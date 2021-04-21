import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard
} from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { Button } from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function UserIdentification () {

    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [userName, setUserName] = useState<string>()

    const navigation = useNavigation()

    function handleInputBlur () {
        setIsFocused(false)
        setIsFilled(!!userName)
    }

    function handleInputFocus () {
        setIsFocused(true)
    }

    function handleInputChange (value: string) {
        setIsFilled(!!value)
        setUserName(value)
    }

    function handleSubmit () {
        navigation.navigate('Confirmation')
    }

    return(
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.form}>
                        <Text style={styles.emoji}>
                            { isFilled ? '😁' : '😀' }
                        </Text>

                        <Text style={styles.title}>
                            Como podemos {'\n'} 
                            chamar você?
                        </Text>

                        <TextInput 
                            style={[
                                styles.input,
                                (isFocused || isFilled) && 
                                {borderColor: colors.green}
                            ]}
                            placeholder='Digite um nome'
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />

                        <View style={styles.footer}>
                            <Button 
                                title='Confirmar'
                                onPress={handleSubmit}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    form:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    emoji:{
        fontSize: 44
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,    
        marginTop: 20
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    footer: {
        width: '100%',
        paddingHorizontal: 10,
        marginTop: 40
    }
})