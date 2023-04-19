import React from 'react';
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation(); {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Calendrier')}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Calendrier</Text>
            </View>
        </TouchableOpacity>
    )
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


export default Calendar;