import React, { useState ,useEffect} from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Button, ImageBackground, Image, } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function LoginScreen({ navigation }) {

    const skill1=245;
    const skill2 = 345;
    const skill3 = 145;
    const [value, onChangeText] = React.useState('username');
    const [value2, onChangeText2] = React.useState('password');
    const [EnemyHealth, setEnemyHealth] = useState(1250);
    const [DamageCount, setDamageCount] = useState(0);
    return (
        <ImageBackground source={require('../assets/images/bg3.jpg')} style={styles.image}>
            <StatusBar
                hidden={true}
            />
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                
                 <View>
                    <View style={{position: 'absolute', top: 10, left: 0 }}>
                        <Image source={require('../assets/images/health.png')}
                            style={{ width: 170, height: 60}} />
                        <Text style={{ position: 'absolute', right: 20, top: 15, zIndex: 222, fontSize: 24, fontWeight: 'bold', color: 'red' }}> {EnemyHealth}</Text>
                    </View>
                            
                    <TouchableOpacity style={{ width: 70, height: 60, backgroundColor: '#ff0031ad', borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginTop: 10, marginLeft: 270 }}
                        onPress={() => navigation.goBack()}
                    >

                        <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold', marginBottom: 5 }}>Kaç !</Text>
                    </TouchableOpacity>
                 </View>
                 
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',flexDirection:'row' }}>
                    {DamageCount!==0 &&(<View style={{ position: 'absolute', top: 0,}}>
                        <Image source={require('../assets/images/pow.png')}
                            style={{ width: 175, height: 135, }}
                        />
                        
    <Text style={{ fontWeight: 'bold', fontSize: 37, color: 'black', position: 'absolute', top: 53, left: 56, }}>{DamageCount}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 35, color: 'red', position: 'absolute', top: 53, left: 54, }}>{DamageCount}</Text>
                    </View>)}
                    
                    <Image source={require('../assets/images/knight.png')}
                        style={{ width: 135, height: 125, marginRight: -25}}
                    />
                    <Image source={require('../assets/images/knight2.png')}
                        style={{ width: 160, height: 150, marginTop:50, marginRight:-40 }}
                    />
                    <Image source={require('../assets/images/knight3.png')}
                        style={{ width: 135, height: 125,marginLeft:-25, zIndex:121}}
                    />
                </View>
                <View style={{ }}>
                    <Image source={require('../assets/images/health.png')}
                        style={{ width: 125, height: 45,marginBottom:10 }} />
                    <Text style={{ position: 'absolute', right: 10, top:  5, zIndex: 222, fontSize: 24, fontWeight: 'bold', color: 'red' }}> 2300</Text>
                </View>
                    <View style={{flexDirection:'row',marginBottom:20}}> 
                    <TouchableOpacity style={{ backgroundColor: '#ff0032ad',borderTopLeftRadius: 20, width: 100,height:100,justifyContent:'center',alignItems:'center' }}
                        onPress={() => {
                            setEnemyHealth(EnemyHealth - skill2);
                            setDamageCount(skill1);
                        }}>
                            <Image source={require('../assets/images/skill1.png')}
                                style={{ width: 75, height: 75, }}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#ff0032ad',width: 100, height: 100, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => {
                            setEnemyHealth(EnemyHealth - skill2);
                            setDamageCount(skill2);
                        }}>
                        
                        <Image source={require('../assets/images/skill4.png')}
                            style={{ width: 75, height: 75, }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#ff0032ad', borderTopRightRadius: 20, width: 100, height: 100, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => {
                            setEnemyHealth(EnemyHealth - skill2);
                            setDamageCount(skill3);
                        }}>
                        <Image source={require('../assets/images/skill3.png')}
                            style={{ width: 75, height: 75, }}
                        />
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
