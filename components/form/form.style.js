import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 50,
        gap: 13,
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
        fontSize: 14,
        opacity: 0.5
    }, 
    subirimg: {
        flex: 1,
        flexDirection: 'row',       
        position: 'relative' ,
        marginLeft: 5 
    },
    errors:{
        fontSize: 14,
        color: 'red'
    },
    img: {
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
        textAlign: 'center',
        borderRadius: 8,
        backgroundColor: '#7065F0',
        height: 50,
        justifyContent: 'center',
        
    },
    textbtn:{
        textAlign: "center",
        color: '#ffffff',
        fontSize: 16
    },
    text: {
        textAlign: "center"
    }
})

export default styles