import { View, Text, Image } from 'react-native'
import Form from '../components/form/Form.jsx'
import styles from './index.style.js'
import {Stack} from 'expo-router'
import Nav from '../components/nav/Nav.jsx'
const Home  = () => {
    return (
    <View>
        <Stack.Screen 
        style={styles.container}
        options={{
            headerTitle: '' ,
            headerLeft: () => (
                <Image dimension='50%' source={require('../images/MarcaFlexyPNG.png')}/>
            ),
            headerRight: () => (
                <Image dimension='100%' source={require('../images/menuPNG.png')}/>
            )
        }}
        />    
        
        <Form></Form>
    </View>
    
)}

export default Home