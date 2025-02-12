import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import { Button, Text } from "react-native";
import { View } from "react-native-reanimated/lib/typescript/Animated";


export default function HomeScreen(){
    const router =useRouter();
    const {user, logout} = useAuth();


    return (
        <View>
            <Text>Bienvenido, {user?.email || 'Desconocido'} </Text>
            <Button title="Cerrar Sesion" onPress={()=>{logout(); router.replace('/login') }}/>
        </View>
    )
    
}