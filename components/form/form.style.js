import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingTop: 30,
        gap: 20,
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: "center",
        fontStyle: 'normal'
    
    },
    subtitle: {
        textAlign: "center",
        fontSize: 16,
        opacity: 0.5
    }, 
    subirimg: {
        flex: 1,
        flexDirection: 'row',       
        position: 'relative' ,
        marginLeft: 5        
    },
    img: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor:"#E0DEF7",
        borderRadius: 8,
        backgroundColor: '#F7F7FD',
        position: 'absolute',
        opacity: 0.5
    },
    textimg: {
        marginLeft: 30
    },
    imgplus:{
         marginLeft: 10
    },
    input: {
        borderWidth: 2,
        borderColor:"#E0DEF7",
        borderRadius: 8,
        backgroundColor: '#F7F7FD',
        paddingVertical: 12,
        paddingHorizontal: 16,
        opacity: 0.5
    },
    button: {
        borderRadius: 8,
        width: 1,
        height: 21
    },
    text: {
        textAlign: "center"
    }
})

export default styles