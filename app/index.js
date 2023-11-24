import { View, Text, Image } from 'react-native'
import Form from '../components/form/Form.jsx'
import styles from './index.style.js'
import {Stack} from 'expo-router'
import { useMediaQuery } from "react-responsive";
const Home  = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 720px)'
      })
    const isMobile = useMediaQuery ({
        query: '(max-width: 719px)'
    })

    return (
    <View style={styles.page}>
        <View style={styles.layout}> 
        <Stack.Screen 
        style={styles.container}
        options={{
            headerTitle: '' ,
            headerLeft: () => (
                <Image dimension='50%' source={require('../images/MarcaFlexyPNG.png')}/>
            ),
            headerRight: () => 
                {isMobile && <Image source={require('../images/menuPNG.png')}/>} 
        }}
        />
        
            <Form ></Form>
        </View> 
            {isDesktopOrLaptop && <Image style={styles.img} source={require('../images/iniciasesion.png')}/>}
        
    </View>
    
)}

export default Home