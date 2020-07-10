import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Button, ImageBackground, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
export default function LoginScreen({ navigation }) {
    const [value, onChangeText] = React.useState('usernam');
    const [value2, onChangeText2] = React.useState('password');
    return (
        <ImageBackground source={require('../assets/images/bg.png')} style={styles.image}>
            <StatusBar
                hidden={true}
            />  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../assets/images/robot-prod.png')}
                    style={{width:200,height:200, marginBottom:20}}
                    />
                <TextInput
                        style={{ height: 40, borderColor: 'white', borderWidth: 1, width: 200, borderRadius: 15, backgroundColor: 'white',paddingLeft:10 }}
                        onChangeText={text => onChangeText(text)}
                        placeholder={"Username"}
                    />
                    <TextInput
                        style={{ height: 40, borderColor: 'white', borderWidth: 1, width: 200, borderRadius: 15, backgroundColor: 'white', marginTop: 20, paddingLeft: 10}}
                        onChangeText={text2 => onChangeText2(text2)}
                        placeholder={"Passwrod"}
                    />
                    <TouchableOpacity style={{ backgroundColor: '#ff0032', marginTop: 20 ,padding:15, borderRadius:20,width:100,}}
                        onPress={() => navigation.navigate('Home', {
                            username: value,
                            password: value2,
                        })}>
                        <Text style={{ color: 'white', textAlign:'center' }}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop: 20,}}
                        onPress={() => navigation.navigate('Home', {
                            username: value,
                            password: value2,
                        })}>
                        <Text style={{ color: 'white', paddingLeft: 10, marginBottom: 70}}>Sign Up</Text>

                    </TouchableOpacity>
                </View>
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
