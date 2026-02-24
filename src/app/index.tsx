import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import { Link } from "expo-router";
import {
    Alert,
    Image,
    KeyboardAvoidingView, Platform,
    ScrollView, StyleSheet, Text, View
} from "react-native";

export default function Index(){
    let email = ""

    function handleSignIn(){
        Alert.alert("Entrar", "Preencha o E-mail para entrar")
        console.log (email)
    }
    return(
            <KeyboardAvoidingView
            style = {{flex:1}}
            behavior={Platform.select({ios:"padding", android:"height"})}
            >

        <ScrollView contentContainerStyle={{ flexGrow:1 }}
                    showsVerticalScrollIndicator={false}>

            <View style={styles.container}>
                <Image 
                    source={require('@/assets/image1.png')}
                    style={styles.ilustration} 
                />
                <View style={styles.form}>
                    <Input placeholder="E-mail"
                    onChangeText={(text) => (email = text)} keyboardType="email-address" />
                    <Input placeholder="Senha" secureTextEntry/>
                    <Button label="Entrar" onPress={handleSignIn} />
                    {/* <Button label="Entrar" style={{ backgroundColor: "green"}}/> */}
                </View>
                <Text style={styles.footerText}>Não tem uma conta? 
                    <Link href="/signup" style={styles.footerLink}>
                        {" "}Cadastre-se aqui
                    </Link>
                </Text>
            </View>
        </ScrollView>
        </KeyboardAvoidingView>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#FDFDFD",
        padding:32
    },
    ilustration:{
        width: "100%",
        height: 330,
        resizeMode:"contain",
        marginTop:62
    }, 
    footerText:{
        textAlign:"center",
        marginTop:24,
        color:"#585860",
    },
    footerLink:{
        color:"#0929b8",
        fontWeight:700
    },
    form: {
        marginTop:24,
        gap:12
    }
})