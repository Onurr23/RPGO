import React from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, FlatList,TouchableOpacity, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Görev 1',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Görev 2',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Görev 3',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
        title: 'Görev 4',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f633',
        title: 'Görev 5',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d724',
        title: 'Görev 6',
    },
];
function Item({ title }) {
    return (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <View style={{flexDirection:'column',width:50}}>
                <Text style={{color:'white'}}>Ödül</Text>
                <Text style={{color:'white'}}>23</Text>
            </View>
        </TouchableOpacity>
    );
}
export default function QuestScreen({ route, navigation }) {

    return (
        <ImageBackground source={require('../assets/images/bg.png')} style={styles.image}>
        <SafeAreaView style={styles.container}>
                <View style={{ width: 180, height: 60, backgroundColor: '#ff0031ad', borderRadius: 30, alignItems: 'center', justifyContent: 'center',marginBottom:20 }}
                
                >

                    <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold', marginBottom: 5 }}>Görevler</Text>
                </View>
            <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: '#ff0031ad', borderRadius: 30, alignItems: 'center', justifyContent: 'center', right: 10, top: 10, zIndex: 1, position: 'absolute' }}
                onPress={() => navigation.goBack()}
            >

                <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold', marginBottom: 5 }}>x</Text>
            </TouchableOpacity>
                
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
        </ImageBackground>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        alignItems:'center'
        
    },
    item: {
        backgroundColor: '#020B48',
        padding: 15,
        marginVertical: 8,
        
        flexDirection:'row',
        borderRadius:35
    },
    title: {
        fontSize: 24,
        width:200,
        color:'white'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
});
