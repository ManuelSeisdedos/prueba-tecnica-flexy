import { View, Text, Image } from 'react-native'
import Form from '../components/form/Form.jsx'
import styles from './index.style.js'
import {Stack} from 'expo-router'
import { useMediaQuery } from "react-responsive";
const Home  = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 720px)'
      })

    return (
    <View style={styles.page}>
        <Stack.Screen 
        style={styles.container}
        options={{
            headerTitle: '' ,
            headerLeft: () => (
                <Image dimension='50%' source={require('../images/MarcaFlexyPNG.png')}/>
            ),
            headerRight: () => 
                {isDesktopOrLaptop && <Image source={require('../images/menuPNG.png')}/> }
        }}
        />
        <View style={styles.layout}> 
            <Form ></Form>
            {isDesktopOrLaptop && <Image style={styles.img} source={require('../images/iniciasesion.png')}/>}
        </View>
    </View>
    
)}

export default Home