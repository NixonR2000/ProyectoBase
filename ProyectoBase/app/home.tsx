
import CustomInput from "@/components/Custominput";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
           <View style={styles.content}>
                <CustomInput 
                    label="Correo Electrónico"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    validationRule={(text) => text.includes('@')}
                    errorMessage="Correo inválido"
                />

                <CustomInput 
                    label="Contraseña"
                    value={password}  // Ahora usa el estado correcto
                    onChangeText={setPassword}  // También usa la función correcta
                    secureTextEntry={true}  // Se manejará dentro de CustomInput
                />
           </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4C6EF5'
    },
    content: {
        backgroundColor: '#fff'
    },
    header: {
        backgroundColor: '#364FC7',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerIcon: {
        margin: 10
    },
    headerText: {
        color: "#fff",
        fontSize: 18,
    }
})