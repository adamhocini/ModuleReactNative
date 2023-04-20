import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';


function Settings(navigation) {
    return (
        <View>
            <Text>This is the Profil Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Settings</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}


export default Settings;

const styles = StyleSheet.create({
    button: {
        width: 110,
        height: 40,
        backgroundColor: '#fff',
        position: 'absolute',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        alignItems: 'center',
        borderColor: '#C0C0C0',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
})
