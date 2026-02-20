import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    label: string;
}

export function Button ({label, style, ...rest} : ButtonProps){
    return(
        <TouchableOpacity style={styles.container} {...rest}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:48,
        backgroundColor:"#3366FF",
        alignItems: "Center",
        justifyContent: "Center",
        BorderRadius: 8,
    },
    label:{
        color: "#fff",
        fontSize:16,
        fontWeight:600

    }
})
