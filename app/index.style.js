import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    page: {
        maxWidth: '100%',
        maxHeight: '100%',
    },
    container: {
        borderBottomWidth: 2,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'red',
        position: 'relative'
    },
    layout: {
        display: 'flex',
        flex: 1,
      
    flexDirection: 'row',
      
        maxWidth: '100%'
    },
    img: {
        resizeMode: '50%',
    }
})

export default styles