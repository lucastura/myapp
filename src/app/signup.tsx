import { StyleSheet, Text, View } from "react-native";


export default function signup(){
    return(
        <View style={styles.container}>
                <Text>Bem-Vindo à tela de signup</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#FDFDFD",
        padding:32
    },

})