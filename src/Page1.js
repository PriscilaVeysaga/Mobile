import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    StatusBar, 
    Image, 
    TextInput, 
    SafeAreaView, 
    Button,
    Alert 
} from 'react-native'

export default function Page1() {
  
    const [text, onChangeText] = React.useState('Digite seu nome');

    return (
        <View style={styles.container}>
            <Image style={styles.image}
            source={{
                uri: 'https://img.freepik.com/vetores-premium/desenhos-de-animais-fofos-com-ilustracao-em-aquarela_102385-1012.jpg?w=996',
            }}
            />

            <Text style={styles.text}>Hello World</Text>
            <StatusBar style='auto' />

            <SafeAreaView>
               <TextInput
                    style = {styles.input}
                    onChangeText={onChangeText}
                    value={text} 
                />
            </SafeAreaView>

        
            <Button
                title="Clique para entrar"
                color="#ADD8E6"
                onPress={() => Alert.alert("Let's go!")}
                acessibilityLabel="Entre no site"
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF0F5',
        alignItems: 'center',
    },

    text:{
        color:'#FFDAB9',
        fontWeight:600,
        fontSize: 40,
        paddingTop:70,
    },

    image:{
       width: 400,
       height: 200,
       padding:20,
    },

    input: {
        height: 40,
        width: 150,
        margin: 50,
        borderWidth: 1,
        borderColor: '#ADD8E6',
        backgroundColor: '#fff',
        color: '#ADD8E6',  
        padding: 10,
        paddingLeft: 20,
        marginBottom: 70,
      },

    });
