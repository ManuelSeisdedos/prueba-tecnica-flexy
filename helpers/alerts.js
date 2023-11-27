import {Alert } from 'react-native'

export const  showAlert1 = () => {  
    Alert.alert(  
        'Registro completo',  
        'Se ha registrado exitosamente.',  
        [  
            {  
                text: 'Ok',  
                onPress: () => console.log('Usuario registrado'),  
                style: 'default',  
            }
            
        ]  
    );  
}  