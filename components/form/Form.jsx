import React , { useState }from 'react'
import { View, TextInput, Text, Image, Pressable} from 'react-native'
import styles from './form.style.js'
import { useMediaQuery } from 'react-responsive'
import validate from '../../controllers/validator.js'
const Form = () => {
    const [errors, setErrors] = useState({validate: true})
    
    const [input, setInput] = useState({
        nombre: '',
        telefono: '',
        email: '',
        contraseña: ''
    })


    const handleChange = (e) => {
        setInput({
          ...input,
          [e.id]: e.value,
        });
        setErrors(
          validate({
            ...input,
            [e.id]: e.value,
          })
        );
      };

    const handleSubmit = (e) => {
       
    setInput({
        nombre: '',
        telefono: '',
        email: '',
        contraseña: ''
    });
    setErrors({validate: true})
    alert('Se registró exitosamente.')
    };
    const isMobile = useMediaQuery ({
        query: '(max-width: 719px)'
    })

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 720px)'
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
            <View>
            <TextInput
            style={styles.input}
           
            id='nombre'
            value={input.nombre}
            placeholder='Nombre y Apellido'
            onChangeText={(e) => handleChange({id:'nombre',
            value: e})}
            
            />
            {errors.nombre !== '' && <Text style={styles.errors}>{errors.nombre} </Text>}
            </View>
            <View>
            <TextInput
            id='telefono'
            value={input.telefono}
            style={styles.input}
            placeholder='+54 9 221 000 0000'
            onChangeText={(e) => handleChange({id:'telefono', value: e})}
            />
            {errors.telefono !== '' && <Text style={styles.errors}>{errors.telefono} </Text>}
            </View>
            <View>
            <TextInput
            id='email'
            value={input.email}
            style={styles.input}
            placeholder='hola@tuemail.com'
            onChangeText={(e) => handleChange({id:'email', value: e})}
            />
            {errors.email !== '' && <Text style={styles.errors}>{errors.email} </Text>}
            </View>
            <View>
            <TextInput
            id='contraseña'
            value={input.contraseña}
            style={styles.input}
            placeholder='Ingresá tu contraseña'
            onChangeText={(e) => handleChange({id:'contraseña', value: e})}
            />
            {errors.contraseña !== '' && <Text style={styles.errors}>{errors.contraseña} </Text>}
            </View>
            {isMobile && <Text style={styles.text}>
                ¿Olvidaste tu contraseña?
            </Text> }
            {isDesktopOrLaptop && <Text style={styles.text}>
                Debe tener al menos 8 caracteres.
            </Text>}
            <Pressable 
            style={styles.button}
            disabled={errors.validate}
            onPress={() => handleSubmit()}
            >
                <Text style={styles.textbtn}> Registrate </Text>
            </Pressable>
            <Text style={styles.text}>
                ¿Ya tenes una cuenta? <Text style={{fontWeight: 'bold'}}>Iniciá sesión</Text> 
            </Text>
        </View>
    )
}

export default Form