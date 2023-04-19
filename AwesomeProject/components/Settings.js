import React from 'react';

const Settings =
    function SettingsScreen() {
        return (
            <View>
                <Text>This is the SettingsScreen</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Calendrier')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Settings</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }



const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },

})


export default Settings;