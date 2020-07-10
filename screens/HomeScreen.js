import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Button, ImageBackground, Image } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
export default function LoginScreen({ route, navigation }) {
    const { username } = route.params;
    const { password } = route.params;
    return (
        <ImageBackground source={require('../assets/images/bg.png')} style={styles.image}>
            <StatusBar
                hidden={true}
            />  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Image source={require('../assets/images/robot-prod.png')}
                    style={{ width: 200, height: 200, marginBottom: 10 }}
                />
                <TouchableOpacity style={{ width: 180, height: 60, backgroundColor: '#ff0031ad', borderRadius: 30, alignItems: 'center', justifyContent: 'center', margin: 10 }}
                    onPress={() => navigation.navigate('Quest')}
                    >

                    <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>Görevler</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 180, height: 60, backgroundColor: '#ff0031ad', borderRadius: 30, alignItems: 'center', justifyContent: 'center', margin: 10 }}
                    onPress={() => navigation.navigate('Items')}
                    >

                    <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>İtemler</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 180, height: 60, backgroundColor: '#ff0031ad', borderRadius: 30, alignItems: 'center', justifyContent: 'center', margin: 10 }}>

                    <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>Alışveriş</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 180, height: 60, backgroundColor: '#0cc200cf', borderRadius: 30, alignItems: 'center', justifyContent: 'center', margin: 10 }}

                    onPress={() => navigation.navigate('Map')}
                >

                    <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>Oyna</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 90, height: 40, backgroundColor: '#020B48', borderRadius: 30, alignItems: 'center', justifyContent: 'center', margin: 10 }}
                    onPress={() => navigation.goBack()}
                >

                    <Text style={{ fontSize: 14, color: 'white', fontWeight: 'bold' }}>Çıkış Yap</Text>
                </TouchableOpacity>


            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
    }
});