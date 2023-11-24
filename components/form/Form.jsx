import React , { useState }from 'react'
import { View, TextInput, Text, Button, Alert, Image, TouchableOpacity} from 'react-native'
import styles from './form.style.js'

const Form = () => {
    const [errors, setErrors] = useState({validate: true})
    
    const [input, setInput] = useState({
        nombre: '',
        telefono: '',
        email: '',
        contraseña: ''
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}> ¡Bienvenido! </Text>
            <Text style={styles.subtitle}> Convertite ahora en un agente Flexy. </Text>
            <View style={styles.detalle}>
                    <View style={styles.subirimg}>
                        <Image
                        style={styles.img}
                        source={require("../../images/galleryPNG.png")}
                        >
                        </Image>
                        <Image
                        style={styles.imgplus}
                        source={require('../../images/IconPNG.png')}
                        ></Image>
                    </View>    
                    <Text style={styles.textimg} > Subí tu foto de perfil </Text>
            </View>
            <TextInput
            style={styles.input}
            name='nombre'
            value={input.nombre}
            placeholder='Nombre y Apellido'
            />
            <TextInput
            name='telefono'
            value={input.telefono}
            style={styles.input}
            placeholder='+54 9 221 000 0000'
            />
            <TextInput
            name='email'
            value={input.email}
            style={styles.input}
            placeholder='hola@tuemail.com'
            />
            <TextInput
            name='contraseña'
            value={input.contraseña}
            style={styles.input}
            placeholder='Ingresá tu contraseña'
            />
            <Text style={styles.text}>
                Debe tener al menos 8 caracteres.
            </Text>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => Alert.alert('Su usuario se registró exitosamente.')}
            >
                <Text style={styles.textbtn}> Registrate </Text>
            </TouchableOpacity>
            <Text style={styles.text}>
                ¿Ya tenes una cuenta? <Text style={{fontWeight: 'bold'}}>Iniciá sesión</Text> 
            </Text>
        </View>
    )
}

export default Form