import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useState } from "react";

import { Link } from "expo-router";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView, StyleSheet, Text, View
} from "react-native";

export default function Signup(){
        const [email, setEmail] = useState("");
        const [nome, setNome]= useState("");
        const [senha, setSenha] = useState("");
        const [conSenha, setconSenha] = useState("");

    return(
        <KeyboardAvoidingView 
                    style={{flex:1}}
                    behavior={Platform.select({ios:"padding", android:"height"})}
        >
        <ScrollView 
            contentContainerStyle={{ flexGrow:1 }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
        >
            <View style={styles.container}>
                <Image 
                    source={require('@/assets/image2.png')}
                    style={styles.ilustration} 
                />
                <Text style={styles.title}>Cadastrar</Text>
                <Text style={styles.subtitle}>Crie sua conta para acessar</Text>
                <View style={styles.form}>
                    <Input placeholder="Nome"
                            onChangeText={setNome} />

                    <Input placeholder="E-mail" keyboardType="email-address" 
                           onChangeText={setEmail}/>
                    
                    <Input placeholder="Senha" secureTextEntry
                            onChangeText={setSenha}/>
                    
                    <Input placeholder="Confirmar Senha" secureTextEntry
                            onChangeText={setconSenha}/>
                    
                    <Button label="Cadastrar" />
                    {/* <Button label="Entrar" style={{ backgroundColor: "green"}}/> */}
                </View>
                <Text style={styles.footerText}>Já tem uma conta? 
                    <Link href="/" style={styles.footerLink}>
                        {" "}Entre aqui
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
    },
   title:{ 
        fontSize: 32,
        fontWeight:900,
    },
    subtitle:{
        fontSize:16,
    },    
})