import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    page: {
        maxWidth: '100%',
        maxHeight: '100%',
        width: '100%',
        flex: 2,
        flexDirection: 'row',
     
    },
    container: {
        borderBottomWidth: 2,
        display: 'flex',
        flexDirection: 'row',

    },
    layout: {
        resizeMode: 'scale',
        width: '50%'
    }, 
    mobform: {
        width: '100%',
    }, 
    img: {
       maxHeight: '100%',
       maxWidth: '100%',
       position: 'relative',
       resizeMode: 'cover',
    }
})

export default styles