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


export default Settings;